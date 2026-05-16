export default function FloatingParticles() {
    return (
        <>
            <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-white/60 animate-pulse" />
            <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-[#A67C52]/50 animate-bounce" />
            <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-[#5B4B8A]/40 animate-pulse" />
            <div className="absolute bottom-20 right-1/3 w-3 h-3 rounded-full bg-white/50 animate-bounce" />
        </>
    );
}
