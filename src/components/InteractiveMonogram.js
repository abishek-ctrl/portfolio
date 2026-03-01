import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const InteractiveMonogram = ({ systemState, setSystemState }) => {
    const states = [
        { code: 200, text: "OK", color: "text-emerald-500", glow: "bg-emerald-500" },
        { code: 403, text: "FORBIDDEN", color: "text-purple-500", glow: "bg-purple-500" },
        { code: 404, text: "NOT_FOUND", color: "text-slate-500", glow: "bg-slate-500" },
        { code: 429, text: "TOO_MANY_REQUESTS", color: "text-orange-500", glow: "bg-orange-500" },
        { code: 500, text: "SYS_ERR", color: "text-red-500", glow: "bg-red-500" },
    ];

    const currentIndex = states.findIndex(s => s.code === systemState);
    const activeState = states[currentIndex] || states[0];

    const handleClick = () => {
        if (systemState === 500) return; // Unrecoverable state
        const nextIndex = (currentIndex + 1) % states.length;
        setSystemState(states[nextIndex].code);
    };

    return (
        <motion.div
            id="monogram"
            className="w-full h-64 md:h-80 relative flex flex-col items-center justify-center cursor-pointer select-none group pointer-events-auto"
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Glowing background behind status */}
            <div className={`absolute inset-0 ${activeState.glow} opacity-5 rounded-full blur-3xl transition-colors duration-500`}></div>

            <div className="flex flex-col items-center justify-center z-10 font-mono">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeState.code}
                        initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.8 }}
                        animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                        exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                        className={`text-6xl md:text-8xl lg:text-[7rem] tracking-tighter font-bold ${activeState.color}`}
                    >
                        {activeState.code}
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeState.text}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`text-xl md:text-2xl mt-4 font-semibold tracking-widest ${activeState.color} opacity-80`}
                    >
                        {activeState.text}
                    </motion.div>
                </AnimatePresence>

                <div className={`absolute -bottom-12 text-xs font-sans transition-all duration-300 ${systemState === 500 ? 'text-red-500 animate-[pulse_1s_ease-in-out_infinite] opacity-100 font-bold tracking-widest' : 'text-slate-500/50 opacity-0 group-hover:opacity-100'}`}>
                    {systemState === 500 ? 'FATAL ERROR - PLEASE RELOAD THE PAGE' : 'Click to override system state'}
                </div>
            </div>
        </motion.div>
    );
};
