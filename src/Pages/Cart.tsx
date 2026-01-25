import React, { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import ShoppingCard from "../Components/Cart/ShoppingCard";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const navigate = useNavigate();

  const [
    totalPrice,
    //  setTotalPrice
  ] = useState<number>(9955);

  const [couponCode, setCouponCode] = useState<string>("");
  const [
    discount,
    //  setDiscount
  ] = useState<number>(0);

  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCouponCode(true);
      } else {
        setIsValidCouponCode(false);
      }
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [couponCode]);

  // Example cart items
  const cartItems = [
    { id: "9900", name: "Plant Based Food Color", price: 8900, qty: 2 },
    { id: "9901", name: "Softies - Rainbow", price: 7500, qty: 1 },
  ];

  // Calculate total price
  const calculatedTotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  // Simulate discount
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
              <ShoppingCard key={item.id} productId={item.id} productName={item.name} productPrice={item.price} quantity={item.qty} />
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
        {/* CARD START */}

        <ShoppingCard
          productPrice="14.99"
          productTitle="New! Rainbow Crunchies Sprinkles"
          productimageLink="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/967c3c2f-85a1-4e02-a455-2cfcee86390a/Supernatural_Rainbow-Softies-1lb_2204.png?format=750w"
          productSize="16oz"
          key={"1"}
        />
        <ShoppingCard
          productPrice="14.99"
          productTitle="New! Rainbow Crunchies Sprinkles"
          productimageLink="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/967c3c2f-85a1-4e02-a455-2cfcee86390a/Supernatural_Rainbow-Softies-1lb_2204.png?format=750w"
          productSize="16oz"
          key={"1"}
        />

        {/* CARD START */}
      </div>
      <div className="w-full md:pl-[60%] lg:pl-[70%] flex mt-6 md:mt-10 items-center justify-between px-2 ">
        <h1 className="text-lg ">Subtotal</h1>
        <span className="text-2xl tracking-1  ">${totalPrice}</span>
      </div>
      <span className="w-full p-2 md:pl-[60%]  h-full flex  flex-col lg:pl-[70%] ">
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => {
            setCouponCode(e.target.value);
          }}
          className=" mt-10  w-auto px-3 py-2 bg-transparent border border-zinc-800 rounded outline-none "
        />
        {!couponCode && (
          <span className="px-2 py-1 md:py-2 text-lg tracking-wide opacity-0 "></span>
        )}
        {couponCode &&
          (isValidCouponCode ? (
            <span className="text-green-600 px-2 py-1 font-normal tracking-wide text-lg md:py-2 ">
              ₹ {discount} off using the <code>{couponCode}</code>{" "}
            </span>
          ) : (
            <span className=" text-red-600 px-2 py-1 font-normal tracking-wide text-lg flex items-center gap-x-1 md:py-2 ">
              Invalid Coupon <VscError className="h-6 w-6" />
            </span>
          ))}
      </span>
      <div className="flex items-center justify-center md:pl-[60%] lg:pl-[70%] mt-10 md:pb-5 w-full ">
        <button
          onClick={() => {
            navigate("/shipping");
          }}
          className="w-full bg-black text-white py-5 rounded-full text-xl font-semibold md:tracking-[1px] tracking-[2px] hover:opacity-[0.8]  "
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
