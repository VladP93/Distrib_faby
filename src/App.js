import { useState } from "react";
import "./App.css";
import "primereact/resources/themes/nova/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Navbar from "./components/common/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products";
import About from "./pages/About";

import NotFound from "./pages/NotFound";

function App() {
  const [page, setPage] = useState("home");

  console.log(page);

  const selectedPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "products":
        return <Products />;
      case "about":
        return <About />;
      case "cart":
        return <NotFound />;
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
      <Navbar page={page} setPage={setPage} />
      <div className="pages-container">{selectedPage()}</div>
      <div className="footer">
        <p>Distribuidora Faby &copy;</p>
      </div>
    </div>
  );
}

export default App;
