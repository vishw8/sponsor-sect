import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface PixelButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline";
}

export const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
    ({ className, variant = "primary", children, ...props }, ref) => {
        const baseStyles = "relative px-6 py-3 font-pixel text-sm uppercase tracking-widest transition-transform active:translate-y-1 active:shadow-none";

        const variantsStyles = {
            primary: "bg-mc-grass text-white shadow-[0px_4px_0px_#2E7D32] hover:bg-green-500",
            secondary: "bg-mc-stone text-white shadow-[0px_4px_0px_#000] hover:bg-gray-700",
            outline: "bg-transparent border-2 border-white text-white shadow-[0px_4px_0px_#FFF] hover:bg-white hover:text-black",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variantsStyles[variant], className)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
