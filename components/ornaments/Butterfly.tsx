type ButterflyProps = {
    className?: string;
};

export default function Butterfly({
    className = "",
}: ButterflyProps) {
    return (
        <div
            className={`
                absolute
                animate-bounce
                opacity-70
                ${className}
            `}
        >
            <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M22 22C17 10 5 8 4 18C3 28 14 30 22 22Z"
                    fill="#A67C52"
                    fillOpacity="0.7"
                />

                <path
                    d="M22 22C27 10 39 8 40 18C41 28 30 30 22 22Z"
                    fill="#5B4B8A"
                    fillOpacity="0.7"
                />

                <path
                    d="M22 22C16 30 10 38 16 40C22 42 22 30 22 22Z"
                    fill="#5B4B8A"
                    fillOpacity="0.5"
                />

                <path
                    d="M22 22C28 30 34 38 28 40C22 42 22 30 22 22Z"
                    fill="#A67C52"
                    fillOpacity="0.5"
                />
            </svg>
        </div>
    );
}
