

import Button from "../ui/Button";

export default function MapSection() {
    return (
        <section className="w-full bg-[#F8F5F2] px-6 py-24 md:py-32">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#B08B57] mb-4">
                    Wedding Location
                </p>

                <h2 className="text-4xl md:text-6xl font-serif text-[#3B2F2F] mb-6">
                    Find The Venue
                </h2>

                <p className="max-w-2xl text-[#6B5B5B] leading-relaxed mb-14 text-base md:text-lg">
                    We are excited to celebrate our special day with you at our
                    wedding venue.
                </p>

                <div className="w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-[#3B2F2F]/10 border border-white mb-12">
                    <iframe
                        src="https://maps.app.goo.gl/DT4vURy9rh9EGDi7A?g_st=iwhttps://www.google.com/maps/place/Kantor+Kelurahan+Semampir/@-7.8011144,112.0086201,20z/data=!4m6!3m5!1s0x2e78572f0857e017:0x4e73198610713337!8m2!3d-7.8009005!4d112.008606!16s%2Fg%2F1hm1y1fp0!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                        width="100%"
                        height="450"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0"
                    />
                </div>

                <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button>
                        Open Maps
                    </Button>
                </a>
            </div>
        </section>
    );
}