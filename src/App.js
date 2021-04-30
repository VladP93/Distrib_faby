import { useState, useEffect } from "react";
import "./App.css";
import "primereact/resources/themes/nova/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Navbar from "./components/common/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

import NotFound from "./pages/NotFound";

function App() {
  const [page, setPage] = useState("home");
  const [refreshCart, setRefreshCart] = useState(false);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    setRefreshCart(false);
  }, [refreshCart, cartList]);

  const selectedPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "products":
        return (
          <Products
            cartList={cartList}
            setCartList={setCartList}
            setRefreshCart={setRefreshCart}
          />
        );
      case "about":
        return <About />;
      case "cart":
        return (
          <Cart
            cartList={cartList}
            setCartList={setCartList}
            setRefreshCart={setRefreshCart}
          />
        );
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      case "profile":
        return <NotFound />;
      case "account":
        return <NotFound />;
      case "history":
        return <NotFound />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="App">
      <Navbar page={page} setPage={setPage} cartList={cartList} />
      <div className="pages-container">{selectedPage()}</div>
      <div className="footer">
        <p>Distribuidora Faby &copy;</p>
      </div>
    </div>
  );
}

export default App;
