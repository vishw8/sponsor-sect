import { motion } from "framer-motion";
import { PixelCard } from "../ui/PixelCard";
import { Gem, Gift, Briefcase } from "lucide-react";
import { BgParticles } from "../ui/BgParticles";

export const Prizes = () => {
    return (
        <section id="prizes" className="py-24 px-6 bg-mc-night relative overflow-hidden">
            <BgParticles variant="diamond" count={40} />
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="font-pixel text-4xl text-center text-mc-diamond mb-4">LOOT CHEST</h2>
                <p className="text-center text-gray-400 mb-16 font-body">Rewards for the bravest adventurers.</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* 1st Place */}
                    <div className="md:-mt-8 order-1 md:order-2">
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", bounce: 0.5 }}
                        >
                            <PixelCard variant="diamond" className="transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 mb-6 relative">
                                        {/* Animated Chest Icon (CSS/SVG composite) */}
                                        <div className="absolute inset-0 bg-yellow-500 pixel-corners border-4 border-black flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                                            <Gem size={48} className="text-white drop-shadow-md animate-pulse" />
                                        </div>
                                    </div>
                                    <h3 className="font-pixel text-2xl text-white mb-2">1st Place</h3>
                                    <p className="font-pixel text-3xl text-yellow-400 mb-4">$5,000</p>
                                    <ul className="text-sm text-cyan-100 space-y-2 font-body">
                                        <li>+ RTX 4090</li>
                                        <li>+ Internship Interview</li>
                                        <li>+ Exclusive Merch</li>
                                    </ul>
                                </div>
                            </PixelCard>
                        </motion.div>
                    </div>

                    {/* 2nd Place */}
                    <div className="order-2 md:order-1 pt-8">
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                        >
                            <PixelCard variant="grass">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 mb-6 bg-gray-400 pixel-corners border-4 border-black flex items-center justify-center">
                                        <Gift size={40} className="text-white" />
                                    </div>
                                    <h3 className="font-pixel text-xl text-white mb-2">2nd Place</h3>
                                    <p className="font-pixel text-2xl text-green-300 mb-4">$2,500</p>
                                    <ul className="text-sm text-green-100 space-y-2 font-body">
                                        <li>+ Mechanical Keyboard</li>
                                        <li>+ Swag Kit</li>
                                    </ul>
                                </div>
                            </PixelCard>
                        </motion.div>
                    </div>

                    {/* 3rd Place */}
                    <div className="order-3 md:order-3 pt-8">
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", bounce: 0.5, delay: 0.4 }}
                        >
                            <PixelCard variant="stone">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 mb-6 bg-orange-700 pixel-corners border-4 border-black flex items-center justify-center">
                                        <Briefcase size={40} className="text-white" />
                                    </div>
                                    <h3 className="font-pixel text-xl text-white mb-2">3rd Place</h3>
                                    <p className="font-pixel text-2xl text-orange-300 mb-4">$1,000</p>
                                    <ul className="text-sm text-gray-300 space-y-2 font-body">
                                        <li>+ Raspberry Pi Starter</li>
                                        <li>+ Swag</li>
                                    </ul>
                                </div>
                            </PixelCard>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Particles */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400"
                        initial={{ x: Math.random() * 1000, y: -20, rotate: 0 }}
                        animate={{ y: 1000, rotate: 360 }}
                        transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 5 }}
                    />
                ))}
            </div>
        </section>
    );
};
