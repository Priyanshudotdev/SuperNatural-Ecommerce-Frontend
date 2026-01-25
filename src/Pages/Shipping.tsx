import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [error, setError] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!shippingInfo.address || !shippingInfo.city || !shippingInfo.state || !shippingInfo.country || !shippingInfo.pinCode) {
      setError("Please fill all fields.");
      return;
    }
    setError("");
    navigate("/oders");
  };
  return (
    <div className="w-full h-screen pt-[6rem] px-5 md:pt-[10rem] z-50 md:px-[3rem] lg:px-[5rem]  gap-y-2  font-space mb-[3rem] md:mb-[5rem] lg:mb-[7rem] ">
      <button
        onClick={() => {
          navigate("/cart");
        }}
        className="p-3 hover:bg-n-1 rounded-full "
      >
        <BiArrowBack className="w-5 h-5" />
      </button>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-16 md:px-24  gap-y-6  mt-7 lg:px-[25vw] md:gap-y-8 lg:gap-y-10 "
      >
        <h1 className=" text-[1.3rem] tracking-wide text-center underline font-semibold md:text-[1.5rem] lg:text-[1.7rem] ">
          Shipping Address
        </h1>
        {error && <div className="text-red-500 text-center mb-2">{error}</div>}
        <input
          className="border border-zinc-700 rounded-sm px-2 py-1 bg-transparent text-black outline-yellow "
          required
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={changeHandler}
        />
        <input
          className="border border-zinc-700 rounded-sm px-2 py-1 bg-transparent text-black outline-yellow "
          required
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandler}
        />
        <input
          className="border border-zinc-700 rounded-sm px-2 py-1 bg-transparent text-black outline-yellow "
          required
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={changeHandler}
        />

        <select
          className=" px-2 py-1 border border-zinc-700 rounded-sm outline-yellow  "
          name="country"
          required
          value={shippingInfo.country}
          onChange={changeHandler}
        >
          <option className="px-2 tracking-[0.3px] " value="">
            Choose Country
          </option>
          <option className="px-2 tracking-[0.3px] " value="india">
            India
          </option>
        </select>

        <input
          className="border border-zinc-700 rounded-sm px-2 py-1 bg-transparent text-black outline-yellow "
          required
          type="number"
          placeholder="Pin Code"
          name="pinCode"
          value={shippingInfo.pinCode}
          onChange={changeHandler}
        />
        <button
          type="submit"
          className="mt-5 p-2 text-xl border border-zinc-700 rounded-sm hover:bg-n-1 hover:opacity-[.9] active:opacity-[0.3] "
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Shipping;
