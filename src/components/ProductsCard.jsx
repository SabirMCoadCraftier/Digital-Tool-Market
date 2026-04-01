import { useState } from 'react';

function TagBadge({ tag, tagType }) {
  const styles = {
    popular: 'bg-[#EEF2FF] text-[#4338CA]',
    new: 'bg-[#F0FDF4] text-[#15803D]',
  };
  const bestSeller = tag === 'Best Seller' ? 'bg-[#FFFBEB] text-[#B45309]' : '';
  const cls = bestSeller || styles[tagType] || styles.popular;
  return (
    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${cls}`}>
      {tag}
    </span>
  );
}

export default function ProductCard({ product, onBuyClick, isAdded }) {
  const [localAdded, setLocalAdded] = useState(false);

  const handleLocalClick = () => {
    onBuyClick(product);
    
    setLocalAdded(true);
    setTimeout(() => {
      setLocalAdded(false);
    }, 2000);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">

      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-[#F5F3FF] rounded-xl flex items-center justify-center overflow-hidden">
          <img src={product.icon} alt={product.name} className="w-7 h-7 object-contain" />
        </div>
        <TagBadge tag={product.tag} tagType={product.tagType} />
      </div>

      <h3 className="text-base font-bold mb-1.5 text-[#1D1D1F]">{product.name}</h3>
      <p className="text-gray-400 text-xs mb-4 leading-relaxed min-h-10">{product.description}</p>

      <div className="mb-4">
        <span className="text-2xl font-black text-[#1D1D1F]">${product.price}</span>
        <span className="text-gray-400 text-xs ml-1">/{product.period}</span>
      </div>

      <div className="space-y-1.5 mb-6">
        {product.features.map((f, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
            <svg className="w-3.5 h-3.5 text-purple-700 shrink-0" fill="none" viewBox="0 0 16 16">
              <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {f}
          </div>
        ))}
      </div>

      <button
        onClick={handleLocalClick}
        className={`w-full font-bold py-2.5 rounded-xl transition-all duration-300 text-sm flex items-center justify-center gap-2 ${
          localAdded
            ? 'bg-[#10B981] text-white'
            : 'bg-[#6D28D9] hover:bg-[#5B21B6] text-white'
        }`}
      >
        {localAdded ? 'Added to Cart!' : 'Buy Now'}
      </button>
    </div>
  );
}