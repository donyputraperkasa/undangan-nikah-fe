type VintageCornerProps = {
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    className?: string;
    color?: string;
};

export default function VintageCorner({
    position = "top-left",
    className = "",
    color = "#A67C52",
}: VintageCornerProps) {
    const positionClasses = {
        "top-left": "top-0 left-0",
        "top-right": "top-0 right-0 -scale-x-100",
        "bottom-left": "bottom-0 left-0 -scale-y-100",
        "bottom-right": "bottom-0 right-0 -scale-x-100 -scale-y-100",
    };

    return (
        <div
            className={`absolute pointer-events-none select-none ${positionClasses[position]} ${className}`}
            aria-hidden="true"
        >
            <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 md:w-24 md:h-24 opacity-80"
            >
                {/* Outer corner frame line */}
                <path
                    d="M6 114 L6 20 C6 12.268, 12.268 6, 20 6 L114 6"
                    stroke={color}
                    strokeWidth="1.2"
                />
                <circle cx="6" cy="114" r="2.5" fill={color} />
                <circle cx="114" cy="6" r="2.5" fill={color} />

                {/* Inner decorative corner flourish */}
                <path
                    d="M18 70 C18 40, 40 18, 70 18"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                />

                {/* Baroque curled filigree leaves */}
                <path
                    d="M24 24 
                       C28 35, 38 42, 48 38 
                       C54 35, 48 26, 38 28 
                       C32 29, 28 26, 24 24 Z"
                    fill={color}
                    fillOpacity="0.85"
                />
                <path
                    d="M24 24 
                       C35 28, 42 38, 38 48 
                       C35 54, 26 48, 28 38 
                       C29 32, 26 28, 24 24 Z"
                    fill={color}
                    fillOpacity="0.85"
                />

                {/* Corner rosette blossom */}
                <circle cx="34" cy="34" r="5" fill={color} />
                <circle cx="34" cy="34" r="2.5" fill="#FAF7F2" />

                {/* Small accent dots */}
                <circle cx="58" cy="22" r="2" fill={color} />
                <circle cx="22" cy="58" r="2" fill={color} />
                <circle cx="80" cy="20" r="1.5" fill={color} />
                <circle cx="20" cy="80" r="1.5" fill={color} />
            </svg>
        </div>
    );
}
