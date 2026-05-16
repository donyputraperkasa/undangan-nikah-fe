type BatikCornerProps = {
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export default function BatikCorner({
    position = "top-left",
}: BatikCornerProps) {
    const positions = {
        "top-left": "top-0 left-0",
        "top-right": "top-0 right-0 rotate-90",
        "bottom-left": "bottom-0 left-0 -rotate-90",
        "bottom-right": "bottom-0 right-0 rotate-180",
    };

    return (
        <div
            className={`
                absolute
                ${positions[position]}
                pointer-events-none
                opacity-30
            `}
        >
            <svg
                width="140"
                height="140"
                viewBox="0 0 140 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 140C0 62.68 62.68 0 140 0"
                    stroke="#A67C52"
                    strokeWidth="2"
                />

                <path
                    d="M20 140C20 73.73 73.73 20 140 20"
                    stroke="#5B4B8A"
                    strokeWidth="1.5"
                />

                <circle
                    cx="42"
                    cy="98"
                    r="6"
                    fill="#A67C52"
                />

                <circle
                    cx="78"
                    cy="62"
                    r="4"
                    fill="#5B4B8A"
                />
            </svg>
        </div>
    );
}
