import React from "react";
import { Twitter, Linkedin, Mail, TrendingUp } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#182B3A] text-white py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Section: Logo & Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <img src={logo} className="w-10 h-10 rounded-lg object-contain" />

            <span className="text-l font-semibold">TradeM8</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-slate-300">
            <a
              href="https://x.com/yourusername" // REPLACE WITH YOUR URL
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {/* X Logo SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-slate-700/50 mb-8"></div>

        {/* Bottom Section: Copyright & Links */}
        <div className="text-center text-slate-400 text-sm">
          <p>
            © 2024 TradeM8. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
