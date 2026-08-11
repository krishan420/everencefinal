"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ necessary: true, analytics: true })
    );
    setShowBanner(false);
  };

  const rejectAll = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ necessary: true, analytics: false })
    );
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  return (
    <>
      {/* COOKIE BAR */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg p-6 z-[9999]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

            <div>
              <h3 className="text-xl font-semibold text-[#ff6700]">
                About cookies on this site
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                We use cookies to improve your browsing experience and analyze
                site traffic. Read our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-[#ff6700] underline hover:text-orange-600"
                >
                  Cookie Policy
                </Link>.
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={acceptAll}
                className="bg-[#ff6700] hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm"
              >
                Accept All
              </button>

              <button
                onClick={rejectAll}
                className="border border-gray-400 hover:bg-gray-100 px-4 py-2 rounded-md text-sm"
              >
                Reject All
              </button>

              <button
                onClick={() => setShowModal(true)}
                className="border border-[#ff6700] text-[#ff6700] hover:bg-orange-50 px-4 py-2 rounded-md text-sm"
              >
                Customize
              </button>
            </div>

          </div>
        </div>
      )}

      {/* CUSTOMIZE MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]">

          <div className="bg-white rounded-xl max-w-xl w-full p-6 shadow-xl">

            <h2 className="text-xl font-semibold text-[#ff6700] mb-4">
              Customize Consent Preferences
            </h2>

            <p className="text-gray-600 text-sm mb-6">
              Manage your cookie preferences below. Necessary cookies are always enabled.
            </p>

            {/* Necessary */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Necessary</span>
              <input type="checkbox" checked disabled />
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Required for basic website functionality.
            </p>

            {/* Analytics */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Analytics</span>

              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    analytics: e.target.checked,
                  })
                }
              />
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Helps us understand how visitors interact with our website.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="border border-gray-300 px-4 py-2 rounded-md"
              >
                Cancel
              </button>

              <button
                onClick={savePreferences}
                className="bg-[#ff6700] hover:bg-orange-600 text-white px-4 py-2 rounded-md"
              >
                Save Preferences
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}