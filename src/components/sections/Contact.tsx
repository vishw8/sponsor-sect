import { motion } from "framer-motion";
import { Mail, MessageCircle, Twitter } from "lucide-react";
import { PixelButton } from "../ui/PixelButton";

export const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-black relative overflow-hidden flex flex-col items-center justify-center text-center">

            {/* End Portal Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a0b2e_0%,#000000_100%)]"></div>

            {/* Stars/Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-purple-400 rounded-full"
                        style={{
                            width: Math.random() * 4 + 1,
                            height: Math.random() * 4 + 1,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-2xl">
                <h2 className="font-pixel text-4xl text-purple-300 mb-8">THE END?</h2>
                <p className="font-body text-gray-400 text-lg mb-12">
                    The journey doesn't stop here. Join the Discord server to find your party and prepare for the event.
                </p>

                <div className="flex gap-6 justify-center flex-wrap">
                    <PixelButton variant="primary" className="bg-purple-600 shadow-[0px_4px_0px_#4a1d96] hover:bg-purple-500 flex items-center gap-2">
                        <MessageCircle size={18} /> Join Discord
                    </PixelButton>
                    <PixelButton variant="secondary" className="flex items-center gap-2">
                        <Twitter size={18} /> Follow Updates
                    </PixelButton>
                    <PixelButton variant="secondary" className="flex items-center gap-2">
                        <Mail size={18} /> Email Us
                    </PixelButton>
                </div>

                <p className="mt-20 font-pixel text-xs text-gray-600">
                    © 2024 BLOCKHACK. NOT OFFICIAL MINECRAFT PRODUCT.
                </p>
            </div>
        </section>
    );
};
