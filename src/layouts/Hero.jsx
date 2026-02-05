import React from "react";
import phone from "../assets/mockup.png";
import { Button } from "../components/ui/Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-4 -mt-10 md:-mt-25 ">
          <h1 className="text-6xl font-bold text-slate-800 leading-tight ">
            Never Miss a <br />
            <span className="text-green-600">Trade</span>
          </h1>

          <p
            className="
              text-[#1F3B4D]/70
              text-md
              md:text-lg
              max-w-md
              leading-relaxed
              font-medium
            "
          >
            Set alerts & track with ease. The professional mobile trading app
            designed for both beginners and experienced traders.
          </p>

          <div className="flex space-x-4">
            <a href="#waitlist">
              <Button
                variant="default"
                size="lg"
                className="text-sm md:text-base"
              >
                Join the Waitlist
              </Button>
            </a>

            <a href="#features">
              <Button
                variant="secondary"
                size="lg"
                className="text-sm md:text-base"
              >
                Learn More
              </Button>
            </a>
          </div>

          <div className="flex items-center space-x-8 pt-4 text-green-700 font-medium">
            <div className="flex items-center space-x-2 text-sm md:text-base">
              <span className="text-lg md:text-xl">🛡️</span>
              <span>Secure & Trusted</span>
            </div>
            <div className="flex items-center space-x-2 text-sm md:text-base">
              <span className="text-lg md:text-xl">📱</span>
              <span>Android</span>
            </div>
          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="relative flex justify-center">
          {/* Coming Soon Badge */}
          <div
            className="
              absolute
              -top-1
              right-24
              z-20
              bg-amber-400
              text-slate-800
              px-4
              py-1
              rounded-full
              text-sm
              font-bold
              shadow-lg
            "
          >
            Coming soon
          </div>
          <div className="flex justify-center">
            <img
              src={phone}
              alt="TradeM8 App"
              className="w-70 lg:w-85 shadow-[0_10px_20px_rgba(0,0,0,0.35)] rounded-[60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
