const Search = () => {
  const [query, setQuery] = React.useState("");
  const products = [
    { id: "9900", name: "Plant Based Food Color" },
    { id: "9901", name: "Softies - Rainbow" },
    { id: "9902", name: "Vegan Sprinkles" },
    { id: "9903", name: "Natural Frosting Mix" },
  ];
  const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="w-full pt-[8rem] min-h-screen font-space px-5 md:px-[3rem] lg:px-[5rem]">
      <h1 className="text-2xl py-4 font-semibold">Search Products</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-6"
      />
      <ul className="space-y-4">
        {filtered.length === 0 ? (
          <li className="text-gray-500">No products found.</li>
        ) : (
          filtered.map(product => (
            <li key={product.id} className="bg-white p-4 rounded shadow">
              {product.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Search;
