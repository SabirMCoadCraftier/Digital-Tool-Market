import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import HowItWorks from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import products from "./data/products.json";

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  const handleBuyNow = (product) => {
    const alreadyAdded = cart.find((item) => item.id === product.id);
    if (alreadyAdded) {
      toast.warning(`${product.name} is already in cart!`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Item removed from cart!");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success("Checkout successful! Cart cleared.");
    setActiveTab("products");
  };

  if (activeTab === "cart") {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <ToastContainer position="top-right" autoClose={2000} />

        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-[#1D1D1F] mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Choose from our curated collection of premium digital products designed{" "}
            <br className="hidden md:inline" /> to boost your productivity and creativity.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setActiveTab("products")}
              className="px-8 py-3 rounded-full font-bold text-sm bg-white border border-gray-200 text-gray-600 hover:border-[#6D28D9] transition-all"
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className="px-8 py-3 rounded-full font-bold text-sm bg-[#6D28D9] text-white shadow-lg transition-all"
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <Cart
            cart={cart}
            onRemove={handleRemove}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={2000} />

      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartLength={cart.length}
      />

      <Banner />

      <div className="text-center mt-16 mb-4">
        <h2 className="text-4xl font-black text-[#1D1D1F]">
          Premium Digital Tools
        </h2>
        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
          Choose from our curated collection of premium digital products designed{" "}
          <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center gap-4 my-8">
        <button
          onClick={() => setActiveTab("products")}
          className="px-8 py-3 rounded-full font-bold text-sm bg-[#6D28D9] text-white shadow-lg transition-all"
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("cart")}
          className="px-8 py-3 rounded-full font-bold text-sm bg-white border border-gray-200 text-gray-600 hover:border-[#6D28D9] transition-all"
        >
          Cart ({cart.length})
        </button>
      </div>

      <section className="px-6 md:px-16 lg:px-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuyClick={handleBuyNow}
              isAdded={!!cart.find((item) => item.id === product.id)}
            />
          ))}
        </div>
      </section>

      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;