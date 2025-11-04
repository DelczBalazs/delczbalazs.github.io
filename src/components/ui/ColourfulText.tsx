import type React from "react";
import { cn } from "../../utils/cn";

type Props = { className?: string; children: React.ReactNode };

export default function ColourfulText({ className, children }: Props) {
    // simple animated gradient text (no layout jank)
    return (
        <span
            className={cn(
                "bg-[linear-gradient(90deg,#06b6d4,#8b5cf6,#ec4899,#06b6d4)]",
                "bg-[length:200%_100%] bg-clip-text text-transparent",
                "animate-[gradient-move_8s_linear_infinite]",
                className
            )}
        >
            {children}
        </span>
    );
}
