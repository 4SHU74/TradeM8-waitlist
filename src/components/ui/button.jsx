import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Ensure you have this utility or remove 'cn()' wrapper if not

const buttonVariants = cva(
  // Base styles: Changed rounded-md to rounded-xl to match your inputs
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-green-900/20",
  {
    variants: {
      variant: {
        // Default: Your Main Green Button
        default: "bg-green-700 text-white hover:bg-green-800 shadow-sm",

        // Destructive: Red for errors/delete
        destructive: "bg-red-600 text-white hover:bg-red-700",

        // Outline: White background with border (Good for secondary actions)
        outline:
          "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900",

        // Secondary: Your Dark Blue (from Features section)
        secondary: "bg-[#182B3A] text-white hover:bg-[#233b4d]",

        // Ghost: No background until hover (Good for nav links)
        ghost: "hover:bg-slate-100 hover:text-slate-900",

        // Link: Looks like text
        link: "text-green-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-8 py-2", // Made slightly taller (h-11) for modern look
        sm: "h-9 rounded-lg px-3",
        lg: "h-14.5 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
