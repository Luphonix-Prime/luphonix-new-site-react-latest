import { motion } from "framer-motion";
import { Button } from "./ui/Button";

function FloatingPaths({ position }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <svg
                style={{ width: '100%', height: '100%', color: 'rgba(255, 255, 255, 0.1)' }}
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Explore Our Insights",
    subtitle = "Dive into the world of technology and innovation",
    showButton = true,
    containerStyle = {},
    contentStyle = {}
}) {
    const words = title.split(" ");

    return (
        <div 
            style={{ 
                position: 'relative', 
                width: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                overflow: 'hidden', 
                background: 'var(--primary-bg)',
                minHeight: '70vh',
                ...containerStyle 
            }}
        >
            <div style={{ position: 'absolute', inset: 0 }}>
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div 
                style={{ 
                    position: 'relative', 
                    zIndex: 10, 
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 16px',
                    textAlign: 'center',
                    ...contentStyle
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: 'bold',
                        marginBottom: '32px',
                        letterSpacing: '-0.025em'
                    }}>
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                style={{ display: 'inline-block', marginRight: '16px' }}
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: wordIndex * 0.1 + letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        style={{
                                            display: 'inline-block',
                                            background: 'linear-gradient(to right, var(--text-primary), rgba(255, 255, 255, 0.8))',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            color: 'transparent'
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            style={{
                                fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                                color: 'var(--text-secondary)',
                                marginBottom: '48px',
                                lineHeight: '1.6',
                                fontWeight: '300'
                            }}
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {showButton && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            style={{
                                display: 'inline-block',
                                position: 'relative',
                                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                                padding: '1px',
                                borderRadius: '16px',
                                backdropFilter: 'blur(16px)',
                                overflow: 'hidden',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <Button
                                variant="ghost"
                                style={{
                                    borderRadius: '15px',
                                    padding: '24px 32px',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    backdropFilter: 'blur(12px)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'var(--text-primary)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                <span style={{ opacity: 0.9 }}>
                                    Discover Excellence
                                </span>
                                <span style={{ marginLeft: '12px', opacity: 0.7 }}>
                                    →
                                </span>
                            </Button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default BackgroundPaths;