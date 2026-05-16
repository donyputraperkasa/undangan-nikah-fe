import Container from "../ui/Container";
import { Leaf } from "lucide-react";

export default function QuoteSection() {
    return (
        <section
            className="relative h-screen w-full overflow-hidden flex items-center justify-center"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/dummyfoto.png"
                    alt="Wedding Background"
                    className="w-full h-full object-cover object-center"
                />
                {/* Overlay - Menggunakan gradasi halus atau warna solid yang pas */}
                <div className="absolute inset-0 bg-[#B89472]/70 mix-blend-multiply" />
            </div>
            <Container className="relative z-10 flex flex-col items-center justify-center text-center px-8">
                {/* Ornament - Diberi sedikit jarak dan ukuran yang proporsional */}
                <div className="mb-10 text-white/90">
                    <Leaf className="w-8 h-8 md:w-10 md:h-10 rotate-45 stroke-[1.2]" />
                </div>
                {/* Quote Content */}
                <div className="max-w-sm space-y-8">
                    {/* Menggunakan font-serif dengan tracking yang lebih lega */}
                    <p className="text-white text-lg md:text-lg leading-relaxed font-serif italic font-light tracking-wide">
                        “Demikianlah mereka bukan lagi dua, melainkan satu.
                        Karena itu, apa yang telah dipersatukan Allah,
                        tidak boleh diceraikan manusia.”
                    </p>
                    {/* Pembatas halus antara quote dan sumber */}
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-8 bg-white/30" />
                        <p className="text-white/90 text-sm md:text-base font-medium tracking-[0.3em]">
                            Matius 19 : 6
                        </p>
                        <div className="h-[1px] w-8 bg-white/30" />
                    </div>
                </div>
            </Container>
        </section>
    );
}