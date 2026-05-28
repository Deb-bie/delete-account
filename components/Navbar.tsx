'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/components/AuthContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm shadow-slate-900/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* <div className="relative w-8 h-8">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <circle cx="16" cy="16" r="15" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5"/>
              <circle cx="16" cy="12" r="4" fill="#64748b"/>
              <path d="M8 24C8 20 11 18 16 18C21 18 24 20 24 24" stroke="#64748b" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div> */}
          <span className="heading-font text-xl font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
            mySkiin
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === href
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA — changes based on auth state */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            // Signed in: show account email + Delete Account button
            <>
              <span className="text-sm text-slate-500 max-w-[160px] truncate">
                {user.email || user.displayName}
              </span>
              <Link
                href="/delete-account"
                className="px-4 py-2 rounded-lg text-sm font-medium bg-red-600 text-white hover:bg-red-700 shadow-sm transition-all duration-200"
              >
                Delete Account
              </Link>
            </>
          ) : (
            // Signed out: primary CTA is Download
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                Sign in
              </Link>
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 shadow-sm transition-all duration-200"
              >
                Download
              </a>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-md px-6 py-4 space-y-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === href
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="pt-3 border-t border-slate-100 space-y-1">
            {user ? (
              <>
                <p className="px-4 py-1.5 text-xs text-slate-400 truncate">
                  {user.email || user.displayName}
                </p>
                <Link
                  href="/delete-account"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium bg-red-600 text-white text-center hover:bg-red-700 transition-colors"
                >
                  Delete Account
                </Link>
              </>
            ) : (
              <>
                <a
                  href="/#download"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-900 text-white text-center hover:bg-slate-800 transition-colors"
                >
                  Download App
                </a>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 text-center hover:bg-slate-50 transition-colors"
                >
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
