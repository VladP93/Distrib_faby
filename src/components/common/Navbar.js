import React from "react";
import { Menubar } from "primereact/menubar";
import Logo from "../../assets/logo192.png";

import "./Navbar.css";

export default function Navbar(props) {
  const { page, setPage } = props;

  const items = [
    {
      label: "Inicio",
      icon: "pi pi-fw pi-home",
      className: page === "home" && "active",
      command: () => {
        setPage("home");
      },
    },
    {
      label: "Productos",
      icon: "pi pi-fw pi-tags",
      className: page === "products" && "active",
      command: () => {
        setPage("products");
      },
    },
    {
      label: "Acerca de",
      icon: "pi pi-question-circle",
      className: page === "about" && "active",
      command: () => {
        setPage("about");
      },
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
  return (
    <Menubar
      className="menubar"
      model={items}
      start={<img src={Logo} alt="Logo" style={{ height: 50, width: 80 }} />}
    />
  );
}
