import React from "react";
import { Mail, Users, Lock } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function WaitlistSection() {
  return (
    <section className="bg-slate-50 py-20 px-4 flex justify-center items-center">
      <div
        className="
          bg-white
          rounded-3xl
          shadow-xl
          p-8
          md:p-12
          max-w-3xl
          w-full
          text-center
          border
          border-slate-100
        "
      >
        {/* Icon */}
        <div
          className="
            bg-green-900
            w-16
            h-16
            rounded-full
            flex
            items-center
            justify-center
            mx-auto
            mb-6
          "
        >
          <Mail className="text-white" size={28} />
        </div>

        {/* Headings */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Be First to Trade Smarter
        </h2>
        <p className="text-slate-500 text-lg mb-10 max-w-lg mx-auto">
          Join our waitlist and get early access to TradeM8 when we launch.
        </p>

        {/* Input Form */}
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
          <input
            type="email"
            placeholder="Enter your email address"
            className="
              flex-1
              px-6
              py-3.5
              rounded-xl
              border
              border-slate-200
              focus:outline-none
              focus:ring-2
              focus:ring-green-900/20
              text-slate-600
              placeholder:text-slate-400
            "
          />
          <Button variant="default" size="lg">
            Join the Waitlist
          </Button>
        </form>

        {/* Trust Badges */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-6
            text-sm
            text-slate-500
            font-medium
          "
        >
          <div className="flex items-center gap-2">
            <Users size={18} className="text-green-700" />
            <span>1,247+ traders waiting</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock size={18} className="text-green-700" />
            <span>No spam, ever</span>
          </div>
        </div>
      </div>
    </section>
  );
}
