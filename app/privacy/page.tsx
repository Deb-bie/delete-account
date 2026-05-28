export const metadata = {
  title: 'Privacy Policy – mySkiin',
  description: 'How mySkiin collects, uses, and protects your personal data.',
};

export default function PrivacyPage() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-100 pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm text-slate-500 mb-2">Last updated: May 2026</p>
            <h1 className="heading-font text-5xl font-light text-slate-900 tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              At mySkiin, your privacy matters deeply to us. This policy explains what information we collect, how we use it, and your rights regarding your data.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/60 divide-y divide-slate-100">
            {[
              {
                title: '1. Information We Collect',
                body: `We collect information you provide directly when you create an account, including your name, email address, and any skincare-related information you choose to add to your profile such as skin type, concerns, and routine logs.\n\nWe also collect usage data automatically — such as how you interact with the app, which features you use, and your device type and operating system — to help us improve the experience.`,
              },
              {
                title: '2. How We Use Your Information',
                body: `We use your information to operate and personalise the mySkiin app, including powering your routine tracker, providing product recommendations, and surfacing insights about your skin over time.\n\nWe may also use your email to send important account notices, security alerts, or — with your consent — product updates and tips. We do not send unsolicited marketing emails.`,
              },
              {
                title: '3. Data Storage & Security',
                body: `Your data is stored securely using Google Firebase infrastructure, which is encrypted in transit and at rest. We implement industry-standard security measures to protect your account.\n\nYou can delete your account and all associated data at any time from the settings page. Deletion is permanent and irreversible.`,
              },
              {
                title: '4. Sharing Your Data',
                body: `We do not sell, rent, or share your personal data with third parties for advertising or marketing purposes. We only share data when required by law, or with service providers (like Firebase) who help us operate the app under strict data processing agreements.`,
              },
              {
                title: '5. Cookies & Analytics',
                body: `mySkiin may use cookies and similar technologies to keep you signed in and to understand how the app is used. Analytics data is aggregated and anonymised where possible.`,
              },
              {
                title: '6. Your Rights',
                body: `You have the right to access, correct, or delete your personal data at any time. You can export or delete your data directly in the app. If you have questions about your data or wish to make a formal request, please contact us at privacy@myskiin.com.`,
              },
              {
                title: '7. Children\'s Privacy',
                body: `mySkiin is not intended for children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately.`,
              },
              {
                title: '8. Changes to This Policy',
                body: `We may update this Privacy Policy from time to time. We will notify you of significant changes via email or an in-app notice. Continued use of mySkiin after changes take effect constitutes your acceptance of the updated policy.`,
              },
              {
                title: '9. Contact Us',
                body: `For any privacy-related questions or concerns, reach us at privacy@myskiin.com or through our Contact page.`,
              },
            ].map(({ title, body }) => (
              <div key={title} className="p-8">
                <h2 className="heading-font text-2xl font-semibold text-slate-900 mb-4">{title}</h2>
                {body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-3 last:mb-0">{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
