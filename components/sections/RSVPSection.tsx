import Button from "../ui/Button";

export default function RSVPSection() {
    return (
        <section className="w-full min-h-screen px-6 py-28 md:py-36 flex flex-col items-center justify-center text-center bg-white">
            
            {/* Small Heading */}
            <p className="text-sm tracking-[0.3em] uppercase text-[#B08B57] mb-4">
                Reservation
            </p>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl leading-[1.2] font-semibold text-[#3B2F2F] mb-8">
                RSVP
            </h2>

            {/* Description */}
            <p className="max-w-sm text-lg text-[#6B5B5B] leading-9 mb-14">
                We hope you will attend and celebrate this special day with us.
            </p>

            {/* Button Component */}
            <Button>
                Confirm Attendance
            </Button>

        </section>
    );
}