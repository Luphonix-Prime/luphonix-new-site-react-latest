import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    style
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
            style={style}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                    style={{
                        background: `linear-gradient(90deg, ${gradient.replace('from-', '').replace('/[', '').replace(']', '')}, transparent)`,
                        backdropFilter: 'blur(2px)',
                        border: '2px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%'
                    }}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Blog & Insights",
    title1 = "Stay Updated with",
    title2 = "Latest Tech Trends",
    className = "",
    style = {}
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div 
            className={cn("relative w-full flex items-center justify-center overflow-hidden", className)}
            style={{ 
                background: '#030303',
                height: '60vh',
                ...style 
            }}
        >
            <div 
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), transparent, rgba(244, 63, 94, 0.05))',
                    filter: 'blur(48px)'
                }}
            />

            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="rgba(99, 102, 241, 0.15)"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="rgba(244, 63, 94, 0.15)"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="rgba(139, 92, 246, 0.15)"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="rgba(245, 158, 11, 0.15)"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="rgba(6, 182, 212, 0.15)"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '4px 12px',
                            borderRadius: '50px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            marginBottom: '48px'
                        }}
                    >
                        <Circle style={{ height: '8px', width: '8px', fill: 'rgba(244, 63, 94, 0.8)' }} />
                        <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '0.05em' }}>
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                            fontWeight: 'bold',
                            marginBottom: '32px',
                            letterSpacing: '-0.025em',
                            background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.8))',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            {title1}
                            <br />
                            <span style={{
                                background: 'linear-gradient(to right, rgb(165, 180, 252), rgba(255, 255, 255, 0.9), rgb(252, 165, 165))',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent'
                            }}>
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            color: 'rgba(255, 255, 255, 0.4)',
                            marginBottom: '0px',
                            lineHeight: '1.6',
                            fontWeight: '300',
                            letterSpacing: '0.025em',
                            maxWidth: '600px',
                            margin: '0 auto',
                            padding: '0 16px'
                        }}>
                            Discover the latest trends, tutorials, and insights from the world of technology and digital innovation.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, #030303, transparent, rgba(3, 3, 3, 0.8))',
                pointerEvents: 'none'
            }} />
        </div>
    );
}

export default HeroGeometric;