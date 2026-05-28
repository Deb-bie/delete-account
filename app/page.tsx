'use client';

import Link from 'next/link';

// ── Replace these with your actual store URLs ──────────────────────────────
const APP_STORE_URL = '#'; // e.g. https://apps.apple.com/app/myskiin/id...
const PLAY_STORE_URL = '#'; // e.g. https://play.google.com/store/apps/details?id=...
// ─────────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Routine Tracking',
    description: 'Log your morning and evening skincare routines. Track what you use, when, and how your skin responds over time.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Product Discovery',
    description: 'Search and explore skincare products. See ingredient breakdowns and find what works for your unique skin type.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Skin Progress',
    description: 'Visualise your skin journey with progress tracking. Identify patterns, triggers, and the products that make a real difference.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'AI Skin Assistant',
    description: 'Get personalised skincare guidance from our AI chatbot — ask questions, get routine tips, and understand your ingredients.',
  },
];

// ── Store badge buttons ────────────────────────────────────────────────────

function AppStoreBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black text-white hover:bg-zinc-800 transition-all duration-200 shadow-lg shadow-black/20 hover:shadow-xl group ${className}`}
    >
      {/* Apple logo */}
      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className="text-left leading-tight">
        <p className="text-[10px] text-white/70 font-normal">Download on the</p>
        <p className="text-sm font-semibold">App Store</p>
      </div>
    </a>
  );
}

function PlayStoreBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black text-white hover:bg-zinc-800 transition-all duration-200 shadow-lg shadow-black/20 hover:shadow-xl group ${className}`}
    >
      {/* Google Play triangle logo */}
      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M3.18 23.76c.3.17.64.24.99.2L15.5 12 4.17.04a1.83 1.83 0 00-.99.2C2.46.67 2 1.42 2 2.28v19.44c0 .86.46 1.61 1.18 2.04z" fill="#EA4335"/>
        <path d="M20.23 10.21L17.07 8.4 13.4 12l3.67 3.6 3.16-1.8a2.06 2.06 0 000-3.59z" fill="#FBBC05"/>
        <path d="M4.17.04L15.5 12 17.07 8.4 5.54.17A2.1 2.1 0 004.17.04z" fill="#4285F4"/>
        <path d="M4.17 23.96a2.1 2.1 0 001.37-.13l11.53-8.23L15.5 12 4.17 23.96z" fill="#34A853"/>
      </svg>
      <div className="text-left leading-tight">
        <p className="text-[10px] text-white/70 font-normal">Get it on</p>
        <p className="text-sm font-semibold">Google Play</p>
      </div>
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        .heading-font { font-family: 'Crimson Pro', serif; }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeSlideIn 0.7s ease-out forwards; }
        .animate-fade-in-delay { animation: fadeSlideIn 0.7s ease-out 0.15s forwards; opacity: 0; }
        .animate-fade-in-delay-2 { animation: fadeSlideIn 0.7s ease-out 0.3s forwards; opacity: 0; }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-100 overflow-hidden pt-16">
        {/* background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm text-slate-600 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Your personal skincare companion
          </div>

          {/* Headline */}
          <h1 className="heading-font text-6xl md:text-7xl font-light text-slate-900 leading-tight tracking-tight mb-6 animate-fade-in-delay">
            Know your skin.<br />
            <span className="text-slate-500">Love your glow.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-delay-2">
            mySkiin helps you track your skincare routine, discover the right products, and get AI-powered guidance — all in one place. Available on iOS and Android.
          </p>

          {/* Store badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
            <AppStoreBadge />
            <PlayStoreBadge />
          </div>

          {/* Small reassurance line */}
          <p className="mt-5 text-sm text-slate-400 animate-fade-in-delay-2">
            Free to download · Available worldwide
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-font text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              Everything your skin needs
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              Simple, thoughtful tools designed to help you build a skincare routine that actually works.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-slate-100 flex items-center justify-center text-slate-600 mb-5 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-base">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-100 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-font text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              How mySkiin works
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              Getting started is simple. Your better skin journey is just a few steps away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Download the app', desc: 'Get mySkiin free from the App Store or Google Play and create your account in seconds.' },
              { step: '02', title: 'Build your routine', desc: 'Log the products you use daily, note how your skin feels, and chat with our AI assistant.' },
              { step: '03', title: 'See the difference', desc: 'Over time, mySkiin surfaces patterns and insights to help you refine what works for your skin.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative text-center">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mx-auto mb-5">
                  <span className="heading-font text-xl font-semibold text-slate-400">{step}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA banner ── */}
      <section id="download" className="bg-slate-900 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-font text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Ready to start your journey?
          </h2>
          <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
            Download mySkiin for free and take the guesswork out of skincare.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AppStoreBadge className="!bg-white !text-slate-900 hover:!bg-slate-100 [&_p]:!text-slate-500 [&_p:last-child]:!text-slate-900 shadow-white/10" />
            <PlayStoreBadge className="!bg-white !text-slate-900 hover:!bg-slate-100 shadow-white/10" />
          </div>
          <p className="mt-6 text-slate-500 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-slate-300 hover:text-white underline underline-offset-2 transition-colors">
              Sign in to manage your account
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
