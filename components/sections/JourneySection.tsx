

const journeys = [
    {
        year: "2022",
        title: "First Meet",
        description:
            "Our story began with a simple conversation that slowly turned into something meaningful.",
    },
    {
        year: "2023",
        title: "Relationship",
        description:
            "We spent countless beautiful moments together and learned to grow side by side.",
    },
    {
        year: "2025",
        title: "Engagement",
        description:
            "With love and blessings from our families, we decided to take the next step together.",
    },
    {
        year: "2026",
        title: "Wedding Day",
        description:
            "The beginning of our forever, where two souls unite in love and happiness.",
    },
];

export default function JourneySection() {
    return (
        <section id="journey-section" className="w-full bg-[#FAF7F2] px-6 py-20 md:py-28 border-t border-[#EFE8DD]">
            <div className="max-w-xl mx-auto flex flex-col items-center text-center">
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#A67C52] font-semibold mb-3">
                    Kisah Cinta Kami
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2E335B] mb-4 leading-tight">
                    Perjalanan Cinta
                </h2>

                <p className="max-w-md text-[#6B5E78] leading-relaxed mb-16 text-sm md:text-base">
                    Setiap langkah dan momen berharga yang menuntun kami hingga bersatu di hari bahagia ini.
                </p>

                <div className="relative w-full flex flex-col gap-8">
                    <div className="absolute left-1/2 top-0 hidden md:block h-full w-[1px] bg-[#E6DCCE] -translate-x-1/2" />

                    {journeys.map((item, index) => (
                        <div
                            key={item.year}
                            className={`w-full flex ${
                                index % 2 === 0
                                    ? "md:justify-start"
                                    : "md:justify-end"
                            } justify-center`}
                        >
                            <div className="relative w-full md:w-[46%] bg-white/90 rounded-[1.75rem] p-7 md:p-8 shadow-md border border-[#E6DCCE] text-left transition-all hover:-translate-y-1">
                                <p className="text-xs tracking-[0.25em] uppercase text-[#A67C52] font-bold mb-2">
                                    {item.year}
                                </p>

                                <h3 className="text-xl md:text-2xl font-serif text-[#2E335B] font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-[#6B5E78] leading-relaxed text-xs sm:text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}