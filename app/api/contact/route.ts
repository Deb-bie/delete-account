import { NextResponse } from 'next/server';

// Sends contact-form messages to the mySkiin inbox via Resend (https://resend.com).
// Required env vars (set in .env.local and in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY     – API key from https://resend.com/api-keys
//   CONTACT_TO_EMAIL   – inbox that receives messages (e.g. tryskincare.ai@gmail.com)
// Optional:
//   CONTACT_FROM_EMAIL – sender, e.g. "mySkiin <contact@yourdomain.com>" once a domain is verified in Resend.
//                        Defaults to Resend's test sender, which can only deliver to the email you signed up with.

const SUBJECTS: Record<string, string> = {
  account: 'Account & billing',
  privacy: 'Privacy & data',
  bug: 'Bug report',
  feature: 'Feature request',
  other: 'Other',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort per-instance rate limit: 5 messages per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success so bots move on.
  if (clean(body.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 100).replace(/[\r\n]+/g, ' ');
  const email = clean(body.email, 200);
  const subjectKey = clean(body.subject, 20);
  const message = clean(body.message, 5000);

  if (!name || !EMAIL_RE.test(email) || !SUBJECTS[subjectKey] || message.length < 10) {
    return NextResponse.json(
      { error: 'Please fill in every field with a valid email and a message of at least 10 characters.' },
      { status: 400 },
    );
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many messages. Please wait a few minutes and try again.' },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'mySkiin Contact <onboarding@resend.dev>';

  if (!apiKey || !to) {
    console.error('[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set');
    return NextResponse.json(
      { error: 'The contact form is not available right now. Please email us directly.' },
      { status: 500 },
    );
  }

  const topic = SUBJECTS[subjectKey];
  const text = `New message from the mySkiin contact form\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}\n`;
  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:15px;color:#0f172a;line-height:1.5">
      <h2 style="margin:0 0 16px;font-size:18px">New message from the mySkiin contact form</h2>
      <table style="border-collapse:collapse;margin-bottom:16px">
        <tr><td style="padding:2px 12px 2px 0;color:#64748b">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:2px 12px 2px 0;color:#64748b">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:2px 12px 2px 0;color:#64748b">Topic</td><td>${escapeHtml(topic)}</td></tr>
      </table>
      <div style="white-space:pre-wrap;border-top:1px solid #e2e8f0;padding-top:16px">${escapeHtml(message)}</div>
      <p style="margin-top:24px;color:#94a3b8;font-size:13px">Reply to this email to answer ${escapeHtml(name)} directly.</p>
    </div>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: to.split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: email,
        subject: `[mySkiin] ${topic} – ${name}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      console.error('[contact] Resend error', res.status, await res.text());
      return NextResponse.json(
        { error: 'We couldn’t send your message. Please try again or email us directly.' },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error('[contact] Network error sending email', err);
    return NextResponse.json(
      { error: 'We couldn’t send your message. Please try again or email us directly.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
