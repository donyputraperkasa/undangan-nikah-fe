import { ReactNode } from "react";

type FloralWreathProps = {
    children?: ReactNode;
    className?: string;
};

export default function FloralWreath({
    children,
    className = "",
}: FloralWreathProps) {
    return (
        <div
            className={`relative flex items-center justify-center select-none ${className}`}
        >
            {/* SVG Illustration of Double Purple Ring, Flowers, Foliage, and Butterflies */}
            <svg
                viewBox="0 0 520 520"
                className="w-full h-full max-w-[460px] max-h-[460px] pointer-events-none drop-shadow-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Flower Gradients */}
                    <linearGradient id="purpleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8A6EA8" />
                        <stop offset="60%" stopColor="#5E447E" />
                        <stop offset="100%" stopColor="#432F5C" />
                    </linearGradient>

                    <linearGradient id="purpleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#B39DCB" />
                        <stop offset="50%" stopColor="#8970A4" />
                        <stop offset="100%" stopColor="#664C82" />
                    </linearGradient>

                    <linearGradient id="lavenderSoft" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E2D6EE" />
                        <stop offset="70%" stopColor="#B6A3CE" />
                        <stop offset="100%" stopColor="#866E9F" />
                    </linearGradient>

                    <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#85927D" />
                        <stop offset="100%" stopColor="#4C5944" />
                    </linearGradient>

                    {/* Butterfly Gradients */}
                    <linearGradient id="butterflyWing1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E29272" />
                        <stop offset="60%" stopColor="#C9684C" />
                        <stop offset="100%" stopColor="#7B3A2C" />
                    </linearGradient>

                    <linearGradient id="butterflyWing2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EDB89A" />
                        <stop offset="70%" stopColor="#D98263" />
                        <stop offset="100%" stopColor="#8F4634" />
                    </linearGradient>
                </defs>

                {/* Outer Delicate Purple Ring */}
                <circle
                    cx="260"
                    cy="250"
                    r="195"
                    stroke="#5E447E"
                    strokeWidth="2.2"
                    strokeOpacity="0.75"
                />

                {/* Inner Delicate Purple Ring */}
                <circle
                    cx="260"
                    cy="250"
                    r="188"
                    stroke="#7A6098"
                    strokeWidth="1.2"
                    strokeOpacity="0.55"
                />

                {/* Fine Stippled Accents along the circle */}
                <circle cx="160" cy="95" r="2" fill="#7A6098" opacity="0.6" />
                <circle cx="360" cy="95" r="2" fill="#7A6098" opacity="0.6" />
                <circle cx="95" cy="190" r="2.5" fill="#7A6098" opacity="0.6" />
                <circle cx="425" cy="190" r="2.5" fill="#7A6098" opacity="0.6" />

                {/* Foliage / Leaves Behind Flowers (Bottom Half Arc) */}
                <g opacity="0.85">
                    {/* Left Leaves */}
                    <path d="M160 380 C130 360, 110 330, 120 300 C135 315, 150 340, 160 380 Z" fill="url(#leafGrad)" />
                    <path d="M190 410 C165 415, 140 400, 135 375 C155 378, 175 390, 190 410 Z" fill="url(#leafGrad)" />
                    <path d="M140 345 C120 340, 100 320, 105 300 C118 312, 130 330, 140 345 Z" fill="#6A7A64" />

                    {/* Right Leaves */}
                    <path d="M360 380 C390 360, 410 330, 400 300 C385 315, 370 340, 360 380 Z" fill="url(#leafGrad)" />
                    <path d="M330 410 C355 415, 380 400, 385 375 C365 378, 345 390, 330 410 Z" fill="url(#leafGrad)" />
                    <path d="M380 345 C400 340, 420 320, 415 300 C402 312, 390 330, 380 345 Z" fill="#6A7A64" />

                    {/* Eucalyptus Sprigs & Small Berries */}
                    <circle cx="125" cy="340" r="4" fill="#3D2952" />
                    <circle cx="132" cy="330" r="3.5" fill="#5E447E" />
                    <circle cx="118" cy="355" r="3" fill="#3D2952" />
                    <circle cx="395" cy="340" r="4" fill="#3D2952" />
                    <circle cx="388" cy="330" r="3.5" fill="#5E447E" />
                    <circle cx="402" cy="355" r="3" fill="#3D2952" />
                </g>

                {/* Left Floral Cluster */}
                <g>
                    {/* Flower 1 - Left Medium Lilac */}
                    <g transform="translate(180, 370) rotate(-15)">
                        <circle cx="-16" cy="-14" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                        <circle cx="16" cy="-14" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                        <circle cx="-18" cy="10" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                        <circle cx="18" cy="10" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                        <circle cx="0" cy="20" r="15" fill="url(#purpleGrad2)" opacity="0.9" />
                        <circle cx="0" cy="0" r="10" fill="#3B264E" />
                        <circle cx="0" cy="0" r="6" fill="#F4DC9E" />
                    </g>

                    {/* Flower 2 - Left Outer Violet */}
                    <g transform="translate(140, 330) rotate(-35)">
                        <ellipse cx="-12" cy="-10" rx="12" ry="15" fill="url(#purpleGrad1)" />
                        <ellipse cx="12" cy="-10" rx="12" ry="15" fill="url(#purpleGrad1)" />
                        <ellipse cx="-12" cy="10" rx="12" ry="15" fill="url(#purpleGrad2)" />
                        <ellipse cx="12" cy="10" rx="12" ry="15" fill="url(#purpleGrad2)" />
                        <circle cx="0" cy="0" r="7" fill="#F4DC9E" />
                    </g>
                </g>

                {/* Right Floral Cluster */}
                <g>
                    {/* Flower 3 - Right Medium Lilac */}
                    <g transform="translate(340, 370) rotate(15)">
                        <circle cx="-16" cy="-14" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                        <circle cx="16" cy="-14" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                        <circle cx="-18" cy="10" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                        <circle cx="18" cy="10" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                        <circle cx="0" cy="20" r="15" fill="url(#purpleGrad2)" opacity="0.9" />
                        <circle cx="0" cy="0" r="10" fill="#3B264E" />
                        <circle cx="0" cy="0" r="6" fill="#F4DC9E" />
                    </g>

                    {/* Flower 4 - Right Outer Violet */}
                    <g transform="translate(380, 330) rotate(35)">
                        <ellipse cx="-12" cy="-10" rx="12" ry="15" fill="url(#purpleGrad1)" />
                        <ellipse cx="12" cy="-10" rx="12" ry="15" fill="url(#purpleGrad1)" />
                        <ellipse cx="-12" cy="10" rx="12" ry="15" fill="url(#purpleGrad2)" />
                        <ellipse cx="12" cy="10" rx="12" ry="15" fill="url(#purpleGrad2)" />
                        <circle cx="0" cy="0" r="7" fill="#F4DC9E" />
                    </g>
                </g>

                {/* Central Large Blooming Flower */}
                <g transform="translate(260, 400)">
                    {/* Outer Petals */}
                    <circle cx="0" cy="-28" r="22" fill="url(#lavenderSoft)" />
                    <circle cx="26" cy="-12" r="22" fill="url(#purpleGrad2)" />
                    <circle cx="22" cy="22" r="22" fill="url(#purpleGrad1)" />
                    <circle cx="-22" cy="22" r="22" fill="url(#purpleGrad1)" />
                    <circle cx="-26" cy="-12" r="22" fill="url(#lavenderSoft)" />

                    {/* Inner Layer Petals */}
                    <circle cx="0" cy="-15" r="16" fill="url(#purpleGrad2)" opacity="0.95" />
                    <circle cx="14" cy="2" r="16" fill="url(#purpleGrad1)" opacity="0.95" />
                    <circle cx="-14" cy="2" r="16" fill="url(#purpleGrad2)" opacity="0.95" />
                    <circle cx="0" cy="14" r="16" fill="url(#purpleGrad1)" opacity="0.95" />

                    {/* Center Core */}
                    <circle cx="0" cy="0" r="12" fill="#351F47" />
                    <circle cx="0" cy="0" r="7" fill="#F2D795" />
                    {/* Stamens */}
                    <circle cx="-5" cy="-4" r="1.5" fill="#FFFFFF" />
                    <circle cx="4" cy="-4" r="1.5" fill="#FFFFFF" />
                    <circle cx="-3" cy="5" r="1.5" fill="#FFFFFF" />
                    <circle cx="4" cy="4" r="1.5" fill="#FFFFFF" />
                </g>

                {/* Petal Droplets / Splatters */}
                <ellipse cx="230" cy="450" rx="6" ry="3" fill="#8970A4" opacity="0.6" transform="rotate(20 230 450)" />
                <ellipse cx="290" cy="452" rx="5" ry="3" fill="#664C82" opacity="0.6" transform="rotate(-25 290 452)" />
                <ellipse cx="190" cy="435" rx="5" ry="2.5" fill="#B6A3CE" opacity="0.5" transform="rotate(35 190 435)" />
                <ellipse cx="330" cy="435" rx="5" ry="2.5" fill="#B6A3CE" opacity="0.5" transform="rotate(-35 330 435)" />

                {/* BUTTERFLY 1: Top-Left (Fluttering, warm terracotta/peach) */}
                <g transform="translate(100, 110) rotate(-22)" className="animate-[pulse_3s_ease-in-out_infinite]">
                    {/* Left Wing (Main) */}
                    <path
                        d="M0 0 C-18 -32, -45 -36, -55 -16 C-62 0, -42 22, 0 10 Z"
                        fill="url(#butterflyWing1)"
                        stroke="#4E2319"
                        strokeWidth="1"
                    />
                    {/* Left Wing Pattern Details */}
                    <path
                        d="M-5 -2 C-18 -20, -38 -22, -44 -10 C-48 2, -32 12, -4 6"
                        stroke="#FAF1E6"
                        strokeWidth="1.2"
                        strokeOpacity="0.8"
                        fill="none"
                    />
                    {/* Lower Left Wing */}
                    <path
                        d="M0 8 C-16 12, -32 25, -24 38 C-16 48, -2 34, 0 16 Z"
                        fill="url(#butterflyWing2)"
                        stroke="#4E2319"
                        strokeWidth="0.8"
                    />
                    {/* Butterfly Body & Head */}
                    <ellipse cx="1" cy="6" rx="3" ry="14" fill="#3D1D16" />
                    <circle cx="1" cy="-8" r="3" fill="#3D1D16" />
                    {/* Antennae */}
                    <path d="M0 -8 C-6 -18, -12 -22, -18 -22" stroke="#3D1D16" strokeWidth="1" fill="none" />
                    <path d="M2 -8 C6 -18, 12 -22, 16 -20" stroke="#3D1D16" strokeWidth="1" fill="none" />
                </g>

                {/* BUTTERFLY 2: Bottom-Right (Warm apricot/peach) */}
                <g transform="translate(425, 330) rotate(18)" className="animate-[pulse_3.5s_ease-in-out_infinite]">
                    {/* Right Wing (Main) */}
                    <path
                        d="M0 0 C18 -28, 42 -30, 48 -14 C54 2, 36 20, 0 8 Z"
                        fill="url(#butterflyWing1)"
                        stroke="#4E2319"
                        strokeWidth="1"
                    />
                    <path
                        d="M4 -1 C16 -18, 34 -20, 39 -8 C43 2, 28 12, 4 5"
                        stroke="#FAF1E6"
                        strokeWidth="1.2"
                        strokeOpacity="0.8"
                        fill="none"
                    />
                    {/* Lower Right Wing */}
                    <path
                        d="M0 6 C14 10, 28 22, 20 34 C12 42, 2 30, 0 14 Z"
                        fill="url(#butterflyWing2)"
                        stroke="#4E2319"
                        strokeWidth="0.8"
                    />
                    {/* Butterfly Body */}
                    <ellipse cx="-1" cy="5" rx="2.5" ry="12" fill="#3D1D16" />
                    <circle cx="-1" cy="-7" r="2.5" fill="#3D1D16" />
                    {/* Antennae */}
                    <path d="M-1 -7 C-5 -16, -10 -19, -15 -18" stroke="#3D1D16" strokeWidth="0.9" fill="none" />
                    <path d="M0 -7 C4 -16, 10 -19, 14 -18" stroke="#3D1D16" strokeWidth="0.9" fill="none" />
                </g>
            </svg>

            {/* Content Slot / Couple Names inside the Wreath */}
            {children && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pb-16 z-10 pointer-events-auto">
                    {children}
                </div>
            )}
        </div>
    );
}
