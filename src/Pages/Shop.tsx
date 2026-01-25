import ProductCard from "../Components/ProductCard";

const Shop = () => {
  const [cart, setCart] = React.useState<string[]>([]);
  const products = [
    { id: "9900", name: "Plant Based Food Color", price: 8900, stock: 45 },
    { id: "9901", name: "Softies - Rainbow", price: 7500, stock: 30 },
    { id: "9902", name: "Vegan Sprinkles", price: 6500, stock: 20 },
    { id: "9903", name: "Natural Frosting Mix", price: 12000, stock: 15 },
    { id: "9904", name: "Bulk Baking Chips", price: 15000, stock: 10 },
    { id: "9905", name: "Plant-Based Chocolate", price: 9900, stock: 25 },
    { id: "9906", name: "Colorful Baking Chips", price: 8700, stock: 18 },
    { id: "9907", name: "Easy Frosting Mix", price: 11000, stock: 12 },
  ];
  const addToCart = (productId: string) => {
    setCart(prev => [...prev, productId]);
    alert("Added to cart!");
  };
  return (
    <section className="w-full md:pt-[10rem] pt-[8rem] h-full font-space px-5 md:px-[3rem] lg:px-[5rem]">
      <h1 className="font-semibold text-left text-xl ml-2 md:ml-1 mb-8 md:mb-10 lg:mb-12 lg:text-[1.4rem] md:text-[1.2rem]">Our Products 🥳</h1>
      <div className="w-full min-h-screen flex flex-wrap justify-center gap-x-[0.5rem] md:gap-x-[4rem] lg:gap-x-[5.2rem] pb-[8rem] gap-y-[2rem] bg-transparent lg:gap-y-[3.2rem]">
        {products.map(product => (
          <ProductCard
            key={product.id}
            productName={product.name}
            productPrice={product.price}
            handler={() => addToCart(product.id)}
            productId={product.id}
            stock={product.stock}
          />
        ))}
      </div>
    </section>
  );
};

export default Shop;
