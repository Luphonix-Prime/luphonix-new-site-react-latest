import React, { useState, useEffect, useRef } from 'react';
import { RotatingText } from '../components/ui/RotatingText';
import { 
    Shield, 
    Send, 
    Zap, 
    Check, 
    Github,
    Twitter,
    Linkedin,
    Globe,
    Sparkles
} from 'lucide-react';
import './Maintenance.css';

const Maintenance = () => {
    const [email, setEmail] = useState('');
    const [subStatus, setSubStatus] = useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const canvasRef = useRef(null);

    // Countdown configuration: target 14 days in the future
    const [timeLeft, setTimeLeft] = useState({
        days: '10',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        const now = new Date();
        const targetDate = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 60 * 1000);

        const timer = setInterval(() => {
            const difference = +targetDate - +new Date();
            
            if (difference <= 0) {
                clearInterval(timer);
                return;
            }

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const m = Math.floor((difference / 1000 / 60) % 60);
            const s = Math.floor((difference / 1000) % 60);

            setTimeLeft({
                days: String(d).padStart(2, '0'),
                hours: String(h).padStart(2, '0'),
                minutes: String(m).padStart(2, '0'),
                seconds: String(s).padStart(2, '0')
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Interactive Bubble Physics Sandbox
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Bubble Class Definition
        class Bubble {
            constructor(x, y, radius, color) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
                // Random speeds
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;
                this.baseRadius = radius;
            }

            update(width, height, mouse) {
                // Move bubble
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off walls
                if (this.x - this.radius < 0) {
                    this.x = this.radius;
                    this.vx *= -1;
                } else if (this.x + this.radius > width) {
                    this.x = width - this.radius;
                    this.vx *= -1;
                }

                if (this.y - this.radius < 0) {
                    this.y = this.radius;
                    this.vy *= -1;
                } else if (this.y + this.radius > height) {
                    this.y = height - this.radius;
                    this.vy *= -1;
                }

                // Mouse interaction (Repelling force)
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const forceRadius = 140;

                    if (distance < forceRadius) {
                        const force = (forceRadius - distance) / forceRadius;
                        const directionX = dx / distance;
                        const directionY = dy / distance;
                        
                        // Push bubble away softly
                        this.x += directionX * force * 3;
                        this.y += directionY * force * 3;

                        // Expand slightly when close to mouse
                        this.radius = this.baseRadius + force * 15;
                    } else {
                        // Return to base size
                        if (this.radius > this.baseRadius) {
                            this.radius -= 0.5;
                        }
                    }
                } else {
                    if (this.radius > this.baseRadius) {
                        this.radius -= 0.5;
                    }
                }
            }

            draw(context) {
                context.beginPath();
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                context.fillStyle = this.color;
                context.fill();
                context.closePath();
            }
        }

        const bubblesList = [];
        const pastelColors = [
            'rgba(186, 230, 253, 0.35)', // Soft Sky Blue
            'rgba(233, 213, 255, 0.35)', // Soft Purple
            'rgba(187, 247, 208, 0.35)', // Soft Mint
            'rgba(251, 207, 232, 0.35)', // Soft Pink
            'rgba(254, 240, 138, 0.35)', // Soft Yellow
            'rgba(254, 215, 170, 0.35)'  // Soft Orange
        ];

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Spawn initial bubbles
        const spawnCount = Math.min(45, Math.floor((canvas.width * canvas.height) / 25000));
        for (let i = 0; i < spawnCount; i++) {
            const radius = Math.random() * 20 + 15;
            const x = Math.random() * (canvas.width - radius * 2) + radius;
            const y = Math.random() * (canvas.height - radius * 2) + radius;
            const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
            bubblesList.push(new Bubble(x, y, radius, color));
        }

        const mouse = { x: null, y: null };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        // Spawn bubbles on click
        const handleCanvasClick = (e) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            // Spawn 3 new bubbles
            for (let i = 0; i < 3; i++) {
                const radius = Math.random() * 15 + 10;
                const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
                const newBubble = new Bubble(clickX, clickY, radius, color);
                // Give them a slight outward velocity from the click
                newBubble.vx = (Math.random() - 0.5) * 4;
                newBubble.vy = (Math.random() - 0.5) * 4;
                bubblesList.push(newBubble);
            }

            // Cap maximum bubbles to prevent lags
            if (bubblesList.length > 100) {
                bubblesList.splice(0, 3);
            }
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        canvas.addEventListener('click', handleCanvasClick);

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw bubbles
            bubblesList.forEach(bubble => {
                bubble.update(canvas.width, canvas.height, mouse);
                bubble.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            canvas.removeEventListener('click', handleCanvasClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Newsletter submit
    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            setSubStatus({ type: 'error', message: 'Please specify a valid email address.' });
            return;
        }

        setIsLoading(true);
        setSubStatus({ type: '', message: '' });

        setTimeout(() => {
            setIsLoading(false);
            setSubStatus({ 
                type: 'success', 
                message: 'Successfully registered! We will notify you when we open.' 
            });
            setEmail('');
        }, 1200);
    };

    return (
        <div className="maintenance-wrapper">
            {/* Soft grid background */}
            <div className="maintenance-bg-grid"></div>

            {/* Interactive Physics Sandbox canvas */}
            <canvas ref={canvasRef} className="sandbox-canvas"></canvas>

            <div className="maintenance-container">
                {/* Status Indicator */}
                <div className="status-badge">
                    <span className="status-dot"></span>
                    Portal Upgrades
                </div>
                
                {/* Branding & Logo */}
                <div className="maintenance-logo">
                    <img src="/logodk.png" alt="Luphonix Logo" />
                    <h1 className="maintenance-title">
                        LUPHONIX <span>CRAFTING NEW SPACES</span>
                    </h1>
                </div>

                <p className="maintenance-desc">
                    We are currently redesigning our portal to bring you a clean, creative, and optimized web experience. Intersect with the canvas to float the circles!
                </p>

                {/* Rotating text */}
                <div className="rotating-text-wrapper">
                    <span>💡&nbsp;</span>
                    <RotatingText
                        texts={[
                            'Designing next-generation digital products...',
                            'Optimizing web animations for speed...',
                            'Adding clean-white minimal modules...',
                            'Calibrating asset delivery systems...',
                            'Awaiting launch codes...'
                        ]}
                        rotationInterval={3000}
                        transition={{ type: 'tween', duration: 0.4 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '-100%', opacity: 0 }}
                    />
                </div>

                {/* Countdown Timer */}
                <div className="countdown-container">
                    <div className="countdown-box">
                        <span className="countdown-val">{timeLeft.days}</span>
                        <span className="countdown-lbl">Days</span>
                    </div>
                    <div className="countdown-box">
                        <span className="countdown-val">{timeLeft.hours}</span>
                        <span className="countdown-lbl">Hours</span>
                    </div>
                    <div className="countdown-box">
                        <span className="countdown-val">{timeLeft.minutes}</span>
                        <span className="countdown-lbl">Mins</span>
                    </div>
                    <div className="countdown-box">
                        <span className="countdown-val">{timeLeft.seconds}</span>
                        <span className="countdown-lbl">Secs</span>
                    </div>
                </div>

                {/* Newsletter Form */}
                <div className="subscribe-card">
                    <div className="card-title">
                        <Sparkles size={14} />
                        Get Notified On Launch
                    </div>
                    <form onSubmit={handleSubscribe} className="subscribe-form">
                        <input
                            type="email"
                            placeholder="Enter email to get notified..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="subscribe-input"
                            disabled={isLoading}
                        />
                        <button type="submit" className="subscribe-btn" disabled={isLoading}>
                            {isLoading ? (
                                <Zap className="animate-spin" size={14} />
                            ) : (
                                <>
                                    Notify Me
                                    <Send size={12} />
                                </>
                            )}
                        </button>
                    </form>
                    {subStatus.message && (
                        <div className={`form-feedback ${subStatus.type}`}>
                            {subStatus.type === 'success' ? <Check size={14} /> : <Shield size={14} />}
                            {subStatus.message}
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="maintenance-footer">
                <span className="footer-copyright">
                    © {new Date().getFullYear()} LUPHONIX. INNOVATING WITH SIMPLICITY.
                </span>
                <div className="footer-socials">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                        <Github size={16} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                        <Twitter size={16} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                        <Linkedin size={16} />
                    </a>
                    <a href="https://luphonix.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Website">
                        <Globe size={16} />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Maintenance;
