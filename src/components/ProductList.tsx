import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Search from "./Search";
import { search } from "./Search";
import { useAtom } from "jotai";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter] = useAtom(search);

  useEffect(() => {
    const fetchProductsData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const jsondata = await res.json();
      setProducts(jsondata);
    };

    fetchProductsData();
  }, []);
  console.log(products);
  const filterdata = () => {
    if (!products) return products ;
    return products.filter((product) =>
      product.title.toLowerCase().includes(filter.toLowerCase())
    );
  };
  // filterdata();
  //  console.log(filterdata())
  return (
    <div className="mt-36 ml-72">
      <ul className="grid grid-cols-4 gap-5 ">
        {filterdata().map((data) => (
          <ProductCard
            key={data.id}
            datatitle={data.title}
            price={data.price}
            image={data.image}
          />
        ))}

        {/* {
          filterdata().map((fd) => (
            <ProductCard 
             key={fd.id}
             datatitle={fd.title}
             price={fd.price}
             image={fd.image}
            />
          ))
        } */}
      </ul>
    </div>
  );
};
export default ProductList;
