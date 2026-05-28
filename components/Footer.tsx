import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <circle cx="16" cy="16" r="15" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5"/>
                <circle cx="16" cy="12" r="4" fill="#64748b"/>
                <path d="M8 24C8 20 11 18 16 18C21 18 24 20 24 24" stroke="#64748b" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-lg font-semibold text-slate-900" style={{ fontFamily: "'Crimson Pro', serif" }}>mySkiin</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Your personal skincare companion. Track routines, discover products, and understand your skin.
            </p>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">Contact & Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/delete-account" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">Delete My Account</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">© {currentYear} mySkiin. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Terms</Link>
            <Link href="/contact" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
