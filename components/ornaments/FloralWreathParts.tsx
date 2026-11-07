export function FloralWreathDefs() {
    return (
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
    );
}

export function WreathButterflies() {
    return (
        <>
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
        </>
    );
}
