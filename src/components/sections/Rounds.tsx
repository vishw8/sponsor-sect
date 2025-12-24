import { motion } from "framer-motion";
import { CheckCircle2, Circle, Swords, Book, Code2, Presentation } from "lucide-react";
import { BgParticles } from "../ui/BgParticles";

const ROUNDS = [
    { title: "Ideation", icon: Book, date: "Day 1 - 10:00 AM", status: "completed" },
    { title: "Development", icon: Code2, date: "Day 1 - 12:00 PM", status: "active" },
    { title: "Bug Fixing", icon: Swords, date: "Day 2 - 08:00 AM", status: "locked" },
    { title: "Final Demos", icon: Presentation, date: "Day 2 - 04:00 PM", status: "locked" },
];

export const Rounds = () => {
    return (
        <section id="rounds" className="py-24 px-6 bg-mc-stone border-t-4 border-black border-b-4 relative overflow-hidden">
            <BgParticles variant="fire" count={15} />
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="font-pixel text-4xl text-center text-white mb-16">
                    QUEST LOG
                </h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/20 -translate-x-1/2"></div>

                    <div className="space-y-12">
                        {ROUNDS.map((round, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                {/* Content Side */}
                                <div className="md:w-1/2 w-full pl-20 md:pl-0 flex justify-center md:block text-left md:text-right">
                                    <div className={`bg-black/40 p-6 border-2 ${round.status === 'active' ? 'border-mc-diamond shadow-[0_0_15px_rgba(78,230,214,0.3)]' : 'border-white/10'} backdrop-blur-sm transform hover:scale-105 transition-all duration-300 w-full`}>
                                        <div className="flex items-center gap-3 mb-2 md:justify-end">
                                            <round.icon className={round.status === 'active' ? 'text-mc-diamond' : 'text-gray-400'} size={24} />
                                            <h3 className={`font-pixel text-lg ${round.status === 'active' ? 'text-white' : 'text-gray-400'}`}>{round.title}</h3>
                                        </div>
                                        <p className="font-mono text-sm text-gray-400 md:text-right">{round.date}</p>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-8 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                                    <div className={`w-12 h-12 flex items-center justify-center border-4 ${round.status === 'active' ? 'bg-mc-diamond border-white' : round.status === 'completed' ? 'bg-mc-grass border-white' : 'bg-gray-800 border-gray-600'}`}>
                                        {round.status === 'completed' ? <CheckCircle2 className="text-white" /> : round.status === 'active' ? <div className="w-4 h-4 bg-white animate-pulse" /> : <Circle className="text-gray-500" size={16} />}
                                    </div>
                                </div>

                                {/* Empty Side for Layout Balance */}
                                <div className="md:w-1/2 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
