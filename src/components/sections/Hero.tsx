import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PixelButton } from "../ui/PixelButton";

const LOADING_TEXTS = [
    "Generating terrain...",
    "Loading chunks...",
    "Spawning entities...",
    "Ready!"
];

export const Hero = () => {
    const [loadingIndex, setLoadingIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (loadingIndex < LOADING_TEXTS.length - 1) {
            const timeout = setTimeout(() => {
                setLoadingIndex((prev) => prev + 1);
            }, 800);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setIsLoaded(true);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [loadingIndex]);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-mc-night">
            {!isLoaded ? (
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-mc-grass border-t-transparent animate-spin"></div>
                    <motion.p
                        key={loadingIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="font-pixel text-mc-grass text-lg"
                    >
                        {LOADING_TEXTS[loadingIndex]}
                    </motion.p>
                    <div className="w-64 h-4 border-2 border-white bg-gray-900 mt-4 relative">
                        <motion.div
                            className="absolute left-0 top-0 bottom-0 bg-mc-grass"
                            initial={{ width: "0%" }}
                            animate={{ width: `${((loadingIndex + 1) / LOADING_TEXTS.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            ) : (
                <motion.div
                    className="relative z-10 text-center px-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="font-pixel text-mc-diamond text-xl md:text-2xl mb-4 animate-bounce">MLH OFFICIAL EVENT</h2>
                    <h1 className="font-pixel text-5xl md:text-7xl lg:text-9xl mb-6 text-white mc-text-shadow leading-tight">
                        BLOCK<span className="text-mc-grass">HACK</span>
                    </h1>
                    <p className="font-body text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Mine your potential. Craft your future. <br />
                        Join 500+ hackers in a 36-hour creative sandbox.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <PixelButton variant="primary" className="text-lg px-8 py-4">
                            Join Server (Register)
                        </PixelButton>
                        <PixelButton variant="outline" className="text-lg px-8 py-4">
                            View Map (Details)
                        </PixelButton>
                    </div>
                </motion.div>
            )}

            {/* Decorative Voxel Grid Background */}
            {isLoaded && (
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-mc-grass/20 to-transparent"></div>
                    {/* Floating Cubes generic placement */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-white/20"
                        animate={{ y: [0, -20, 0], rotate: [0, 90, 180] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-mc-diamond/30"
                        animate={{ y: [0, -30, 0], rotate: [0, -90, -180] }}
                        transition={{ duration: 15, repeat: Infinity, delay: 1 }}
                    />
                </div>
            )}
        </section>
    );
};
