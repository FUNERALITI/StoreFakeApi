import ListProducts from "./components/allProducts/ListProducts";
import { Route, Routes } from "react-router-dom";
import { ProductDetail } from "./components/allProducts/ProductDetail";
import { BtnBasket } from "./components/Basket/BtnBasket";
import { AppHeader } from "./components/Layout/AppHeader/AppHeader";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
        <div className="content-style">
          <Routes>
            <Route path="/" element={<ListProducts />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </div>
        <BtnBasket />
      </div>
    </Provider>
  );
}

export default App;
