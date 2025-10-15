import React from "react";
import { Instagram, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">About Raj Watches</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Raj Watches offers premium timepieces combining style, quality, and precision. 
            Explore our collection to find a watch that defines your personality.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-400" />
              <a href="mailto:info@rajwatches.in" className="hover:text-white">
                info@rajwatches.in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-400" />
              <span>+91 98765 43210</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex space-x-5">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center border-t border-gray-700 pt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white font-medium">RajWatches.in</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
