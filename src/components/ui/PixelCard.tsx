import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface PixelCardProps extends HTMLMotionProps<"div"> {
    variant?: "stone" | "dirt" | "grass" | "diamond" | "dark";
    children?: ReactNode;
}

const variants = {
    stone: "bg-mc-stone border-gray-600",
    dirt: "bg-mc-dirt border-yellow-900",
    grass: "bg-mc-grass border-green-800",
    diamond: "bg-cyan-900/80 border-mc-diamond",
    dark: "bg-mc-night border-gray-800",
};

export const PixelCard = ({ className, variant = "dark", children, ...props }: PixelCardProps) => {
    return (
        <motion.div
            className={cn(
                "relative p-6 border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]",
                variants[variant],
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 border-t-4 border-l-4 border-white/10 pointer-events-none"></div>
            <div className="absolute inset-0 border-b-4 border-r-4 border-black/20 pointer-events-none"></div>
            {children}
        </motion.div>
    );
};
