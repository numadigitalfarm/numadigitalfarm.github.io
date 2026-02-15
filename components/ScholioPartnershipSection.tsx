import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const ScholioPartnershipSection = () => {
  return (
    <section className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 dotted-pattern-light opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 dotted-pattern opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Logo */}
            <div className="flex justify-center lg:justify-start">
              <a 
                href="https://myscholio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative w-64 h-64 lg:w-80 lg:h-80 hover:opacity-90 transition-opacity duration-200"
              >
                <Image
                  src="/scholio.png"
                  alt="Scholio AI Logo"
                  fill
                  className="object-contain"
                />
              </a>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-semibold mb-4">
                  Partnership
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-6">
                  Exclusive Nepal Partnership
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  NDF is proud to be the <span className="font-semibold text-[#0a1e2d]">Exclusive Nepal Partnership</span> and <span className="font-semibold text-[#0a1e2d]">Outreach Partner</span> for <span className="font-semibold text-primary">Scholio</span>, an innovative AI-powered website builder and CMS platform designed specifically for schools.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Scholio empowers educational institutions to create beautiful, functional websites with ease. Our partnership enables us to bring this cutting-edge technology to schools across Nepal, helping them establish a strong digital presence and streamline their content management.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://myscholio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  Visit Scholio
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium">
                  AI-Powered
                </span>
                <span className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium">
                  Website Builder
                </span>
                <span className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium">
                  CMS Platform
                </span>
                <span className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium">
                  For Schools
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholioPartnershipSection;
