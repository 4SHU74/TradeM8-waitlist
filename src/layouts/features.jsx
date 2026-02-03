import React from "react";
import { Bell, BookOpen, Check } from "lucide-react";

const FeatureCard = ({ title, description, items, color, Icon }) => (
  <div
    className={`
      overflow-hidden
      flex
      flex-1
      flex-col
      gap-4
      relative
      p-8
      text-white
      ${color}
      rounded-3xl
    `}
  >
    <div
      className="
        p-3
        w-fit
        bg-white/20
        rounded-xl
      "
    >
      <Icon size={24} />
    </div>

    <h3 className="mt-2 font-bold text-2xl">{title}</h3>
    <p
      className="
        leading-relaxed
        text-sm
        opacity-90
      "
    >
      {description}
    </p>

    <ul className="mt-4 space-y-3">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="
            flex
            gap-3
            items-center
            font-medium
            text-sm
          "
        >
          <Check size={18} className="text-yellow-400" strokeWidth={3} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function TradeM8Features() {
  return (
    <section
      id="features"
      className="
        mx-auto
        p-6
        max-w-5xl
        font-sans
        bg-slate-50
      "
    >
      <div className="mb-12 text-center">
        <h2
          className="
            mb-3
            font-bold
            text-3xl
            text-slate-800
          "
        >
          Two Powerful Features, One Simple App
        </h2>
        <p
          className="
            mx-auto
            max-w-xl
            text-slate-500
            text-md
          "
        >
          TradeM8 focuses on what matters most: staying informed and tracking
          your progress with professional-grade tools.
        </p>
      </div>

      <div
        className="
          flex
          flex-col
          w-full
          md:flex-row
        "
      >
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
