import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { BgParticles } from "../ui/BgParticles";

const FAQS = [
    { q: "Who can participate?", a: "Any student, anywhere. No experience required." },
    { q: "Does it cost money?", a: "It's completely free. We even provide food and swag." },
    { q: "What should I build?", a: "Anything involving code! Web apps, games, hardware, AI." },
    { q: "Max team size?", a: "Teams can be up to 4 people. You can also hack solo." },
    { q: "Will there be mentorship?", a: "Yes, we have high-level wizards (mentors) available 24/7." },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 px-6 bg-mc-night relative overflow-hidden">
            <BgParticles variant="space" count={30} />
            <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="font-pixel text-4xl text-center text-purple-400 mb-16">ENCHANTMENT TABLE</h2>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="relative group">
                            {/* Book Frame */}
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left bg-purple-900/20 border-2 border-purple-500/30 p-6 flex justify-between items-center hover:bg-purple-900/40 transition-colors"
                            >
                                <span className="font-pixel text-white text-sm md:text-base group-hover:text-purple-300 transition-colors">
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    className={`text-purple-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="bg-black/50 border-l-2 border-r-2 border-b-2 border-purple-500/30 p-6 text-gray-300 font-body leading-relaxed">
                                            {/* "Runes" effect on hover? keeping simple for now */}
                                            {faq.a}
                                            <div className="flex gap-1 mt-4 opacity-30 select-none">
                                                {/* Decorative Runes */}
                                                <span className="font-pixel text-[10px]">⍙⟒⌰⌰ ⎅⍜⋏⟒</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Letters */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute text-purple-600/10 text-9xl font-pixel top-20 left-10 rotate-12"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    ?
                </motion.div>
                <motion.div
                    className="absolute text-purple-600/10 text-9xl font-pixel bottom-20 right-10 -rotate-12"
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    !
                </motion.div>
            </div>
        </section>
    );
};
