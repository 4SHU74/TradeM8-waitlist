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
            <a href="#" className="hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Mail size={20} />
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
