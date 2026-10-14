import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy – mySkiin',
  description: 'What the mySkiin app collects, why, who it is shared with, and the choices you have.',
};

const LAST_UPDATED = 'October 10, 2026';
const OWNER = 'mySkiin';
const SUPPORT_EMAIL = 'tryskincare.ai@gmail.com';
const DELETE_URL = 'https://myskiin.vercel.app/login?redirect=/delete-account';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-100 pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-slate-500 mb-2">Last updated: {LAST_UPDATED}</p>
          <h1 className="heading-font text-5xl font-light text-slate-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-3">
            This policy explains what information the mySkiin app (“mySkiin”, “we”, “us”) collects, why, who it is shared with, and the choices you have. It applies to the mySkiin mobile app for iPhone and Android and to myskiin.vercel.app.
          </p>
          <p className="text-slate-600 leading-relaxed">
            If you have questions, email us at <Email />.
          </p>
        </div>

        {/* Short version */}
        <div className="bg-white rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-8 mb-8">
          <h2 className="heading-font text-2xl font-semibold text-slate-900 mb-4">The short version</h2>
          <List
            items={[
              'We collect what the app needs to work: your account, your skin profile, your routines and products, your skin-journal photos and notes, and your messages to the AI coach.',
              'We don’t sell your data, show ads, or use tracking or advertising tools.',
              'Your data is stored with Google Firebase. Messages to the AI coach are processed by Groq to write the reply.',
              'You can edit your profile at any time and delete your account and data from the app or on the web.',
            ]}
          />
        </div>

        {/* Sections */}
        <div className="bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/60 divide-y divide-slate-100">
          <Section title="1. Information we collect">
            <SubHeading>Account information</SubHeading>
            <List
              items={[
                'Your name and email address.',
                'How you sign in: email and password, Google, or Apple. If you use “Hide My Email” with Apple, we receive Apple’s relay address, not your real email.',
                'A user ID that Firebase creates for your account.',
              ]}
            />
            <SubHeading>Your skin profile (from the skin assessment and Edit profile)</SubHeading>
            <List
              items={[
                'Age range, skin type, skin concerns and your current routine level.',
                'Skin tone, if you choose to share it (“Prefer not to say” is always available).',
                'Anything you type under “Other” for skin concerns.',
                'Your answers to the optional skin type quiz.',
              ]}
            />
            <SubHeading>Routines and products</SubHeading>
            <List
              items={[
                'The routines you build, which steps you complete or skip each day, and reminder times.',
                'Products you add to your shelf, including names, brands, categories, ingredients, expiry dates, notes and any product photos you take (photos are optional).',
              ]}
            />
            <SubHeading>Skin journal</SubHeading>
            <List
              items={[
                'The daily photos you add, plus the notes, overall skin condition and concerns you record with them.',
              ]}
            />
            <SubHeading>AI coach and skin chat</SubHeading>
            <List
              items={[
                'The messages you send to the coach and its replies.',
                'What you type in the skin chat when you first set up mySkiin (for example “dark spots and big pores”), which we use to build your skin profile.',
                'Product descriptions you type when you use “Describe it and I’ll fill it in” to add a product to your shelf, which we use to fill in the product’s details.',
                'To give relevant answers, each message is sent together with a short summary of your skin profile (skin type, skin tone and concerns).',
              ]}
            />
            <SubHeading>Information stored only on your device</SubHeading>
            <List
              items={[
                'Your AI chat history, your avatar picture (including a selfie, if you choose one), app settings and a local copy of your data so the app works offline. This is removed from the device when you sign out.',
              ]}
            />
            <SubHeading>Technical information</SubHeading>
            <List
              items={[
                'Firebase App Check confirms that requests come from the genuine app. We keep a daily count of AI requests (coach messages, skin chat and product filling) per account to enforce a fair-use limit; these counts are deleted automatically after 30 days. If our safety filters block a message, we log the account ID and the reason, but not the message itself.',
              ]}
            />
            <p>
              We do <strong className="text-slate-800">not</strong> use advertising IDs, analytics or tracking tools, and we do not collect your location, contacts or browsing history.
            </p>
          </Section>

          <Section title="2. How we use your information">
            <List
              items={[
                'To run the app: your account, routines, reminders, shelf and journal.',
                'To personalise product suggestions and routines using your skin profile.',
                'To answer your questions in the AI coach.',
                'To keep the service safe: preventing abuse, enforcing usage limits and blocking harmful content.',
                <>To improve the app. When you describe a concern under “Other”, we keep an <strong className="text-slate-800">anonymous</strong> copy of the text (with no name, email or user ID) so we can add common concerns to the app.</>,
                'To contact you about your account or security. We don’t send marketing emails unless you choose to receive them.',
              ]}
            />
          </Section>

          <Section title="3. Skin and health-related information">
            <p>
              Your skin type, skin tone, concerns and journal photos can be sensitive. We use them only to provide and personalise mySkiin, never for advertising, and we never sell them. Skin tone is optional. mySkiin gives general skincare information and is not a medical service.
            </p>
          </Section>

          <Section title="4. Who we share information with">
            <p>We share information only with these service providers, and only so the app can work:</p>
            <div className="overflow-x-auto -mx-2">
              <table className="w-full text-left text-sm border-collapse min-w-[520px] mx-2">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-900">
                    <th className="py-2 pr-4 font-semibold">Provider</th>
                    <th className="py-2 pr-4 font-semibold">What they do</th>
                    <th className="py-2 font-semibold">What they receive</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 align-top">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-800">Google Firebase (Google LLC)</td>
                    <td className="py-3 pr-4">Sign-in, database, photo storage, server functions</td>
                    <td className="py-3">Your account and app data described above</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-800">Groq, Inc.</td>
                    <td className="py-3 pr-4">Writes the AI coach’s replies, runs the setup skin chat and fills in products you describe</td>
                    <td className="py-3">Your coach and skin-chat messages, product descriptions you type, and your skin profile summary, sent with your user ID</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-800">Apple and Google</td>
                    <td className="py-3 pr-4">Sign in with Apple and Sign in with Google</td>
                    <td className="py-3">What you approve when you sign in</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              You must agree before anything you type is sent to our AI provider (for the coach, the skin chat or describing a product). If you don’t agree, the skin chat and product filling still work in a simpler mode on your phone. You can withdraw this at any time in <strong className="text-slate-800">Settings → Share chats with AI provider</strong>.
            </p>
            <p>
              We may also share information if the law requires it, or to protect the rights and safety of our users or others. If mySkiin is ever sold or merged, your information would move under the same protections, and we would tell you first.
            </p>
            <p>We do not sell or rent your personal information, and we do not share it for advertising.</p>
          </Section>

          <Section title="5. Where your data is stored and how it is protected">
            <p>
              Your data is stored with Google Firebase, in data centres mainly in the United States. Our AI provider, Groq, is also based in the United States. If you live elsewhere, your information will be transferred to and processed in the United States.
            </p>
            <p>
              Data is encrypted in transit (HTTPS) and at rest by Google. Access is limited by security rules, so only you can read your own data.
            </p>
          </Section>

          <Section title="6. How long we keep it">
            <p>
              We keep your data while your account is open. When you delete your account, we delete your profile, routines, products and custom categories, journal photos and notes, assessments and reminders. Residual copies in Google’s backups are removed within about 30 days. Anonymous “Other” concern text can’t be linked back to you, so it isn’t deleted.
            </p>
          </Section>

          <Section title="7. Your choices and rights">
            <List
              items={[
                <><strong className="text-slate-800">See and correct:</strong> most of your information is visible in the app. Edit your profile under <strong className="text-slate-800">Me → Edit profile</strong>.</>,
                <><strong className="text-slate-800">Delete:</strong> delete your account in the app (<strong className="text-slate-800">Me → Delete account</strong>) or on the web at <Link href="/login?redirect=/delete-account" className="text-slate-800 underline underline-offset-2 break-all">{DELETE_URL}</Link>. You can also email us.</>,
                <><strong className="text-slate-800">Get a copy:</strong> email us and we’ll send you a copy of your data.</>,
                <><strong className="text-slate-800">AI coach:</strong> turn off sharing in <strong className="text-slate-800">Settings</strong> at any time.</>,
                <><strong className="text-slate-800">Permissions:</strong> you can turn camera, photo and notification access on or off in your phone’s settings.</>,
              ]}
            />
            <p>
              Depending on where you live (for example the EU, UK or California), you may have additional rights, such as to object to or restrict processing, or to complain to a data protection authority. Email us to exercise any of them; we’ll reply within 30 days.
            </p>
          </Section>

          <Section title="8. Children">
            <p>
              mySkiin is not intended for children under 13, or under the minimum age in your country. We don’t knowingly collect data from children under 13. If you believe a child has given us information, email us and we’ll delete it.
            </p>
          </Section>

          <Section title="9. Changes to this policy">
            <p>
              If we make important changes, we’ll tell you in the app or by email before they take effect. The date at the top shows when this policy last changed.
            </p>
          </Section>

          <Section title="10. Contact">
            <div className="bg-slate-50 rounded-xl p-5 text-slate-700">
              <p className="font-semibold text-slate-900 mb-1">{OWNER}</p>
              <p>Email: <Email /></p>
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-slate-800 pt-2">{children}</h3>;
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

function Email() {
  return (
    <a href={`mailto:${SUPPORT_EMAIL}`} className="text-slate-800 underline underline-offset-2 font-medium">
      {SUPPORT_EMAIL}
    </a>
  );
}
