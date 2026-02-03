'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-100 flex items-center justify-center p-6">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
        
        body {
          font-family: 'DM Sans', sans-serif;
        }
        
        .heading-font {
          font-family: 'Crimson Pro', serif;
        }

        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fadeSlideIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>

      <div className="max-w-2xl w-full text-center animate-fade-in">

        {/* 404 Icon */}
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-slate-500/10 blur-3xl rounded-full animate-pulse"></div>
          <div className="relative animate-float">
            <svg className="w-40 h-40 mx-auto" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">

              {/* Background circles */}
              <circle cx="80" cy="80" r="70" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" className="opacity-50"/>
              <circle cx="80" cy="80" r="60" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" style={{ transformOrigin: 'center' }}/>
              
              {/* Question mark */}
              <path 
                d="M80 95 L80 95.1 M80 50 C80 50 65 50 65 65 C65 75 80 75 80 85" 
                stroke="#64748b" 
                strokeWidth="6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
              
              {/* Magnifying glass */}
              <circle cx="110" cy="110" r="15" stroke="#94a3b8" strokeWidth="3" fill="none"/>
              <line x1="122" y1="122" x2="135" y2="135" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="heading-font text-6xl md:text-7xl font-light text-slate-900 mb-4 tracking-tight">
          404
        </h1>
        <h2 className="heading-font text-3xl md:text-4xl font-light text-slate-700 mb-6">
          Page Not Found
        </h2>
        
        {/* Description */}
        <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => router.back()}
            className="px-8 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm hover:shadow-md min-w-[200px]"
          >
            <span className="inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Go Back
            </span>
          </button>
          
          <Link href="/">
            <button className="px-8 py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 shadow-lg shadow-slate-900/25 hover:shadow-xl hover:shadow-slate-900/30 transition-all duration-200 min-w-[200px]">
              <span className="inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go Home
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}