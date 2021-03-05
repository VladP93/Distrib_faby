import { useState } from "react";
import "./App.css";
import "primereact/resources/themes/nova/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Navbar from "./components/common/Navbar";
import Home from "./pages/Home/Home";
import Productos from "./pages/Productos";

import NotFound from "./pages/NotFound";

function App() {
  const [page, setPage] = useState("home");

  const selectedPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "products":
        return <Productos />;
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
