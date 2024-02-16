import { useState } from "react";
import { useEffect } from "react";
import { IProduct } from "../../models/model";
import { getProducts } from "../../api/getProducts";
import { TestProduct } from "./TestProduct";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../store/slices/basketSlice";

const ListProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  // используем useDispatch, чтобы могли пользоваться методами для изменения стейта
  const dispatch = useDispatch();

  const add = (element: IProduct) => {
    // вызываем dispatch чтобы изменить стейт
    // внутрь прокидываем нужный нам метод, который существует в нашем слайсе (файл basketSlice.ts)
    dispatch(addProductToBasket(element));
  };

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
          return <TestProduct key={el.id} product={el} addToCart={add} />;
        })
      ) : (
        <span>Нет продуктов</span>
      )}
    </div>
  );
};

export default ListProducts;
