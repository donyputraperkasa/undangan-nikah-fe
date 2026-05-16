import Countdown from "../shared/Countdown";
import Button from "../ui/Button";

export default function CountdownSection() {
    return (
        <section className="w-full bg-[#F8F5F2] px-6 py-20 md:py-28 text-center">
            <div className="max-w-5xl mx-auto flex flex-col items-center">
                {/* Small Heading */}
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#B08B57] mb-6 md:mb-8">
                    Save The Date
                </p>

                {/* Main Title */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-serif text-[#3B2F2F] mb-6">
                    Counting Down To
                    <br />
                    Our Happy Day
                </h2>

                {/* Description */}
                <p className="max-w-xl text-[#6B5B5B] text-base md:text-lg leading-relaxed mb-14">
                    We are looking forward to celebrating our special day
                    with you.
                </p>

                {/* Countdown Component */}
                <div className="w-full mb-14">
                    <Countdown />
                </div>

                {/* Save The Date Button */}
                <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Nugroho+%26+Agata&dates=20261127T010000Z/20261127T050000Z&details=Join+our+wedding+celebration&location=Yogyakarta,+Indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button>
                        Save The Date
                    </Button>
                </a>
            </div>
        </section>
    );
}