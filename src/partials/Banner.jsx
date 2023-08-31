import React, { useState } from "react";
import { Link } from "react-router-dom";

function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 left-0 w-full md:bottom-0 md:left-6 md:w-auto z-50">
          <div className="bg-slate-800 text-slate-50 text-sm p-2 md:rounded-t-lg md:rounded-b-none shadow-lg flex justify-between">
            <div className="text-slate-500 inline-flex">
              <Link
                className="font-medium underline hover:decoration-blue-400 text-slate-50"
                to="/privacy"
              >
                We don't use Cookies
              </Link>
            </div>
            <button
              className="text-emerald-400 hover:text-emerald-200 pl-2 ml-3 border-l border-gray-700"
              onClick={() => setBannerOpen(false)}
            >
              <span className="text-sm">Accept</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
