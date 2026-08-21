import React, { useState, useEffect } from 'react';
import MaintenanceIllustration from '../components/ui/MaintenanceIllustration';
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
        // Target date set to 26 Aug 2026
        const targetDate = new Date('2026-08-26T00:00:00');

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
                <h1 className="maintenance-header-title">WE'LL BE BACK SOON!</h1>
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
            </div>

            {/* Technician SVG illustration background at the bottom */}
            <div className="illustration-bg-container">
                <MaintenanceIllustration />
            </div>
        </div>
    );
};

export default Maintenance;
