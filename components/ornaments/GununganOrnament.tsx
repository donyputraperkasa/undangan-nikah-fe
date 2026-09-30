type GununganOrnamentProps = {
    className?: string;
    variant?: "full" | "side-left" | "side-right";
    color?: string;
};

export default function GununganOrnament({
    className = "",
    variant = "full",
    color = "#9E7B4F",
}: GununganOrnamentProps) {
    if (variant === "side-left" || variant === "side-right") {
        const isRight = variant === "side-right";
        return (
            <div
                className={`pointer-events-none select-none ${className} ${
                    isRight ? "-scale-x-100" : ""
                }`}
                aria-hidden="true"
            >
                <svg
                    viewBox="0 0 240 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-auto max-h-[85vh] drop-shadow-sm opacity-90 transition-opacity duration-300"
                >
                    {/* Outer Gunungan Edge */}
                    <path
                        d="M0 0 C40 45, 90 95, 120 150 C150 205, 175 260, 185 310 C195 360, 170 385, 140 395 C110 405, 100 420, 100 445 L100 500 L0 500 Z"
                        fill={color}
                        fillOpacity="0.88"
                    />

                    {/* Traditional Carved Openings / Motifs in Gunungan */}
                    {/* Clouds (Mega Mendung) & Vines Cutouts */}
                    <g fill="#FAF7F2" fillOpacity="0.95">
                        {/* Upper vine cutouts */}
                        <path d="M40 90 C55 85, 70 95, 65 110 C60 125, 45 125, 38 112 C32 100, 35 92, 40 90 Z" />
                        <path d="M75 140 C95 130, 115 145, 110 165 C105 185, 80 185, 70 170 C62 155, 65 145, 75 140 Z" />
                        <path d="M110 200 C130 195, 145 210, 140 228 C135 245, 115 245, 105 235 C95 225, 98 205, 110 200 Z" />

                        {/* Mid filigree flourishes */}
                        <path d="M35 170 C50 160, 65 175, 55 190 C45 205, 30 195, 25 185 C22 178, 28 172, 35 170 Z" />
                        <path d="M55 240 C75 228, 95 245, 85 265 C75 285, 50 280, 42 265 C38 255, 45 242, 55 240 Z" />
                        <path d="M120 270 C140 260, 155 278, 148 295 C140 312, 120 310, 112 298 C108 288, 112 275, 120 270 Z" />

                        {/* Candi / Paduraksa Portal Base cutouts */}
                        {/* Steps / Undak-undak */}
                        <rect x="0" y="440" width="85" height="10" rx="2" />
                        <rect x="0" y="460" width="75" height="10" rx="2" />
                        <rect x="0" y="480" width="65" height="10" rx="2" />

                        {/* Temple Gate Outline */}
                        <path d="M0 375 L65 375 L65 425 L0 425 Z" />
                        <path d="M15 390 L50 390 L50 425 L15 425 Z" fill={color} />

                        {/* Swirls & batik curls */}
                        <path d="M25 315 C45 305, 60 325, 50 345 C40 365, 20 355, 15 340 C12 328, 18 318, 25 315 Z" />
                        <path d="M75 330 C95 320, 110 340, 100 360 C90 380, 70 375, 62 360 C58 348, 65 335, 75 330 Z" />
                    </g>
                </svg>
            </div>
        );
    }

    // Full Gunungan / Kayon (Centrally Symmetrical)
    return (
        <div
            className={`inline-flex items-center justify-center select-none ${className}`}
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 160 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-sm"
            >
                {/* Traditional Gunungan Silhouette */}
                <path
                    d="M80 8 
                       C88 28, 102 45, 115 65 
                       C128 85, 142 108, 145 130 
                       C148 152, 138 165, 125 172 
                       C116 177, 112 184, 112 195 
                       L112 212 L48 212 L48 195 
                       C48 184, 44 177, 35 172 
                       C22 165, 12 152, 15 130 
                       C18 108, 32 85, 45 65 
                       C58 45, 72 28, 80 8 Z"
                    fill={color}
                />

                {/* Intricate Internal Filigree / Tree of Life Details in Cream / White */}
                <g fill="#FAF7F2" fillOpacity="0.95">
                    {/* Top finial / peak circle */}
                    <circle cx="80" cy="22" r="3" />
                    <circle cx="80" cy="34" r="2.5" />

                    {/* Central Tree Trunk / Stipe */}
                    <path d="M78 45 L82 45 L83 140 L77 140 Z" />

                    {/* Symmetric Branches & Leaves */}
                    {/* Tier 1 */}
                    <path d="M80 55 C90 50, 100 58, 96 68 C92 78, 84 72, 80 62" />
                    <path d="M80 55 C70 50, 60 58, 64 68 C68 78, 76 72, 80 62" />

                    {/* Tier 2 */}
                    <path d="M80 78 C98 72, 112 85, 106 98 C100 108, 88 100, 80 86" />
                    <path d="M80 78 C62 72, 48 85, 54 98 C60 108, 72 100, 80 86" />

                    {/* Tier 3 */}
                    <path d="M80 105 C105 98, 124 115, 116 130 C108 142, 92 132, 80 115" />
                    <path d="M80 105 C55 98, 36 115, 44 130 C52 142, 68 132, 80 115" />

                    {/* Gate / Candi Paduraksa at bottom */}
                    <path d="M60 150 L100 150 L100 188 L60 188 Z" />
                    <path d="M66 160 L94 160 L94 188 L66 188 Z" fill={color} />

                    {/* Gate Doorway Arch */}
                    <path d="M73 170 C73 166, 87 166, 87 170 L87 188 L73 188 Z" fill="#FAF7F2" />

                    {/* Base Steps */}
                    <rect x="52" y="194" width="56" height="4" rx="1.5" />
                    <rect x="56" y="202" width="48" height="4" rx="1.5" />
                </g>
            </svg>
        </div>
    );
}
