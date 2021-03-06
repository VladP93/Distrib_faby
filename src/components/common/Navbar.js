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
      className: page === "cart" && "active",
      command: () => {
        setPage("cart");
      },
    },
    {
      label: "Mi perfil",
      icon: "pi pi-fw pi-user",
      //className:
      //  (page === "profile" || page === "history" || page === "account") &&
      //  "active",
      items: [
        {
          label: "Mi perfil",
          icon: "pi pi-fw pi-user",
          className: page === "profile" && "active",
          command: () => {
            setPage("profile");
          },
        },
        {
          label: "Cuenta",
          icon: "pi pi-fw pi-user-edit",
          className: page === "account" && "active",
          command: () => {
            setPage("account");
          },
        },
        {
          label: "Pedidos",
          icon: "pi pi-fw pi-clock",
          className: page === "history" && "active",
          command: () => {
            setPage("history");
          },
        },
      ],
    },
    {
      label: "Salir",
      icon: "pi pi-fw pi-power-off",
      className: "exit",
      command: () => {
        alert("Acá va a pasar una animación bien chiva para salir xD");
      },
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
