export default function Cart({ cart, onRemove, onCheckout }) {
if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <img src="/src/assests/shopping-cart.png" alt="cart" className="w-16 h-16 mx-auto mb-4" />
        <p className="text-gray-400 font-semibold text-lg">Your cart is empty!</p>
        <p className="text-gray-300 text-sm mt-2">Go add some products first.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      
      {/* Cart Title */}
      <h2 className="text-lg font-bold text-[#1D1D1F] mb-5">Your Cart</h2>

      {/* Cart Items */}
      <div className="flex flex-col gap-3 mb-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-[#F9FAFB] rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
              </div>
              <div>
                <p className="font-bold text-[#1D1D1F] text-sm">{item.name}</p>
                <p className="text-gray-400 text-xs">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className="text-red-400 hover:text-red-600 font-semibold text-xs transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 mb-4"></div>

      {/* Total */}
      <div className="flex justify-between items-center mb-5">
        <span className="text-gray-400 text-sm">Total:</span>
        <span className="text-2xl font-black text-[#1D1D1F]">
          ${cart.reduce((sum, item) => sum + item.price, 0)}
        </span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={onCheckout}
        className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold py-3.5 rounded-xl transition text-sm tracking-wide"
      >
        Proceed To Checkout
      </button>
    </div>
  );
}