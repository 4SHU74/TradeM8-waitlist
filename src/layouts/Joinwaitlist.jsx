import React, { useState, useEffect } from "react";
import { Mail, Users, Lock } from "lucide-react";
import { Button } from "../components/ui/Button";
import { JoinWaitlist } from "../services/waitlistService";

export default function WaitlistSection() {
  // 1. Create States for the email and loading status
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // 2. The Logic Function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page refresh
    if (!email) return;

    setLoading(true);
    const result = await JoinWaitlist(email);
    setLoading(false);

    if (result.status === "success") {
      alert("Success! Welcome to the waitlist."); // Replace this with your Pop-up/Confetti later
      setEmail(""); // Clear the input
    } else if (result.status === "duplicate") {
      alert("You're already on the list!");
    } else {
      alert("Something went wrong. Try again.");
    }
  };
  return (
    <section
      id="waitlist"
      className="bg-slate-50 py-20 px-4 flex justify-center items-center"
    >
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
            bg-green-800
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
        <p className="text-slate-500 text-md mb-10 max-w-lg mx-auto">
          Join our waitlist and get early access to TradeM8 when we launch.
        </p>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8"
        >
          <input
            type="email"
            required
            value={email} // 4. Link value to state
            onChange={(e) => setEmail(e.target.value)} // 5. Update state on type
            placeholder="Enter your email address"
            className="flex-1 px-6 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-900/20 text-slate-600 placeholder:text-slate-400"
          />
          <Button
            type="submit"
            variant="default"
            size="lg"
            disabled={loading} // 6. Disable button while sending
          >
            {loading ? "Joining..." : "Join the Waitlist"}
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
