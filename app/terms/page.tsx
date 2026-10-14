import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service – mySkiin',
  description: 'The terms for using the mySkiin app and website.',
};

const LAST_UPDATED = 'October 10, 2026';
const OWNER = 'mySkiin';
const SUPPORT_EMAIL = 'tryskincare.ai@gmail.com';
const GOVERNING_STATE = 'Nebraska';
const DELETE_URL = 'https://myskiin.vercel.app/login?redirect=/delete-account';

const linkClass = 'text-slate-800 underline underline-offset-2';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-100 pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-slate-500 mb-2">Last updated: {LAST_UPDATED}</p>
          <h1 className="heading-font text-5xl font-light text-slate-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            These terms are an agreement between you and <strong className="text-slate-800">{OWNER}</strong> (“mySkiin”, “we”, “us”) for using the mySkiin app and website. By creating an account or using mySkiin, you agree to these terms and to our{' '}
            <Link href="/privacy" className={linkClass}>Privacy Policy</Link>. If you don’t agree, please don’t use mySkiin.
          </p>
        </div>

        {/* Sections */}
        <div className="bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/60 divide-y divide-slate-100">
          <Section title="1. Who can use mySkiin">
            <p>
              You must be at least 13 years old, or the minimum age in your country, to use mySkiin. If you are under 18, you need a parent’s or guardian’s permission. You’re responsible for keeping your login details safe and for activity on your account.
            </p>
          </Section>

          <Section title="2. What mySkiin does">
            <p>
              mySkiin helps you build and track a skincare routine. It suggests products based on your answers, lets you keep a shelf of products and a skin photo journal, sends reminders, and uses AI to set up your skin profile from a short chat, fill in product details you describe, and answer questions as a skincare coach. mySkiin is currently free. If we ever introduce paid features, we’ll show the price and terms clearly before you pay.
            </p>
          </Section>

          <Section title="3. Not medical advice">
            <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-5 space-y-3 text-amber-900">
              <p>
                mySkiin gives general skincare information only. It is not a medical device and does not diagnose, treat, cure or prevent any disease or skin condition. Product suggestions and routines are based on your answers and general ingredient information, not on an examination of your skin.
              </p>
              <p>
                Always patch-test new products, follow the manufacturer’s instructions and check ingredient lists for allergens. If you have a skin condition, a reaction, a mole or spot that changes, or any concern about your health, see a dermatologist or doctor. In an emergency, contact your local emergency services.
              </p>
            </div>
          </Section>

          <Section title="4. AI features">
            <p>This covers the AI coach, the setup skin chat and “Describe it and I’ll fill it in” for products.</p>
            <List
              items={[
                'Replies and filled-in details are generated automatically by an AI model (provided by Groq) and are not reviewed by a person. They can be incomplete or wrong, so use your own judgement and don’t rely on them for medical decisions.',
                'Check the skin profile and any product details the app fills in before you save them, especially ingredients and expiry dates.',
                'If you don’t agree to share your text with our AI provider, the skin chat and product filling work in a simpler mode on your phone.',
                'The coach only discusses skincare. It may decline or redirect off-topic, unsafe or harmful requests.',
                'Please don’t share sensitive details you don’t need to, such as other health conditions, ID or financial information.',
                'There is a daily limit on AI requests, shared across these features, to keep the service fair and affordable.',
              ]}
            />
          </Section>

          <Section title="5. Product information">
            <p>
              Product names, brands, images, descriptions and price ranges are provided for information only and may be incomplete or out of date. Price tiers (budget, mid-range and premium) are rough guides; actual prices vary by store and country, and we don’t sell products. mySkiin is not affiliated with, endorsed by, or paid by the brands shown unless we say so clearly. Check the product packaging before use.
            </p>
          </Section>

          <Section title="6. Your content">
            <p>
              You own the content you add, such as photos, notes, products and messages. You give us a limited licence to store, process and display it only to provide mySkiin to you, including sending what you type into the AI features to our AI provider. This licence ends when you delete the content or your account, except for copies kept briefly in backups. Don’t upload content you don’t have the right to share, or photos of other people without their permission.
            </p>
          </Section>

          <Section title="7. Reminders">
            <p>
              Reminders depend on your phone’s notification settings and may be delayed or not arrive. Don’t rely on mySkiin for reminders about medication or treatment prescribed by a doctor.
            </p>
          </Section>

          <Section title="8. Acceptable use">
            <p>Please don’t:</p>
            <List
              items={[
                'break the law or use mySkiin to harm, harass or impersonate anyone;',
                'try to access other people’s accounts or data, or get around security or usage limits;',
                'copy, scrape, reverse-engineer or resell the app or its content;',
                'use bots or automated tools to use the app or the AI coach;',
                'upload unlawful, sexual, hateful or violent content, or malware.',
              ]}
            />
          </Section>

          <Section title="9. Our app and content">
            <p>
              The mySkiin app, design, name, logo and content (other than your content and third-party product information) belong to us and are protected by law. You may use the app for your own personal, non-commercial use.
            </p>
          </Section>

          <Section title="10. Changes, suspension and ending your account">
            <p>
              We’re improving mySkiin all the time and may add, change or remove features. We may suspend or close accounts that break these terms or put other users or the service at risk. Where reasonable, we’ll tell you first.
            </p>
            <p>
              You can stop using mySkiin and delete your account at any time in the app (<strong className="text-slate-800">Me → Delete account</strong>) or at{' '}
              <Link href="/login?redirect=/delete-account" className={`${linkClass} break-all`}>{DELETE_URL}</Link>.
            </p>
          </Section>

          <Section title="11. Disclaimers">
            <p>
              mySkiin is provided “as is” and “as available”. As far as the law allows, we make no promises that it will be uninterrupted, error-free, or that any routine or product will give a particular result. Skin responds differently from person to person.
            </p>
          </Section>

          <Section title="12. Limitation of liability">
            <p>
              As far as the law allows, we are not liable for indirect, incidental or consequential losses, or for reactions to products you choose to use. Our total liability for any claim relating to mySkiin is limited to the amount you paid us in the 12 months before the claim, or USD $50 if you paid nothing. Nothing in these terms limits liability that can’t be limited by law, or your rights as a consumer where you live.
            </p>
          </Section>

          <Section title="13. Third-party services">
            <p>
              mySkiin relies on services such as Google Firebase, Groq, Apple and Google sign-in. Their own terms and privacy policies also apply when you use those features.
            </p>
          </Section>

          <Section title="14. Apple App Store terms">
            <p>If you downloaded mySkiin from the Apple App Store:</p>
            <List
              items={[
                'These terms are between you and us, not Apple. Apple is not responsible for mySkiin or its content.',
                'Apple has no obligation to provide maintenance or support for mySkiin.',
                'If mySkiin fails to meet any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any). Apple has no other warranty obligation.',
                'Apple is not responsible for any claims relating to mySkiin, including product liability, legal or regulatory claims, or intellectual property claims.',
                'You confirm that you are not in a country under a U.S. government embargo and are not on a U.S. government list of restricted parties.',
                'Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them against you.',
              ]}
            />
          </Section>

          <Section title="15. Governing law">
            <p>
              These terms are governed by the laws of <strong className="text-slate-800">{GOVERNING_STATE}, USA</strong>. Disputes will be handled in the courts of <strong className="text-slate-800">{GOVERNING_STATE}</strong>, unless the law where you live gives you the right to bring a claim locally. Please contact us first; most issues can be solved quickly by email.
            </p>
          </Section>

          <Section title="16. Changes to these terms">
            <p>
              If we make important changes, we’ll tell you in the app or by email before they take effect. If you keep using mySkiin after that, the new terms apply.
            </p>
          </Section>

          <Section title="17. Contact">
            <div className="bg-slate-50 rounded-xl p-5 text-slate-700">
              <p className="font-semibold text-slate-900 mb-1">{OWNER}</p>
              <p>
                Email:{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className={`${linkClass} font-medium`}>
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

// ─── Helper components ───────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-8 space-y-4">
      <h2 className="heading-font text-2xl font-semibold text-slate-900">{title}</h2>
      <div className="space-y-3 text-slate-600 leading-relaxed">{children}</div>
    </div>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600 leading-relaxed">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
