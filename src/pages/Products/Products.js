import React from "react";
import "./Products.css";
import "primeflex/primeflex.css";

import Header from "../../components/common/Header";
import ProductCard from "../../components/Products/ProductCard";

export default function Productos() {
  return (
    <div>
      <Header text="Productos" />
      <div className="cards-container">
        <div className="p-grid">
          <div className="p-col">
            <ProductCard
              title="Foco LED"
              subtitle="28 Watts"
              description="Foco ahorrativo de 28w de potencia"
              image="https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F4.jfif?alt=media&token=d70f695d-7cc0-4e24-93de-e6c9220f7e44"
            />
          </div>
          <div className="p-col">
            <ProductCard
              title="Foco LED"
              subtitle="38 Watts"
              description="Foco ahorrativo de 38w de potencia"
              image="https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F5.jfif?alt=media&token=17bb7557-725e-4835-b975-7a861ae17a21"
            />
          </div>
          <div className="p-col">
            <ProductCard
              title="Foco LED"
              subtitle="18 Watts"
              description="Foco ahorrativo de 18w de potencia"
              image="https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F7.jfif?alt=media&token=09547146-78b5-440d-8191-1bde70653b0e"
            />
          </div>
          <div className="p-col">
            <ProductCard
              title="Foco LED"
              subtitle="9 Watts"
              description="Foco ahorrativo de 9w de potencia"
              image="https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F9.jfif?alt=media&token=c16c0423-7ea2-4f23-af6b-da35d743564c"
            />
          </div>
          <div className="p-col">
            <ProductCard
              title="Cargador USB"
              subtitle="Con pantalla LCD"
              description="Cargador USB universal con pantalla LCD "
              image="https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F11.jfif?alt=media&token=d1d21226-ceb4-4b8b-93dc-edb3da2e4e37"
            />
          </div>
          <div className="p-col">
            <ProductCard
              title="Raqueta"
              subtitle="Matamosquitos"
              description="Raqueta electrica para matar mosquitos"
              image="https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F15.jfif?alt=media&token=5b5149ac-5b8f-4a28-bcff-2afc06e1a087"
            />
          </div>
          <div className="p-col">
            <ProductCard
              title="Linterna"
              subtitle="LED"
              description="Linterna LED (Duracion de hasta 20 horas)"
              image="https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F18.jfif?alt=media&token=8b20d127-a81a-4e5e-9e10-72c119a291c0"
            />
          </div>
          <div className="p-col">
            <ProductCard
              title="Bombillo"
              subtitle="LED 5w"
              description="Bombillo LED Finder de 5w"
              image="https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F19.jfif?alt=media&token=064ab3f3-3f61-4961-a129-9def4d1bf1bb"
            />
          </div>
          <div className="p-col">
            <ProductCard
              title="Manos libres"
              subtitle="Con micrófono"
              description="Audifonos de diferentes colores con micrófono incluido"
              image="https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F23.jfif?alt=media&token=191b7fcb-3b18-4ee6-9dbb-aef58c02bcba"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
