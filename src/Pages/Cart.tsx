import React, { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import ShoppingCard, { productDetails } from "../Components/Cart/ShoppingCard";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const navigate = useNavigate();



  const [couponCode, setCouponCode] = useState("");
  const [discount] = useState(0);

  const [isValidCouponCode, setIsValidCouponCode] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setIsValidCouponCode(Math.random() > 0.5);
    }, 1000);
    return () => clearTimeout(timeOutId);
  }, [couponCode]);

  const cartItems: productDetails[] = [
    { id: "9900", name: "Plant Based Food Color", price: 8900, qty: 2 },
    { id: "9901", name: "Softies - Rainbow", price: 7500, qty: 1 },
  ];


  const calculatedTotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const finalTotal = calculatedTotal - discount;

  return (
    <div className="w-full pt-[8rem] md:pt-[12rem] min-h-[30rem] h-auto font-space md:px-[3rem] py-12 px-5 lg:px-[5rem] ">
      <h1 className="text-2xl py-4 tracking-[0.5px] md:font-semibold ">Shopping Cart</h1>
      <div className="w-full h-auto mt-2 ">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40">
            <VscError className="text-4xl text-gray-400 mb-2" />
            <span className="text-gray-500">Your cart is empty.</span>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <ShoppingCard key={item.id} id={item.id} name={item.name} price={item.price} qty={item.qty} />
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={e => setCouponCode(e.target.value)}
                  className="border px-3 py-2 rounded w-1/2"
                />
                <span className={`ml-2 text-sm ${isValidCouponCode ? "text-green-600" : "text-red-600"}`}>
                  {couponCode && (isValidCouponCode ? "Valid Coupon!" : "Invalid Coupon")}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>₹{finalTotal}</span>
              </div>
              <button
                className="bg-black text-white py-2 rounded mt-4 hover:bg-gray-800"
                onClick={() => navigate("/shipping")}
              >
                Proceed to Shipping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
