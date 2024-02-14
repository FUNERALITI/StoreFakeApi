import ListProducts from "./components/allProducts/ListProducts";
import { Route, Routes } from "react-router-dom";
import { ProductDetail } from "./components/allProducts/ProductDetail";
import { ListBasket } from "./components/Basket/ListBasket";
import { AppHeader } from "./components/Layout/AppHeader/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="content-style">
        <Routes>
          <Route path="/" element={<ListProducts />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
      <ListBasket />
    </div>
  );
}

export default App;
