import { useParams } from "react-router-dom";
import { IProduct } from "../../models/model";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../../api/getSingleProduct";
import styled from "styled-components";

export const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const result = await getSingleProduct(parseInt(productId!));
        setProduct(result);
        console.log(result);
      } catch (error) {
        console.error("Ошибка при получении продуктов", error);
      }
    };

    fetchSingleProduct();
  }, [productId]);

  return (
    <div className="product-detail">
      <h1>Подробная информация о товаре</h1>
      <h2>{product?.title}</h2>
      <img src={product?.image} alt=""></img>
      <h3>{product?.description}</h3>
    </div>
  );
};

const Detail = styled.div``;