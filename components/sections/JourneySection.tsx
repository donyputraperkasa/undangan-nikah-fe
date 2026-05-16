

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
        <section className="w-full bg-white px-6 py-24 md:py-32">
            <div className="max-w-xl mx-auto flex flex-col items-center text-center">
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#B08B57] mb-4">
                    Our Journey
                </p>

                <h2 className="text-4xl md:text-6xl font-serif text-[#3B2F2F] mb-6 leading-tight">
                    A Beautiful Story
                </h2>

                <p className="max-w-md text-[#6B5B5B] leading-relaxed mb-20 text-base md:text-lg">
                    Every moment we shared became part of a beautiful journey
                    leading us to this special day.
                </p>

                <div className="relative w-full flex flex-col gap-10">
                    <div className="absolute left-1/2 top-0 hidden md:block h-full w-[1px] bg-[#E7DDD4] -translate-x-1/2" />

                    {journeys.map((item, index) => (
                        <div
                            key={item.year}
                            className={`w-full flex ${
                                index % 2 === 0
                                    ? "md:justify-start"
                                    : "md:justify-end"
                            } justify-center`}
                        >
                            <div className="relative w-full md:w-[45%] bg-[#F8F5F2] rounded-[2rem] p-8 md:p-10 shadow-xl shadow-[#3B2F2F]/5 border border-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl text-left">
                                <div className="hidden md:block absolute top-10 w-5 h-5 rounded-full bg-[#B08B57] border-4 border-white shadow-md
                                ${index % 2 === 0 ? ' -right-14 ' : ' -left-14 '}" />

                                <p className="text-sm tracking-[0.3em] uppercase text-[#B08B57] mb-4">
                                    {item.year}
                                </p>

                                <h3 className="text-2xl md:text-3xl font-serif text-[#3B2F2F] mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-[#6B5B5B] leading-relaxed text-sm md:text-base">
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