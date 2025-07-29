import React, { use } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import TezzeractTypeface from "../assets/images/TezzeractText.png";


export const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white pt-20 min-h-[50vh] sm:min-h-[50vh] relative">
      <div className="w-[83%] flex flex-col h-full min-h-[60vh] sm:min-h-[60vh] justify-between mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col  lg:flex-row sm:flex-row gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Company Info */}
          <div className="space-y-4 w-full lg:w-1/2">
            <div className="flex items-center space-x-6 w-full sm:w-3/4 lg:w-2/3">
            

              <div>
                <p className="text-xs sm:text-sm text-gray-300 font-thin">
                  Tezzeract (Pvt) Ltd specializing in digital scalability,
                  offering businesses seamless access to remote teams of highly
                  skilled professionals.
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300 font-thin">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+3706019797"
                  className="hover:text-white transition-colors"
                >
                  +37 06 019 79 72{" "}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:simon@tezzeract.lt"
                  className="hover:text-white transition-colors"
                >
                  simon@tezzeract.lt
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-gray-300 font-thin text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Reach out to us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">
              Socials
            </h3>
            <ul className="space-y-2 text-gray-300 font-thin text-xs sm:text-sm">
              <li>
                <a
                  href="https://www.instagram.com/tezzeractofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/tezzeractofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/TezzeractOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/TezzeractTeams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* TezzeractTypeface Logo */}
        <div className="flex justify-center mt-10 sm:mt-6">
          <img
            src={TezzeractTypeface.src}
            alt="Tezzeract Logo"
            className="w-[100%] " 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;