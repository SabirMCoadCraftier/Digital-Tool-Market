import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-[#0B1320] text-white py-20 font-sans">
       <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Brand & Description */}
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold mb-4">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links Grid*/}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Column 1: Product */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-5">Product</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-5">Company</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-5">Resources</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 4: Social Links*/}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-5">Social Links</h3>
              <div className="flex gap-3">
                
                {/* Instagram */}
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 transition-colors">
                  <img 
                    src="/src/assets/Instagram.png" 
                    alt="Instagram" 
                    className="w-4 h-4 object-contain"
                  />
                </a>

                {/* Facebook */}
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 transition-colors">
                  <img 
                    src="/src/assets/Facebook.png" 
                    alt="Facebook" 
                    className="w-4 h-4 object-contain"
                  />
                </a>

                {/* X */}
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 transition-colors">
                  <img 
                    src="/src/assets/X.png" 
                    alt="Twitter" 
                    className="w-4 h-4 object-contain"
                  />
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800/60"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-500 gap-4">
          <span>© 2026 Digitools. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}