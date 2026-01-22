import ProductCard from "../Components/ProductCard";

const Shop = () => {
  const addToCard = () => {};
  return (
    <section className="w-full md:pt-[10rem] pt-[8rem] h-full  font-space px-5 md:px-[3rem] lg:px-[5rem] ">
      <h1 className=" font-semibold text-left text-xl ml-2 md:ml-1 mb-8 md:mb-10 lg:mb-12 lg:text-[1.4rem] md:text-[1.2rem] ">
        Our Products 🥳{" "}
      </h1>

      <div className="w-full min-h-screen flex flex-wrap justify-center  gap-x-[0.5rem] md:gap-x-[4rem] lg:gap-x-[5.2rem] pb-[8rem] gap-y-[2rem] bg-transparent lg:gap-y-[3.2rem] ">
        <ProductCard
          key="9900"
          productName="Plant Based Food Color"
          productPrice={8900}
          handler={addToCard}
          productId="9900"
          stock={45}
        />
        <ProductCard
          key="9901"
          productName="Softies - Rainbow"
          productPrice={7500}
          handler={addToCard}
          productId="9901"
          stock={30}
        />
        <ProductCard
          key="9902"
          productName="Vegan Sprinkles"
          productPrice={6500}
          handler={addToCard}
          productId="9902"
          stock={20}
        />
        <ProductCard
          key="9903"
          productName="Natural Frosting Mix"
          productPrice={12000}
          handler={addToCard}
          productId="9903"
          stock={15}
        />
        <ProductCard
          key="9904"
          productName="Bulk Baking Chips"
          productPrice={15000}
          handler={addToCard}
          productId="9904"
          stock={10}
        />
        <ProductCard
          key="9905"
          productName="Plant-Based Chocolate"
          productPrice={9900}
          handler={addToCard}
          productId="9905"
          stock={25}
        />
        <ProductCard
          key="9906"
          productName="Colorful Baking Chips"
          productPrice={8700}
          handler={addToCard}
          productId="9906"
          stock={18}
        />
        <ProductCard
          key="9907"
          productName="Easy Frosting Mix"
          productPrice={11000}
          handler={addToCard}
          productId="9907"
          stock={12}
        />
      </div>
    </section>
  );
};

export default Shop;
