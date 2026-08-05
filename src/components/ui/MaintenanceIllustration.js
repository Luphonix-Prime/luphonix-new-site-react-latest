import React from 'react';

const MaintenanceIllustration = () => {
    return (
        <svg 
            viewBox="0 0 1000 600" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="sandbox-canvas"
            style={{ pointerEvents: 'none' }}
        >
            {/* BACKGROUND DECORATIVE GLOW */}
            <ellipse cx="500" cy="580" rx="220" ry="15" fill="#1A202C" opacity="0.06" />

            {/* LEFT SERVER CABINET */}
            <g id="left-server">
                <rect x="-20" y="240" width="200" height="360" rx="16" fill="#C0E1DB" stroke="#1A202C" strokeWidth="4.5" />
                <circle cx="30" cy="275" r="7" fill="#FFFFFF" stroke="#1A202C" strokeWidth="3" />
                <circle cx="65" cy="275" r="7" fill="#FFFFFF" stroke="#1A202C" strokeWidth="3" />
                <circle cx="100" cy="275" r="7" fill="#FFFFFF" stroke="#1A202C" strokeWidth="3" />
                
                <line x1="30" y1="310" x2="30" y2="570" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="30" cy="380" r="5" fill="#FFFFFF" />
                <circle cx="30" cy="460" r="5" fill="#FFFFFF" />

                <path d="M 30,420 L 75,460 L 75,540" stroke="#FFFFFF" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="75" cy="540" r="10" fill="#FFFFFF" stroke="#1A202C" strokeWidth="3" />

                <path d="M 30,500 L -5,535 L -5,580" stroke="#FFFFFF" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* RIGHT SERVER CABINET */}
            <g id="right-server">
                <rect x="820" y="240" width="200" height="360" rx="16" fill="#C0E1DB" stroke="#1A202C" strokeWidth="4.5" />
                <circle cx="850" cy="275" r="7" fill="#FFFFFF" stroke="#1A202C" strokeWidth="3" />
                <circle cx="885" cy="275" r="7" fill="#FFFFFF" stroke="#1A202C" strokeWidth="3" />
                <circle cx="920" cy="275" r="7" fill="#FFFFFF" stroke="#1A202C" strokeWidth="3" />
                <circle cx="955" cy="275" r="7" fill="#FFFFFF" stroke="#1A202C" strokeWidth="3" />

                <rect x="840" y="310" width="140" height="260" rx="8" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
                <rect x="855" y="335" width="45" height="22" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
                <rect x="920" y="335" width="45" height="22" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
                <line x1="900" y1="346" x2="920" y2="346" stroke="#FFFFFF" strokeWidth="2.5" />

                <path d="M 877,357 L 877,410 L 942,410 L 942,460" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                <rect x="920" y="460" width="45" height="22" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />

                <path d="M 877,410 L 855,430" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
                <path d="M 942,410 L 965,390" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
            </g>

            {/* ARMS (Drawn behind body/shirt) */}
            <g id="arms">
                {/* LEFT ARM */}
                <path 
                    d="M 210,600 C 190,490 210,430 250,385" 
                    stroke="#1A202C" 
                    strokeWidth="54" 
                    strokeLinecap="round" 
                    fill="none" 
                />
                <path 
                    d="M 210,600 C 190,490 210,430 250,385" 
                    stroke="#FFA0A0" 
                    strokeWidth="44" 
                    strokeLinecap="round" 
                    fill="none" 
                />

                {/* RIGHT ARM */}
                <path 
                    d="M 740,600 C 760,460 740,320 635,210" 
                    stroke="#1A202C" 
                    strokeWidth="54" 
                    strokeLinecap="round" 
                    fill="none" 
                />
                <path 
                    d="M 740,600 C 760,460 740,320 635,210" 
                    stroke="#FFA0A0" 
                    strokeWidth="44" 
                    strokeLinecap="round" 
                    fill="none" 
                />
            </g>

            {/* NECK */}
            <path 
                d="M 470,400 L 470,490 C 470,510 530,510 530,490 L 530,400 Z" 
                fill="#FFA0A0" 
                stroke="#1A202C" 
                strokeWidth="4.5" 
            />

            {/* GREEN SHIRT BODY (Matches reference image posture) */}
            <g id="shirt">
                <path 
                    d="M 320,600 C 320,530 400,480 500,480 C 600,480 680,530 680,600 Z" 
                    fill="#149375" 
                    stroke="#1A202C" 
                    strokeWidth="4.5" 
                />
                {/* Shirt Collar */}
                <path 
                    d="M 456,488 C 456,488 500,512 544,488" 
                    fill="none" 
                    stroke="#1A202C" 
                    strokeWidth="4.5" 
                    strokeLinecap="round" 
                />
            </g>

            {/* HEAD / FACE */}
            <g id="face-group">
                <path 
                    d="M 435,360 C 435,280 565,280 565,360 C 565,415 540,435 500,435 C 460,435 435,415 435,360 Z" 
                    fill="#FFA0A0" 
                    stroke="#1A202C" 
                    strokeWidth="4.5" 
                />

                {/* Neck Cover-up (Hides chin divider line) */}
                <rect x="473" y="380" width="54" height="40" fill="#FFA0A0" />

                {/* Left Ear */}
                <path d="M 436,365 C 420,365 420,385 436,385" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" />
                <path d="M 432,372 C 427,372 427,378 432,378" stroke="#1A202C" strokeWidth="3" fill="none" />
                
                {/* Right Ear */}
                <path d="M 564,365 C 580,365 580,385 564,385" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" />
                <path d="M 568,372 C 573,372 573,378 568,378" stroke="#1A202C" strokeWidth="3" fill="none" />

                {/* Eyes (No glasses, as per reference) */}
                <ellipse cx="482" cy="350" rx="5.5" ry="7.5" fill="#1A202C" />
                <ellipse cx="518" cy="350" rx="5.5" ry="7.5" fill="#1A202C" />
                <circle cx="480" cy="347" r="2" fill="#FFFFFF" />
                <circle cx="516" cy="347" r="2" fill="#FFFFFF" />

                {/* Eyebrows */}
                <path d="M 470,336 Q 480,328 490,336" stroke="#1A202C" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                <path d="M 510,336 Q 520,328 530,336" stroke="#1A202C" strokeWidth="3.5" fill="none" strokeLinecap="round" />

                {/* Nose */}
                <path d="M 500,348 Q 506,360 498,364" stroke="#1A202C" strokeWidth="3.5" fill="none" strokeLinecap="round" />

                {/* Smiling Mouth */}
                <path d="M 482,382 C 482,382 500,412 518,382 Z" fill="#FFFFFF" stroke="#1A202C" strokeWidth="3.5" strokeLinejoin="round" />
                
                {/* Cheek blush */}
                <circle cx="460" cy="372" r="10" fill="#FF8D8D" opacity="0.45" />
                <circle cx="540" cy="372" r="10" fill="#FF8D8D" opacity="0.45" />

                {/* Hair (Organic placement matching reference shape) */}
                <g id="hair" fill="#1A202C">
                    <circle cx="480" cy="300" r="28" />
                    <circle cx="510" cy="292" r="30" />
                    <circle cx="540" cy="300" r="28" />
                    <circle cx="455" cy="320" r="26" />
                    <circle cx="565" cy="320" r="26" />
                    <circle cx="440" cy="345" r="22" />
                    <circle cx="580" cy="345" r="22" />
                    <circle cx="438" cy="370" r="18" />
                    <circle cx="582" cy="370" r="18" />
                </g>
            </g>

            {/* THE WRENCH (Tilted yellow wrench matching angle) */}
            <g id="wrench" transform="translate(10, 0) rotate(-16, 600, 200)">
                <circle cx="480" cy="200" r="35" fill="#FCD116" stroke="#1A202C" strokeWidth="4.5" />
                <circle cx="720" cy="200" r="35" fill="#FCD116" stroke="#1A202C" strokeWidth="4.5" />
                <rect x="475" y="182" width="250" height="36" fill="#FCD116" stroke="#1A202C" strokeWidth="4.5" />
                {/* Inner shaft ridge details */}
                <rect x="515" y="190" width="170" height="20" rx="6" fill="#DCA300" stroke="#1A202C" strokeWidth="3.5" />
                {/* Open jaw cuts (transparency simulation matches cream page background #FAF0D8) */}
                <path d="M 445,185 L 485,210 L 465,235 Z" fill="#FAF0D8" stroke="#1A202C" strokeWidth="4.5" strokeLinejoin="round" />
                <path d="M 755,215 L 715,190 L 735,165 Z" fill="#FAF0D8" stroke="#1A202C" strokeWidth="4.5" strokeLinejoin="round" />
            </g>

            {/* WIRES LAYER 1 (Wires drawn behind hand grip) */}
            <g id="wires-back">
                {/* Left Wire segments leading up to hand */}
                <path d="M 30,420 C 120,400 180,360 220,380" stroke="#0F9B7B" strokeWidth="5.5" fill="none" strokeLinecap="round" />
                <path d="M 30,460 C 120,440 180,360 220,380" stroke="#FCD116" strokeWidth="5.5" fill="none" strokeLinecap="round" />
                <path d="M 30,500 C 120,480 180,360 220,380" stroke="#1A202C" strokeWidth="6" fill="none" strokeLinecap="round" />

                {/* Right Wire segments connecting from head to server */}
                <path d="M 550,360 C 640,360 740,320 840,360" stroke="#0F9B7B" strokeWidth="5.5" fill="none" strokeLinecap="round" />
                <path d="M 550,340 C 640,340 740,300 840,300" stroke="#FCD116" strokeWidth="5.5" fill="none" strokeLinecap="round" />
                <path d="M 550,320 C 640,320 740,280 840,280" stroke="#1A202C" strokeWidth="6" fill="none" strokeLinecap="round" />
                <path d="M 550,380 C 640,380 740,360 840,420" stroke="#F06292" strokeWidth="5" fill="none" strokeLinecap="round" />
            </g>

            {/* HANDS (Perfect fists wrapping tools and cables) */}
            <g id="hands">
                {/* LEFT HAND FIST (Viewer's Left, holding wires) */}
                <g id="left-hand">
                    <circle cx="250" cy="380" r="22" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" />
                    {/* Index, Middle, Ring, Pinky finger rounded blocks wrapping wires */}
                    <rect x="214" y="344" width="34" height="18" rx="9" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" />
                    <rect x="210" y="362" width="36" height="18" rx="9" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" />
                    <rect x="210" y="380" width="36" height="18" rx="9" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" />
                    <rect x="216" y="398" width="34" height="18" rx="9" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" />
                    {/* Thumb wrapping palm */}
                    <path d="M 248,402 C 260,414 280,402 268,386 Z" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" />
                </g>

                {/* RIGHT HAND FIST (Viewer's Right, rotated to grip the wrench shaft) */}
                <g id="right-hand" transform="translate(620, 168) rotate(-16)">
                    <circle cx="0" cy="15" r="22" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" />
                    {/* Four fingers wrapping from behind the handle */}
                    <rect x="-32" y="-10" width="20" height="34" rx="10" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" />
                    <rect x="-12" y="-10" width="20" height="34" rx="10" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" />
                    <rect x="8" y="-10" width="20" height="34" rx="10" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" />
                    <rect x="28" y="-10" width="20" height="34" rx="10" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" />
                    {/* Thumb wrapping handle on top */}
                    <path d="M -15,10 C -25,25 -5,35 5,20" fill="#FFA0A0" stroke="#1A202C" strokeWidth="4.5" strokeLinecap="round" />
                </g>
            </g>

            {/* WIRES LAYER 2 (Wires leading into the head from hand) */}
            <g id="wires-front">
                <path d="M 250,380 C 290,400 350,390 450,360" stroke="#0F9B7B" strokeWidth="5.5" fill="none" strokeLinecap="round" />
                <path d="M 250,380 C 290,400 350,370 450,340" stroke="#FCD116" strokeWidth="5.5" fill="none" strokeLinecap="round" />
                <path d="M 250,380 C 290,400 350,350 450,320" stroke="#1A202C" strokeWidth="6" fill="none" strokeLinecap="round" />
            </g>

            {/* YELLOW WARNING SIGNS */}
            <g id="warning-left" transform="translate(130, 460) rotate(-15)">
                <path d="M -50,34 L 0,-56 L 50,34 Z" fill="#1A202C" opacity="0.08" />
                <path d="M -50,30 L 0,-60 L 50,30 Z" fill="#FCD116" stroke="#1A202C" strokeWidth="6" strokeLinejoin="round" />
                <path d="M -38,24 L 0,-50 L 38,24 Z" fill="none" stroke="#1A202C" strokeWidth="2.5" strokeLinejoin="round" />
                <text x="0" y="18" fontFamily="System-UI, -apple-system, monospace" fontSize="50" fontWeight="900" fill="#1A202C" textAnchor="middle">?</text>
            </g>

            <g id="warning-right" transform="translate(870, 490) rotate(15)">
                <path d="M -50,34 L 0,-56 L 50,34 Z" fill="#1A202C" opacity="0.08" />
                <path d="M -50,30 L 0,-60 L 50,30 Z" fill="#FCD116" stroke="#1A202C" strokeWidth="6" strokeLinejoin="round" />
                <path d="M -38,24 L 0,-50 L 38,24 Z" fill="none" stroke="#1A202C" strokeWidth="2.5" strokeLinejoin="round" />
                <text x="0" y="18" fontFamily="System-UI, -apple-system, monospace" fontSize="50" fontWeight="900" fill="#1A202C" textAnchor="middle">?</text>
            </g>
        </svg>
    );
};

export default MaintenanceIllustration;
