import React from "react";
import "./Products.css";
import "primeflex/primeflex.css";

import Header from "../../components/common/Header";
import ProductCard from "../../components/Products/ProductCard";

export default function Productos(props) {
  const { cartList, setCartList, setRefreshCart } = props;

  return (
    <div>
      <Header text="Productos" />
      <div className="cards-container">
        <div className="p-grid">
          {productos.map((p) => {
            return (
              <div className="p-col" key={p.id}>
                <ProductCard
                  id={p.id}
                  title={p.title}
                  subtitle={p.subtitle}
                  price={p.price}
                  description={p.description}
                  image={p.image}
                  cartList={cartList}
                  setCartList={setCartList}
                  setRefreshCart={setRefreshCart}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const productos = [
  {
    id: 1,
    title: "Foco LED",
    subtitle: "28 Watts",
    price: 2.0,
    description: "Foco ahorrativo de 28w de potencia",
    image:
      "https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F4.jfif?alt=media&token=d70f695d-7cc0-4e24-93de-e6c9220f7e44",
  },
  {
    id: 2,
    title: "Foco LED",
    subtitle: "38 Watts",
    price: 3.5,
    description: "Foco ahorrativo de 38w de potencia",
    image:
      "https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F5.jfif?alt=media&token=17bb7557-725e-4835-b975-7a861ae17a21",
  },
  {
    id: 3,
    title: "Foco LED",
    subtitle: "18 Watts",
    price: 1.5,
    description: "Foco ahorrativo de 18w de potencia",
    image:
      "https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F7.jfif?alt=media&token=09547146-78b5-440d-8191-1bde70653b0e",
  },
  {
    id: 4,
    title: "Foco LED",
    subtitle: "9 Watts",
    price: 1.25,
    description: "Foco ahorrativo de 9w de potencia",
    image:
      "https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F9.jfif?alt=media&token=c16c0423-7ea2-4f23-af6b-da35d743564c",
  },
  {
    id: 5,
    title: "Cargador USB",
    subtitle: "Con pantalla LCD",
    price: 5,
    description: "Cargador USB universal con pantalla LCD ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F11.jfif?alt=media&token=d1d21226-ceb4-4b8b-93dc-edb3da2e4e37",
  },
  {
    id: 6,
    title: "Raqueta",
    subtitle: "Matamosquitos",
    price: 6,
    description: "Raqueta electrica para matar mosquitos",
    image:
      "https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F15.jfif?alt=media&token=5b5149ac-5b8f-4a28-bcff-2afc06e1a087",
  },
  {
    id: 7,
    title: "Linterna",
    subtitle: "LED",
    price: 2.5,
    description: "Linterna LED (Duracion de hasta 20 horas)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F18.jfif?alt=media&token=8b20d127-a81a-4e5e-9e10-72c119a291c0",
  },
  {
    id: 8,
    title: "Bombillo",
    subtitle: "LED 5w",
    price: 1,
    description: "Bombillo LED Finder de 5w",
    image:
      "https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F19.jfif?alt=media&token=064ab3f3-3f61-4961-a129-9def4d1bf1bb",
  },
  {
    id: 9,
    title: "Manos libres",
    subtitle: "Con micrófono",
    price: 3,
    description: "Audifonos de diferentes colores con micrófono incluido",
    image:
      "https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F23.jfif?alt=media&token=191b7fcb-3b18-4ee6-9dbb-aef58c02bcba",
  },
];
