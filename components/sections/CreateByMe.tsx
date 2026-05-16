export default function CreateByMe() {
  return (
    <a
      href="https://portofolio-ku-gold.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] group"
    >
      <div className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-lg shadow-black/5 transition-all duration-300 group-hover:bg-white/90 group-hover:shadow-xl group-hover:-translate-y-1">
        <span className="text-[10px] tracking-wider uppercase text-gray-500 font-medium">
            Created by
        </span>
        
        {/* Garis vertikal tipis sebagai pemisah */}
        <div className="w-[1px] h-3 bg-gray-300 mx-0.5" />

        <span className="text-xs font-bold tracking-wide text-amber-700 capitalize">
            mas don
        </span>

        {/* Ikon panah kecil yang muncul saat hover */}
        <svg 
          className="w-3 h-3 text-amber-700 transition-transform duration-300 group-hover:translate-x-0.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14" />
        </svg>
      </div>
    </a>
  );
}