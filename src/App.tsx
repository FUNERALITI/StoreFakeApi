import { useState } from "react";
import { getProducts } from "./api/getItems";
import { Product } from "./components/Product";
import { IProduct } from "./models/model";
import BrowserRout from "./components/BrowserRoute";

function App() {
  const [products, setProducts ] = useState<IProduct[]>([])

  // TODO посмотреть почему постоянно вызывается эта функция (useEffect мб пофиксиьт)
  getProducts().then((result) => {
    setProducts(result);
  });
  
  return (
    <div className="App">
      <BrowserRout/>
      {
      products.length > 0 ? (
        products.map((el) => {
          return (
            <Product product={el} />
          )
        }
        )
      ) : (
        <span>Нет продуктов</span>
      )
      }
    </div>
  );
}

export default App;
