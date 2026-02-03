'use client';

import { useState } from 'react';
import { deleteUser, EmailAuthProvider, reauthenticateWithCredential, GoogleAuthProvider, reauthenticateWithPopup } from 'firebase/auth';
import { doc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { useAuth } from '@/components/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

function DeleteAccountContent() {
  const { user } = useAuth();
  const [step, setStep] = useState<'initial' | 'confirm' | 'password' | 'deleting' | 'success'>('initial');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Check if user signed in with Google
  const isGoogleUser = user?.providerData.some(provider => provider.providerId === 'google.com');

  const handleDeleteAccount = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      setError('No user is currently signed in');
      return;
    }

    setStep('deleting');
    setError('');

    try {
      // Re-authenticate based on provider
      if (isGoogleUser) {
        // Re-authenticate with Google
        const provider = new GoogleAuthProvider();
        await reauthenticateWithPopup(currentUser, provider);
      } else {
        // Re-authenticate with email/password
        if (currentUser.email) {
          const credential = EmailAuthProvider.credential(currentUser.email, password);
          await reauthenticateWithCredential(currentUser, credential);
        }
      }

      // Delete user data from Firestore
      const userDocRef = doc(db, 'users', currentUser.uid);
      await deleteDoc(userDocRef);

      // Delete the user account
      await deleteUser(currentUser);

      setStep('success');
      
      // Redirect after 3 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (err: any) {
      console.error('Delete error:', err);
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Google sign-in was cancelled. Please try again.');
      } else {
        setError(err.message || 'Failed to delete account. Please try again.');
      }
      setStep(isGoogleUser ? 'confirm' : 'password');
    }
  };

  const triggerStepTransition = (nextStep: typeof step) => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep(nextStep);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-100 flex items-center justify-center p-6 font-sans">
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

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-fade-in {
          animation: fadeSlideIn 0.6s ease-out forwards;
        }

        .animate-fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .text-balance {
          text-wrap: balance;
        }
      `}</style>

      <div className={`max-w-2xl w-full ${isAnimating ? 'animate-fade-out' : 'animate-fade-in'}`}>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-red-500/10 blur-2xl rounded-full"></div>
            <svg className="w-20 h-20 relative" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="38" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" className="opacity-30"/>
              <circle cx="40" cy="40" r="32" fill="#fef2f2"/>
              <path d="M50 30L30 50M30 30L50 50" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="heading-font text-5xl font-light text-slate-900 mb-3 tracking-tight">
            Delete Account
          </h1>
          <p className="text-slate-600 text-lg max-w-md mx-auto text-balance">
            This action is permanent and cannot be undone
          </p>
          {user && (
            <p className="text-slate-500 text-sm mt-2">
              Signed in as: <span className="font-medium text-slate-700">{user.email || user.displayName}</span>
            </p>
          )}
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200/60 overflow-hidden">
          <div className="p-10">
            {/* Initial Warning */}
            {step === 'initial' && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="heading-font text-2xl font-semibold text-slate-900">
                    What happens when you delete your account?
                  </h2>
                  
                  <div className="space-y-3 pt-2">
                    {[
                      'All your personal data will be permanently erased',
                      'You will lose access to all premium features and subscriptions',
                      'This action cannot be reversed or undone'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 group" style={{ animationDelay: `${idx * 100}ms` }}>
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-150 transition-transform"></div>
                        <p className="text-slate-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-900 mb-1">Before you proceed</h3>
                      <p className="text-sm text-amber-800 leading-relaxed">
                        Consider downloading your data or exploring alternative options like temporarily deactivating your account instead.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => window.history.back()}
                    className="flex-1 px-6 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => triggerStepTransition('confirm')}
                    className="flex-1 px-6 py-3.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-200"
                  >
                    Continue to Delete
                  </button>
                </div>
              </div>
            )}

            {/* Confirmation Step */}
            {step === 'confirm' && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="heading-font text-2xl font-semibold text-slate-900">
                    Are you absolutely sure?
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    To confirm deletion, please type <span className="font-mono font-semibold text-slate-900 bg-slate-100 px-0.5 py-0.5 rounded">DELETE MY ACCOUNT</span> in the box below.
                  </p>
                </div>

                <div className="space-y-3">
                  <label htmlFor="confirmText" className="block text-sm font-medium text-slate-700">
                    Confirmation text
                  </label>
                  <input
                    id="confirmText"
                    type="text"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all duration-200 font-mono"
                    placeholder="Type here..."
                    autoFocus
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => triggerStepTransition('initial')}
                    className="flex-1 px-6 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={() => {
                      if (isGoogleUser) {
                        handleDeleteAccount();
                      } else {
                        triggerStepTransition('password');
                      }
                    }}
                    disabled={confirmText !== 'DELETE MY ACCOUNT'}
                    className="flex-1 px-6 py-3.5 rounded-xl bg-red-600 text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-red-700 shadow-lg shadow-red-600/25 enabled:hover:shadow-xl enabled:hover:shadow-red-600/30 transition-all duration-200"
                  >
                    {isGoogleUser ? 'Verify with Google' : 'Continue'}
                  </button>
                </div>
              </div>
            )}

            {/* Password Step - Only for Email/Password users */}
            {step === 'password' && !isGoogleUser && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="heading-font text-2xl font-semibold text-slate-900">
                    Enter your password
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    For security purposes, please re-enter your password to complete the account deletion.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex gap-3">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="text-sm text-red-800">{error}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all duration-200"
                    placeholder="Enter your password"
                    autoFocus
                    onKeyDown={(e) => e.key === 'Enter' && password && handleDeleteAccount()}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => triggerStepTransition('confirm')}
                    className="flex-1 px-6 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    disabled={!password}
                    className="flex-1 px-6 py-3.5 rounded-xl bg-red-600 text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-red-700 shadow-lg shadow-red-600/25 enabled:hover:shadow-xl enabled:hover:shadow-red-600/30 transition-all duration-200"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            )}

            {/* Deleting State */}
            {step === 'deleting' && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                  <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h2 className="heading-font text-2xl font-semibold text-slate-900 mb-2">
                  Deleting your account
                </h2>
                <p className="text-slate-600">Please wait while we process your request...</p>
              </div>
            )}

            {/* Success State */}
            {step === 'success' && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="heading-font text-2xl font-semibold text-slate-900 mb-2">
                  Account deleted successfully
                </h2>
                <p className="text-slate-600 mb-6">You will be redirected shortly...</p>
                <div className="flex justify-center">
                  <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-slate-400 animate-pulse-slow"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        {/* <div className="text-center mt-8">
          <p className="text-sm text-slate-500">
            Need help? <a href="/support" className="text-slate-700 hover:text-slate-900 font-medium underline underline-offset-2 transition-colors">Contact support</a>
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default function DeleteAccountPage() {
  return (
    <ProtectedRoute>
      <DeleteAccountContent />
    </ProtectedRoute>
  );
}