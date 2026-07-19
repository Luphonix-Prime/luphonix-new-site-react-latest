import React, { useState, useEffect } from 'react';
import MaintenanceIllustration from '../components/ui/MaintenanceIllustration';
import { RotatingText } from '../components/ui/RotatingText';
import './Maintenance.css';

const Maintenance = () => {
    // 10 days countdown target
    const [timeLeft, setTimeLeft] = useState({
        days: '10',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        // Retrieve or initialize the target date in localStorage to prevent resetting on refreshes
        let targetDateStr = localStorage.getItem('maintenance_target_date');
        
        if (!targetDateStr) {
            const initialTarget = new Date();
            // Set target to exactly 10 days in the future
            initialTarget.setDate(initialTarget.getDate() + 10);
            targetDateStr = initialTarget.toISOString();
            localStorage.setItem('maintenance_target_date', targetDateStr);
        }

        const targetDate = new Date(targetDateStr);

        const timer = setInterval(() => {
            const difference = +targetDate - +new Date();
            
            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
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

    return (
        <div className="maintenance-wrapper">
            {/* Content Container (Title, Subtitle, Countdown, and CTA Button) */}
            <div className="maintenance-container">
                <h1 className="maintenance-header-title">
                    <RotatingText
                        texts={[
                            "WE'LL BE BACK SOON!",
                            "REWIRING THE MATRIX...",
                            "OPTIMIZING AI CORES...",
                            "CALIBRATING FLUX CAPACITORS...",
                            "UPGRADING EMITTER NODES..."
                        ]}
                        mainClassName="rotating-title-wrapper"
                        splitLevelClassName="rotating-word"
                        elementLevelClassName="rotating-char"
                        staggerDuration={0.02}
                        rotationInterval={3000}
                        transition={{ type: "spring", damping: 15, stiffness: 200 }}
                    />
                </h1>
                <p className="maintenance-header-subtitle">
                    We're doing some quick maintenance. Thanks for your patience!
                </p>

                {/* 10 Days Countdown Timer Row */}
                <div className="countdown-row">
                    <div className="countdown-pill">
                        <span className="countdown-num">{timeLeft.days}</span>
                        <span className="countdown-lbl">Days</span>
                    </div>
                    <div className="countdown-pill">
                        <span className="countdown-num">{timeLeft.hours}</span>
                        <span className="countdown-lbl">Hours</span>
                    </div>
                    <div className="countdown-pill">
                        <span className="countdown-num">{timeLeft.minutes}</span>
                        <span className="countdown-lbl">Mins</span>
                    </div>
                    <div className="countdown-pill">
                        <span className="countdown-num">{timeLeft.seconds}</span>
                        <span className="countdown-lbl">Secs</span>
                    </div>
                </div>

                {/* Return Button with Developer Bypass override */}
                <button 
                    onClick={() => {
                        localStorage.setItem('bypass_maintenance', 'true');
                        window.location.href = '/?bypass=true';
                    }} 
                    className="home-btn"
                >
                    Return to Homepage
                </button>
            </div>

            {/* Technician SVG illustration background at the bottom */}
            <div className="illustration-bg-container">
                <MaintenanceIllustration />
            </div>
        </div>
    );
};

export default Maintenance;
