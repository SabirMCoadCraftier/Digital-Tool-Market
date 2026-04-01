export default function Navbar({ activeTab, setActiveTab, cartLength }) {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 lg:px-24 py-5 bg-white border-b border-gray-100 sticky top-0 z-50">
      
      <div 
        className="text-2xl font-black text-[#6D28D9] cursor-pointer"
        onMouseEnter={() => setActiveTab('products')}
      >
        DigiTools
      </div>

      <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500 absolute left-1/2 -translate-x-1/2">
        <button
          onClick={() => setActiveTab('products')}
          className={`cursor-pointer transition ${activeTab === 'products' ? 'text-[#1D1D1F]' : 'text-gray-500 hover:text-[#1D1D1F]'}`}
         >
        Products
        </button>
        <a href="#" className="hover:text-[#1D1D1F]">Features</a>
        <a href="#" className="hover:text-[#1D1D1F]">Pricing</a>
        <a href="#" className="hover:text-[#1D1D1F]">Testimonials</a>
        <a href="#" className="hover:text-[#1D1D1F]">FAQ</a>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setActiveTab('cart')}
          className="relative w-9 h-9 flex items-center justify-center hover:opacity-80"
        >
          <img src="/public/shopping-cart.png" alt="Cart" style={{ width: '20px', height: '20px' }} className="object-contain" />
          <span className="absolute -top-1.5 -right-1.5 bg-[#6D28D9] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
            {cartLength}
          </span>
        </button>

        <button className="text-sm font-semibold text-gray-700 hover:text-[#6D28D9]">Login</button>
        <button className="bg-[#6D28D9] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#5B21B6] transition shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  );
}