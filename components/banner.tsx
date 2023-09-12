import React, { useState } from 'react';

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-yellow-500 text-black text-sm p-3 md:rounded shadow-lg flex justify-between bg-white hover:bg-yellow-500 hover:text-white">
            <div className="text-black inline-flex">
              <a
                className="fill-current font-semibold hover:text-white font-bold hover:underline"
                href="/doc/bases-concurso.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descarga<span className="hidden sm:inline"> las bases del concurso</span>
              </a>
            </div>
            <button
              className="text-black hover:text-gray-800 pl-2 ml-3 border-l border-black"
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-4 h-4 shrink-0 fill-current text-black font-semibold hover:text-white font-bold"
                viewBox="0 0 16 16"
              >
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
