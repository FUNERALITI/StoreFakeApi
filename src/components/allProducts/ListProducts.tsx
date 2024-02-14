import { useState } from "react";
import { useEffect } from "react";
import { IProduct } from "../../models/model";
// import { Product } from "./Product";
import { getProducts } from "../../api/getProducts";
import { TestProduct } from "./TestProduct";

const ListProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);
  const add = (element: IProduct) => {
    setCart([...cart, element]);
    // return id;
  };

  useEffect(() => {
    console.log("cart:", cart);
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts();
        setProducts(result);
      } catch (error) {
        console.error("Ошибка при получении продуктов", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="All">
      {products.length > 0 ? (
        products.map((el) => {
          return <TestProduct key={el.id} product={el} func={() => add(el)} />;
        })
      ) : (
        <span>Нет продуктов</span>
      )}
    </div>
  );
};

export default ListProducts;
