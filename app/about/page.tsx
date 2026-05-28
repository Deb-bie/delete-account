import Link from 'next/link';

export const metadata = {
  title: 'About – mySkiin',
  description: 'Learn about mySkiin — your personal skincare companion.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-100 pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-16">
            {/* <div className="inline-block mb-8 relative">
              <div className="absolute inset-0 bg-slate-500/10 blur-2xl rounded-full"></div>
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 relative">
                <circle cx="32" cy="32" r="30" fill="#f8fafc" stroke="#64748b" strokeWidth="2"/>
                <circle cx="32" cy="24" r="8" fill="#64748b"/>
                <path d="M16 48C16 40 22 36 32 36C42 36 48 40 48 48" stroke="#64748b" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div> */}
            <h1 className="heading-font text-5xl md:text-6xl font-light text-slate-900 tracking-tight mb-6">
              About mySkiin
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              mySkiin was built from a simple belief: great skin comes from understanding your skin — not from following generic advice.
            </p>
          </div>

          {/* Story */}
          <div className="bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/60 p-10 mb-8">
            <h2 className="heading-font text-3xl font-semibold text-slate-900 mb-5">Our Story</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Skincare can feel overwhelming. With thousands of products on the market and endlessly conflicting advice, it's hard to know what actually works — especially when everyone's skin is different.
              </p>
              <p>
                mySkiin was created to cut through the noise. We built a simple, privacy-first app that lets you track your own skincare journey: log your routine, note how your skin responds, and discover patterns that help you make smarter choices.
              </p>
              <p>
                We believe your skin data should stay yours. mySkiin never sells your data or uses it for advertising. Everything you track is private, secure, and entirely under your control.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/60 p-10 mb-8">
            <h2 className="heading-font text-3xl font-semibold text-slate-900 mb-8">What we believe in</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  icon: '🔒',
                  title: 'Privacy First',
                  desc: 'Your skincare data is personal. We protect it with the same care you give your skin.',
                },
                {
                  icon: '✨',
                  title: 'Simplicity',
                  desc: 'Skincare doesn\'t have to be complicated. Neither does the app that helps you track it.',
                },
                {
                  icon: '📊',
                  title: 'Evidence Over Hype',
                  desc: 'We help you find what works for your skin, based on your actual data — not trends.',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-900 rounded-2xl p-10 text-center">
            <h2 className="heading-font text-3xl font-light text-white mb-3 tracking-tight">Start your skin journey</h2>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Join mySkiin and start understanding your skin better, one day at a time.
            </p>
            <Link
              href="/login"
              className="inline-block px-7 py-3.5 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 shadow-lg transition-all duration-200 text-sm"
            >
              Create your account
            </Link>
          </div>
        </div>
      </div>
  );
}
