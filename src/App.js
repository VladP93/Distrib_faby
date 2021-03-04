import "./App.css";
import { Menubar } from "primereact/menubar";
import "primereact/resources/themes/nova/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Logo from "./assets/logo192.png";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Menubar
        className="menubar"
        model={items}
        start={<img src={Logo} alt="Logo" style={{ height: 50, width: 80 }} />}
      />
      <div className="pages-container">
        <Home />
      </div>
      <div className="footer">
        <p>Distribuidora Faby &copy;</p>
      </div>
    </div>
  );
}

const items = [
  {
    label: "Inicio",
    icon: "pi pi-fw pi-home",
  },
  {
    label: "Productos",
    icon: "pi pi-fw pi-tags",
  },
  {
    label: "Acerca de",
    icon: "pi pi-question-circle",
  },
  {
    label: "Carrito",
    icon: "pi pi-fw pi-shopping-cart",
  },
  {
    label: "Mi perfil",
    icon: "pi pi-fw pi-user",
    items: [
      {
        label: "Cuenta",
        icon: "pi pi-fw pi-user-edit",
      },
      {
        label: "Pedidos",
        icon: "pi pi-fw pi-clock",
      },
    ],
  },
  {
    label: "Salir",
    icon: "pi pi-fw pi-power-off",
  },
];

export default App;
