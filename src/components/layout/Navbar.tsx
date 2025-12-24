import { motion } from "framer-motion";
import { PixelButton } from "../ui/PixelButton";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-mc-stone/90 backdrop-blur-md border-b-4 border-black"
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-mc-grass border-2 border-white rotate-45 animate-pulse-slow"></div>
                <span className="font-pixel text-xl text-white tracking-tighter">
                    BLOCK<span className="text-mc-grass">HACK</span>
                </span>
            </div>

            <div className="hidden md:flex gap-8 items-center font-pixel text-xs text-gray-300">
                <a href="#about" className="hover:text-mc-diamond transition-colors">About</a>
                <a href="#tracks" className="hover:text-mc-diamond transition-colors">Tracks</a>
                <a href="#prizes" className="hover:text-mc-diamond transition-colors">Prizes</a>
                <a href="#sponsors" className="hover:text-mc-diamond transition-colors">Sponsors</a>
                <a href="#faq" className="hover:text-mc-diamond transition-colors">FAQ</a>

                <PixelButton variant="primary" className="ml-4">
                    Register Now
                </PixelButton>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-mc-stone border-b-4 border-black p-6 flex flex-col gap-4 md:hidden"
                >
                    <a href="#about" className="font-pixel text-white">About</a>
                    <a href="#tracks" className="font-pixel text-white">Tracks</a>
                    <a href="#prizes" className="font-pixel text-white">Prizes</a>
                    <PixelButton className="w-full">Register</PixelButton>
                </motion.div>
            )}
        </motion.nav>
    );
};
