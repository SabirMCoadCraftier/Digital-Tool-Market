export default function Banner() {
  return (
    <>
      <header className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 lg:py-20 bg-white gap-10">
        <div className="lg:w-[55%]">
          <div className="inline-flex items-center gap-2 bg-[#F3E8FF] text-[#6D28D9] text-[11px] font-extrabold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <span className="w-2 h-2 bg-[#6D28D9] rounded-full animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-[#1D1D1F] leading-[1.08] mb-6 tracking-tight">
            Supercharge Your <br />
            Digital Workflow
          </h1>
          <p className="text-gray-500 text-base mb-10 max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#6D28D9] text-white px-7 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-[#5B21B6] transition active:scale-95">
              Explore Products
            </button>
            <button className="flex items-center gap-2 border border-gray-200 px-7 py-3 rounded-full font-bold text-sm text-[#6D28D9] hover:bg-gray-50 transition active:scale-95">
              <img src="Play.png" alt="Play" className="w-4 h-4 object-contain" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="lg:w-[45%] flex justify-end">
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ width: '500px', height: '590px', flexShrink: 0 }}>
            <img src="banner.png" alt="Banner" className="w-full h-full object-cover"/>
          </div>
        </div>
      </header>

      <section className="w-full bg-[#6D28D9] py-12 flex flex-col md:flex-row justify-around items-center text-white gap-6 md:gap-0 mb-16">
        <div className="text-center">
          <h2 className="text-5xl font-black mb-2">50K+</h2>
          <p className="text-xs font-semibold opacity-75 uppercase tracking-widest">Active Users</p>
        </div>
        <div className="hidden md:block h-14 w-px bg-white/25"></div>
        <div className="text-center">
          <h2 className="text-5xl font-black mb-2">200+</h2>
          <p className="text-xs font-semibold opacity-75 uppercase tracking-widest">Premium Tools</p>
        </div>
        <div className="hidden md:block h-14 w-px bg-white/25"></div>
        <div className="text-center">
          <h2 className="text-5xl font-black mb-2">4.9</h2>
          <p className="text-xs font-semibold opacity-75 uppercase tracking-widest">Rating</p>
        </div>
      </section>
    </>
  );
}