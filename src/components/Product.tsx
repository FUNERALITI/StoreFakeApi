import { IProduct } from "../models/model"

interface ProductProps {
  product: IProduct
}

export function Product ({product}: ProductProps) {
  return (
    <div className="product">
      <div className="inside">
        <img className='image' src={product.image} alt=""/>
        <p className="title">{product.title}</p>
        <p className='price'>{product.price}$</p>
      </div>
    </div>
  )
  
}