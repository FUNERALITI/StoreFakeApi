import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BasketState } from "../../store/slices/basketSlice";
import { ProductsInBasket } from "./ProductsInBasket";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InsideBasket: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  // Получаем данные корзины из нашего стора
  const basket = useSelector((state: BasketState) => state.value);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={isOpen ? "mymodal active" : "mymodal"} onClick={onClose}>
      <div className="mymodal-content" onClick={(e) => e.stopPropagation()}>
        <Button className="closed-btn" variant="dark" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </Button>
        <div className="product-in-basket">
          {basket.length > 0 ? (
            basket.map((el) => {
              return <ProductsInBasket element={el} />;
            })
          ) : (
            <span>Нет продуктов</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsideBasket;
