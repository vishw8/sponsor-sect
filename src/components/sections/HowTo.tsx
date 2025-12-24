import { motion } from "framer-motion";
import { PixelCard } from "../ui/PixelCard";
import { UserPlus, Users, Hammer, Send } from "lucide-react";
import { BgParticles } from "../ui/BgParticles";

const STEPS = [
    {
        id: 1,
        title: "Spawn In",
        desc: "Register for the event to whitelist your username.",
        icon: UserPlus,
        color: "text-blue-400"
    },
    {
        id: 2,
        title: "Party Up",
        desc: "Form a party of up to 4 players or go solo survival.",
        icon: Users,
        color: "text-green-400"
    },
    {
        id: 3,
        title: "Craft",
        desc: "Build your project using any tools in your inventory.",
        icon: Hammer,
        color: "text-yellow-400"
    },
    {
        id: 4,
        title: "Showcase",
        desc: "Present your build to the admins (judges) for rewards.",
        icon: Send,
        color: "text-purple-400"
    }
];

export const HowTo = () => {
    return (
        <section id="guide" className="py-24 px-6 bg-mc-night relative overflow-hidden">
            <BgParticles variant="grass" count={25} />
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="font-pixel text-4xl text-center text-white mb-16">
                    <span className="text-mc-grass">&gt;</span> GAME GUIDE
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <PixelCard
                                className="h-full hover:bg-white/5 transition-colors group cursor-pointer"
                                variant="stone"
                            >
                                <div className="bg-black/40 w-12 h-12 flex items-center justify-center border-2 border-white/20 mb-4 absolute -top-6 -left-4 shadow-lg">
                                    <span className="font-pixel text-xl text-white">{step.id}</span>
                                </div>

                                <div className="mt-4 flex flex-col items-center text-center">
                                    <div className={`p-4 bg-white/5 rounded-full mb-4 ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon size={32} />
                                    </div>
                                    <h3 className="font-pixel text-lg mb-2 text-white group-hover:text-mc-diamond transition-colors">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </PixelCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
