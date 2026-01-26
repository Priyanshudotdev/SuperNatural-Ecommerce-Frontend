import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import MinusSvg from "../../assets/svgs/MinusSvg";
import AddSvg from "../../assets/svgs/AddSvg";
// import AddSvg from "../assets/svgs/AddSvg";
// import MinusSvg from "../assets/svgs/MinusSvg";


export interface productDetails {
  id: string;
  name: string;
  price: number;
  qty: number;
  // Optionally keep old props for compatibility if needed
  productimageLink?: string;
  productTitle?: string;
  productSize?: string;
  productPrice?: string | number;
}

const ShoppingCard: React.FC<productDetails> = ({
  id,
  name,
  price,
  qty,
  productimageLink,
  productTitle,
  productSize,
  productPrice,
}) => {
  // Use qty as initial value if provided, else default to 1
  const [numberOfItem, setNumberOfItem] = useState<number>(qty ?? 1);
  return (
    <div className="w-full mt-2 md:mt-4 lg:mt-8 h-[11.5rem] flex items-center gap-6 md:gap-8 lg:gap-10 p-4  border-b border-b-black/25 relative ">
      {/* Optionally render image if productimageLink is provided */}
      {productimageLink && (
        <img
          className="w-24 h-24 mb-10 object-contain md:w-32 md:h-32 lg:w-36 lg:h-36 md:mb-6 xl:h-40 xl:w-40 xl:mb-2 cursor-pointer "
          src={productimageLink}
          alt={productTitle || name}
        />
      )}
      <div className="flex flex-col w-full h-full gap-y-4  ">
        {/* First Part */}
        <div className="flex items-start justify-between w-full cursor-pointer">
          <div className="flex flex-col  ">
            <h1 className="text-lg font-semibold md:text-[1.25rem] opacity-[0.8] md:leading-[2rem] ">
              {productTitle || name}
            </h1>
            <p className="text-sm md:text-[1rem] opacity-70">
              {productSize ? `Size: ${productSize}` : ""}
            </p>
          </div>
          <div className="flex items-center justify-center group hover:bg-gray-100 rounded-full cursor-pointer p-2">
            <RxCross2 className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
          </div>
        </div>
        {/* Second Part */}
        <div className="flex justify-between items-center sm:mt-6">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setNumberOfItem((prev) => Math.max(1, prev - 1))}
              className="w-10 p-2 h-10 flex items-center justify-center  rounded-full hover:bg-black/5"
            >
              <MinusSvg />
            </button>
            <span className="px-2 font-semibold tracking-[1px] ">
              {numberOfItem}
            </span>
            <button
              onClick={() => {
                setNumberOfItem(numberOfItem + 1);
              }}
              className="w-10 p-2 h-10 flex items-center justify-center  rounded-full hover:bg-black/5"
            >
              <AddSvg />
            </button>
          </div>
          <p className="text-lg lg:text-xl">₹{typeof productPrice !== 'undefined' ? productPrice : price}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
