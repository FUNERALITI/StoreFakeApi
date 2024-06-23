import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BasketState } from "../../store/slices/basketSlice";
import styled from "styled-components";
import { Hasinberg, CrossBasket } from "../../icons";
import { IProduct } from "../../models/model";
import { ProductsInBasket } from "./ProductsInBasket";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface GroupedProduct {
  product: IProduct;
  count: number;
}

export const InsideBasket: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const basket = useSelector((state: BasketState) => state.value);

  if (!isOpen) {
    return null;
  }

  const groupedProducts: GroupedProduct[] = basket.reduce(
    (acc: GroupedProduct[], product: IProduct) => {
      const existingProduct = acc.find((p) => p.product.id === product.id);
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        acc.push({ product, count: 1 });
      }
      return acc;
    },
    []
  );

  return (
    <div className={isOpen ? "mymodal active" : "mymodal"} onClick={onClose}>
      <div className="mymodal-content" onClick={(e) => e.stopPropagation()}>
        <Button className="closed-btn" variant="dark" onClick={onClose}>
          <CrossBasket />
        </Button>
        <div className="product-in-basket">
          {groupedProducts.length > 0 ? (
            groupedProducts.map((el, index) => (
              <ProductsInBasket
                key={index}
                element={el.product}
                count={el.count}
              />
            ))
          ) : (
            <>
              <WrapperClothes>
                <TextInside>Нет продуктов</TextInside>
              </WrapperClothes>
              <WrapperIcons>
                <Hasinberg />
              </WrapperIcons>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


const WrapperClothes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: red;
  height: 100px;
  width: 800px;
  margin-top: 15%;
  margin-left: 36%;
`;

const WrapperIcons = styled.div`
  margin-left: 45%;
  svg {
    height: 150px;
    width: 150px;
  }
`;

const TextInside = styled.div`
  font-size: 48px;
  line-height: 16px;
  font-weight: 800;
`;
