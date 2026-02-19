'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const PopupBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup on every visit/reload
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Close popup"
        >
          <X className="w-6 h-6 text-gray-800" />
        </button>

        {/* Image Container */}
        <div className="relative w-full h-auto">
          <Image
            src="/popup/WhatsApp Image 2026-02-19 at 9.05.44 PM.jpeg"
            alt="Banner"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default PopupBanner;
