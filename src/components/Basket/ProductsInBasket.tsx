import React from "react";
import { useDispatch } from "react-redux";
import { IProduct } from "../../models/model";
import { removeProductBasket } from "../../store/slices/basketSlice";

interface ProdBasket {
  element: IProduct;
  count: number;
}

export const ProductsInBasket: React.FC<ProdBasket> = ({ element, count }) => {
  const dispatch = useDispatch();

  const remove = () => {
    // вызываем dispatch чтобы изменить стейт
    // внутрь прокидываем нужный нам метод, который существует в нашем слайсе (файл basketSlice.ts)
    dispatch(removeProductBasket(element.id));
  };

  return (
    <div>
      <img className="image-basket" src={element.image} alt={element.title} />
      <p>{element.title}</p>
      <p>{element.price}</p>
      <p>Количество: {count}</p>
      <button onClick={remove}>-</button>
    </div>
  );
};
