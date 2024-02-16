import { Link } from "react-router-dom";
import { IProduct } from "../../models/model";

interface ProductProps {
  product: IProduct;
  addToCart: (element: IProduct) => void;
  // removeFromCart: (element: number) => void;
}

export const TestProduct = ({
  product,
  addToCart,
}: // removeFromCart,
ProductProps) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  // const handleRemoveFromCart = () => {
  //   removeFromCart(product.id);
  // };

  return (
    <div className="product">
      <button className="product-btn">
        <Link className="link" to={`/product/${product.id}`}>
          <div className="inside">
            <img className="image" src={product.image} alt="" />
            <p className="title">{product.title}</p>
            <p className="price">{product.price}$</p>
          </div>
        </Link>
        <button className="add-to-basket" onClick={handleAddToCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="25"
            fill="currentColor"
            className="bi bi-bag-plus"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
            />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
          <Link to={"/basket"}></Link>
        </button>
        {/* <button className="add-to-basket">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-calendar-x"
            viewBox="0 0 16 16"
          >
            <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          <Link to={"/basket"}></Link>
        </button> */}
      </button>
    </div>
  );
};
