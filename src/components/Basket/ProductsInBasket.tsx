import { useDispatch } from "react-redux";
import { IProduct } from "../../models/model";
import { removeProductBasket } from "../../store/slices/basketSlice";

interface ProdBasket {
  element: IProduct;
}

export const ProductsInBasket = ({ element }: ProdBasket) => {
  // используем useDispatch, чтобы могли пользоваться методами для изменения стейта
  const dispatch = useDispatch();

  const remove = () => {
    // вызываем dispatch чтобы изменить стейт
    // внутрь прокидываем нужный нам метод, который существует в нашем слайсе (файл basketSlice.ts)
    dispatch(removeProductBasket(element.id));
  };
  return (
    <div>
      <img className="image-basket" src={element.image} alt="" />
      <p>{element.title}</p>
      <p>{element.price}</p>
      <button onClick={remove}>-</button>
    </div>
  );
};
