import React from "react";
import { Bell, BookOpen, Check } from "lucide-react";

const FeatureCard = ({ title, description, items, color, Icon }) => (
  <div
    className={`
      ${color}
      p-8
      rounded-3xl
      text-white
      flex-1
      flex
      flex-col
      gap-4
      relative
      overflow-hidden
    `}
  >
    <div className="bg-white/20 w-fit p-3 rounded-xl">
      <Icon size={24} />
    </div>

    <h3 className="text-2xl font-bold mt-2">{title}</h3>
    <p className="text-sm opacity-90 leading-relaxed">{description}</p>

    <ul className="mt-4 space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-3 text-sm font-medium">
          <Check size={18} className="text-yellow-400" strokeWidth={3} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function TradeM8Features() {
  return (
    <section className="max-w-5xl mx-auto p-6 bg-slate-50 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">
          Two Powerful Features, One Simple App
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto text-sm">
          TradeM8 focuses on what matters most: staying informed and tracking
          your progress with professional-grade tools.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <FeatureCard
          title="Smart Price Alerts"
          color="bg-emerald-600"
          Icon={Bell}
          description="Never miss market opportunities with intelligent price alerts. Set custom and get notified instantly when your targets is near or hit."
          items={[
            "Smart filtering",
            "Multiple alert types",
            "Real-time notifications",
          ]}
        />

        <FeatureCard
          title="Trading Journal"
          color="bg-blue-900"
          Icon={BookOpen}
          description="Track your trades, analyze performance, and improve your strategy with our comprehensive trading journal and analytics."
          items={[
            "Strategy insights",
            "Detailed trade logging",
            "Performance analytics",
          ]}
        />
      </div>
    </section>
  );
}
