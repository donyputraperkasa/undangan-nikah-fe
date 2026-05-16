export default function CountdownSection() {
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center bg-[#F8F5F2]">
            
            {/* Grouping Content agar terpusat sempurna */}
            <div className="flex flex-col items-center">
                
                {/* Small Heading */}
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#B08B57] mb-6 md:mb-8">
                    Save The Date
                </p>

                {/* Main Title */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-serif text-[#3B2F2F] mb-12 md:mb-16">
                    Counting Down To
                    <br />
                    Our Happy Day
                </h2>

                {/* Countdown Grid */}
                <div className="grid grid-cols-4 gap-3 md:gap-6">
                    {/* Item: Days */}
                    <div className="w-[75px] h-[90px] md:w-[110px] md:h-[130px] rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-xl shadow-[#3B2F2F]/5 flex flex-col items-center justify-center border border-white">
                        <span className="text-2xl md:text-4xl font-bold text-[#3B2F2F]">99</span>
                        <span className="text-[10px] md:text-xs text-[#7A6A6A] uppercase tracking-widest mt-1">Days</span>
                    </div>

                    {/* Item: Hours */}
                    <div className="w-[75px] h-[90px] md:w-[110px] md:h-[130px] rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-xl shadow-[#3B2F2F]/5 flex flex-col items-center justify-center border border-white">
                        <span className="text-2xl md:text-4xl font-bold text-[#3B2F2F]">12</span>
                        <span className="text-[10px] md:text-xs text-[#7A6A6A] uppercase tracking-widest mt-1">Hours</span>
                    </div>

                    {/* Item: Minutes */}
                    <div className="w-[75px] h-[90px] md:w-[110px] md:h-[130px] rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-xl shadow-[#3B2F2F]/5 flex flex-col items-center justify-center border border-white">
                        <span className="text-2xl md:text-4xl font-bold text-[#3B2F2F]">30</span>
                        <span className="text-[10px] md:text-xs text-[#7A6A6A] uppercase tracking-widest mt-1">Mins</span>
                    </div>

                    {/* Item: Seconds */}
                    <div className="w-[75px] h-[90px] md:w-[110px] md:h-[130px] rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-xl shadow-[#3B2F2F]/5 flex flex-col items-center justify-center border border-white">
                        <span className="text-2xl md:text-4xl font-bold text-[#3B2F2F]">45</span>
                        <span className="text-[10px] md:text-xs text-[#7A6A6A] uppercase tracking-widest mt-1">Secs</span>
                    </div>
                </div>
                
            </div>
        </section>
    );
}