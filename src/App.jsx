import { useEffect, useState } from "react";

import HeroSlide from "./components/herosection/HeroSlide";

import Nav from "./components/Nav/Nav";
import ProductCard from "./components/ProductCard";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className=" m-auto">
      <Nav />

      <HeroSlide />
      <div className="flex flex-wrap gap-2 justify-between mx-6">
        {products.map((e) => (
          <ProductCard item={e} />
        ))}
      </div>
    </div>
  );
}

export default App;
