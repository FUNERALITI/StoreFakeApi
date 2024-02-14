import { IProduct } from "../../models/model";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  return (
    <div className="product">
      <div className="inside">
        <img className="image" src={product.image} alt="" />
        <p className="title">{product.title}</p>
        <p className="price">{product.price}$</p>
        <button className="product-btn">
          <Link className="link" to={`/product/${product.id}`}>
            Подробнее
          </Link>
        </button>
      </div>
    </div>
  );
}
