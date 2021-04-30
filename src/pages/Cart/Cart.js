import React from "react";
import "primeflex/primeflex.css";
import Header from "../../components/common/Header";
import CartItem from "../../components/Cart/CartItem";
import Details from "../../components/Cart/Details";
import Payment from "../../components/Cart/Payment";

import "./Cart.css";

export default function Cart(props) {
  const { cartList, setCartList, setRefreshCart } = props;

  return (
    <div className="cart-container">
      <Header text="Carrito de compras" />
      <div className="p-grid">
        <div className="p-md-8 p-sm-12">
          {cartList.length === 0 ? (
            <h2>No hay elementos en el carrito</h2>
          ) : (
            cartList.map((c) => {
              return (
                <div className="p-col" key={c.id}>
                  <CartItem
                    id={c.id}
                    title={c.title}
                    amount={c.amount}
                    subtitle={c.subtitle}
                    price={c.price}
                    description={c.description}
                    image={c.image}
                    cartList={cartList}
                    setCartList={setCartList}
                    setRefreshCart={setRefreshCart}
                  />
                </div>
              );
            })
          )}
        </div>
        <div className=" p-md-4 p-sm-12">
          <Details cartList={cartList} />
          <Payment />
        </div>
      </div>
    </div>
  );
}
