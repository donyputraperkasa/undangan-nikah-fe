import type { FloralWreathProps } from "@/types/ornament.type";
import { FloralWreathDefs, WreathButterflies } from "./FloralWreathParts";

export default function FloralWreath({ children, className = "" }: FloralWreathProps) {
    return (
        <div className={`relative flex items-center justify-center select-none ${className}`}>
            {/* SVG Illustration of Double Purple Ring, Flowers, Foliage, and Butterflies */}
            <svg
                viewBox="0 0 520 520"
                className="w-full h-full max-w-[460px] max-h-[460px] pointer-events-none drop-shadow-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <FloralWreathDefs />

                {/* Outer & Inner Delicate Purple Rings & Stippled Accents */}
                <circle cx="260" cy="250" r="195" stroke="#5E447E" strokeWidth="2.2" strokeOpacity="0.75" />
                <circle cx="260" cy="250" r="188" stroke="#7A6098" strokeWidth="1.2" strokeOpacity="0.55" />
                <circle cx="160" cy="95" r="2" fill="#7A6098" opacity="0.6" />
                <circle cx="360" cy="95" r="2" fill="#7A6098" opacity="0.6" />
                <circle cx="95" cy="190" r="2.5" fill="#7A6098" opacity="0.6" />
                <circle cx="425" cy="190" r="2.5" fill="#7A6098" opacity="0.6" />

                {/* Foliage / Leaves Behind Flowers (Bottom Half Arc) */}
                <g opacity="0.85">
                    <path d="M160 380 C130 360, 110 330, 120 300 C135 315, 150 340, 160 380 Z" fill="url(#leafGrad)" />
                    <path d="M190 410 C165 415, 140 400, 135 375 C155 378, 175 390, 190 410 Z" fill="url(#leafGrad)" />
                    <path d="M140 345 C120 340, 100 320, 105 300 C118 312, 130 330, 140 345 Z" fill="#6A7A64" />
                    <path d="M360 380 C390 360, 410 330, 400 300 C385 315, 370 340, 360 380 Z" fill="url(#leafGrad)" />
                    <path d="M330 410 C355 415, 380 400, 385 375 C365 378, 345 390, 330 410 Z" fill="url(#leafGrad)" />
                    <path d="M380 345 C400 340, 420 320, 415 300 C402 312, 390 330, 380 345 Z" fill="#6A7A64" />
                    <circle cx="125" cy="340" r="4" fill="#3D2952" />
                    <circle cx="132" cy="330" r="3.5" fill="#5E447E" />
                    <circle cx="118" cy="355" r="3" fill="#3D2952" />
                    <circle cx="395" cy="340" r="4" fill="#3D2952" />
                    <circle cx="388" cy="330" r="3.5" fill="#5E447E" />
                    <circle cx="402" cy="355" r="3" fill="#3D2952" />
                </g>

                {/* Left & Right Floral Clusters */}
                <g transform="translate(180, 370) rotate(-15)">
                    <circle cx="-16" cy="-14" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                    <circle cx="16" cy="-14" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                    <circle cx="-18" cy="10" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                    <circle cx="18" cy="10" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                    <circle cx="0" cy="20" r="15" fill="url(#purpleGrad2)" opacity="0.9" />
                    <circle cx="0" cy="0" r="10" fill="#3B264E" />
                    <circle cx="0" cy="0" r="6" fill="#F4DC9E" />
                </g>
                <g transform="translate(140, 330) rotate(-35)">
                    <ellipse cx="-12" cy="-10" rx="12" ry="15" fill="url(#purpleGrad1)" />
                    <ellipse cx="12" cy="-10" rx="12" ry="15" fill="url(#purpleGrad1)" />
                    <ellipse cx="-12" cy="10" rx="12" ry="15" fill="url(#purpleGrad2)" />
                    <ellipse cx="12" cy="10" rx="12" ry="15" fill="url(#purpleGrad2)" />
                    <circle cx="0" cy="0" r="7" fill="#F4DC9E" />
                </g>
                <g transform="translate(340, 370) rotate(15)">
                    <circle cx="-16" cy="-14" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                    <circle cx="16" cy="-14" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                    <circle cx="-18" cy="10" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                    <circle cx="18" cy="10" r="15" fill="url(#lavenderSoft)" opacity="0.95" />
                    <circle cx="0" cy="20" r="15" fill="url(#purpleGrad2)" opacity="0.9" />
                    <circle cx="0" cy="0" r="10" fill="#3B264E" />
                    <circle cx="0" cy="0" r="6" fill="#F4DC9E" />
                </g>
                <g transform="translate(380, 330) rotate(35)">
                    <ellipse cx="-12" cy="-10" rx="12" ry="15" fill="url(#purpleGrad1)" />
                    <ellipse cx="12" cy="-10" rx="12" ry="15" fill="url(#purpleGrad1)" />
                    <ellipse cx="-12" cy="10" rx="12" ry="15" fill="url(#purpleGrad2)" />
                    <ellipse cx="12" cy="10" rx="12" ry="15" fill="url(#purpleGrad2)" />
                    <circle cx="0" cy="0" r="7" fill="#F4DC9E" />
                </g>

                {/* Central Large Blooming Flower */}
                <g transform="translate(260, 400)">
                    <circle cx="0" cy="-28" r="22" fill="url(#lavenderSoft)" />
                    <circle cx="26" cy="-12" r="22" fill="url(#purpleGrad2)" />
                    <circle cx="22" cy="22" r="22" fill="url(#purpleGrad1)" />
                    <circle cx="-22" cy="22" r="22" fill="url(#purpleGrad1)" />
                    <circle cx="-26" cy="-12" r="22" fill="url(#lavenderSoft)" />
                    <circle cx="0" cy="-15" r="16" fill="url(#purpleGrad2)" opacity="0.95" />
                    <circle cx="14" cy="2" r="16" fill="url(#purpleGrad1)" opacity="0.95" />
                    <circle cx="-14" cy="2" r="16" fill="url(#purpleGrad2)" opacity="0.95" />
                    <circle cx="0" cy="14" r="16" fill="url(#purpleGrad1)" opacity="0.95" />
                    <circle cx="0" cy="0" r="12" fill="#351F47" />
                    <circle cx="0" cy="0" r="7" fill="#F2D795" />
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

                <WreathButterflies />
            </svg>

            {children && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pb-16 z-10 pointer-events-auto">
                    {children}
                </div>
            )}
        </div>
    );
}
