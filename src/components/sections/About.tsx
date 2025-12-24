import { motion } from "framer-motion";
import { PixelCard } from "../ui/PixelCard";
import { Clock, Users, Trophy, Map, Code, Coffee } from "lucide-react";
import { BgParticles } from "../ui/BgParticles";

const STATS = [
    { icon: Clock, label: "Duration", value: "36 Hours" },
    { icon: Users, label: "Hackers", value: "500+" },
    { icon: Trophy, label: "Prizes", value: "$10k+" },
    { icon: Map, label: "Venue", value: "Hybrid" },
    { icon: Code, label: "Projects", value: "100+" },
    { icon: Coffee, label: "Caffeine", value: "Unlimited" },
];

export const About = () => {
    return (
        <section id="about" className="min-h-screen py-20 px-6 bg-mc-stone relative overflow-hidden flex flex-col items-center">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <BgParticles variant="stone" count={30} />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-6xl w-full"
            >
                <div className="text-center mb-16">
                    <h2 className="font-pixel text-4xl text-mc-diamond mb-4">WORLD INFO</h2>
                    <p className="font-body text-gray-400 max-w-2xl mx-auto">
                        &lt;Server_Message&gt; Welcome to the ultimate building ground. Craft code, forge teams, and deploy your dreams.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Crafting Grid */}
                    <PixelCard variant="stone" className="bg-[#2a2a2a]">
                        <div className="aspect-square bg-[#3a3a3a] p-4 rounded-lg shadow-inner border-2 border-[#1a1a1a]">
                            <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full">
                                {/* Slots */}
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-[#8b8b8b] border-t-2 border-l-2 border-[#555] border-b-white/10 border-r-white/10 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center justify-center relative overflow-hidden group"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        {/* Distribute stats into slots randomly or patterned */}
                                        {i < STATS.length && (() => {
                                            const Icon = STATS[i].icon;
                                            return (
                                                <div className="flex flex-col items-center gap-1 group-hover:scale-110 transition-transform">
                                                    {/* Render Icon */}
                                                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-md" />
                                                    <span className="text-[0.6rem] font-pixel text-white/80 hidden md:block">{STATS[i].label}</span>
                                                </div>
                                            );
                                        })()}
                                        {i === 4 && (
                                            <div className="absolute inset-0 bg-mc-grass/20 animate-pulse"></div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </PixelCard>

                    {/* Description Text */}
                    <div className="space-y-6">
                        <PixelCard variant="dark">
                            <h3 className="font-pixel text-xl text-mc-grass mb-2">Objective</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Your mission is to build software projects that solve real-world problems.
                                Whether you're a redstone engineer (backend) or a builder (frontend),
                                there's a place for you in this server.
                            </p>
                        </PixelCard>

                        <PixelCard variant="dark">
                            <h3 className="font-pixel text-xl text-mc-diamond mb-2">Loot & XP</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Connect with industry sponsors, earn exclusive swag, and compete for
                                massive prizes. The ender dragon awaits your code.
                            </p>
                        </PixelCard>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
