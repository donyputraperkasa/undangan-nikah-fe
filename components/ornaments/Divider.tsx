export default function Divider() {
    return (
        <div className="flex items-center justify-center gap-4 py-4">
            <div className="h-[1px] w-16 bg-[#A67C52]/40" />

            <div
                className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#A67C52]/40
                    bg-white/50
                    text-[#5B4B8A]
                    text-lg
                "
            >
                ✦
            </div>

            <div className="h-[1px] w-16 bg-[#A67C52]/40" />
        </div>
    );
}
