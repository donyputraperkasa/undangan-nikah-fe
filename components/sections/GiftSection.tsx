

import Button from "../ui/Button";

export default function GiftSection() {
    return (
        <section className="w-full bg-white px-6 py-12 md:py-20">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#B08B57] mb-4">
                    Wedding Gift
                </p>

                <h2 className="text-4xl md:text-6xl font-serif text-[#3B2F2F] mb-6">
                    Send Your Love
                </h2>

                <p className="max-w-md text-[#6B5B5B] leading-relaxed mb-16 text-base md:text-lg">
                    Your prayers and blessings are more than enough for us.
                    However, if you would like to send a gift, you may do so
                    through the information below.
                </p>

                <div className="w-full grid md:grid-cols-2 gap-8">
                    <div className="bg-[#F8F5F2] rounded-[2rem] p-10 shadow-xl shadow-[#3B2F2F]/5 border border-white text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                        <p className="text-xs tracking-[0.3em] uppercase text-[#B08B57] mb-4">
                            Bank Account
                        </p>

                        <h3 className="text-3xl font-serif text-[#3B2F2F] mb-6">
                            BCA
                        </h3>

                        <p className="text-[#6B5B5B] text-lg mb-2">
                            1234567890
                        </p>

                        <p className="text-[#6B5B5B] mb-8">
                            a/n Ignasius Dwi Cahyo Nugroho
                        </p>

                        <Button>
                            Copy Account
                        </Button>
                    </div>

                    <div className="bg-[#F8F5F2] rounded-[2rem] p-10 shadow-xl shadow-[#3B2F2F]/5 border border-white text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                        <p className="text-xs tracking-[0.3em] uppercase text-[#B08B57] mb-4">
                            Send Gift
                        </p>

                        <h3 className="text-3xl font-serif text-[#3B2F2F] mb-6">
                            Glondong Tirtonirmolo Kasihan Bantul Yogyakarta
                        </h3>

                        <p className="text-[#6B5B5B] leading-relaxed mb-8">
                            Jl. Malioboro No. 123, Yogyakarta,
                            Indonesia 55213
                        </p>

                        <Button>
                            Copy Address
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}