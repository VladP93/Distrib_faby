import React from "react";
import "primeflex/primeflex.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function CartItem(props) {
  const {
    id,
    title,
    subtitle,
    description,
    image,
    amount,
    price,
    cartList,
    setCartList,
    setRefreshCart,
  } = props;

  const Eliminar = () => {
    var tempCartList = [];
    for (var i = 0; i < cartList.length; i++) {
      if (cartList[i].id !== id) {
        tempCartList.push(cartList[i]);
      }
    }
    setCartList(tempCartList);
    setRefreshCart(true);
  };

  return (
    <div>
      <Card>
        <div className="p-grid">
          <div className="p-col-3">
            <img
              alt="Card"
              src={image}
              style={{ width: 80, height: 120, marginTop: 10 }}
              onError={(e) =>
                (e.target.src =
                  "https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2Fimagenotfound.png?alt=media&token=accf29eb-c906-4e71-b7c8-1562cc4b50f7")
              }
            />
          </div>
          <div className="p-col-6">
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <p>{description}</p>
            <p>
              Cantidad: <b>{amount}</b> Precio Unit: <b>${price.toFixed(2)}</b>{" "}
              Subtotal: <b>${(amount * price).toFixed(2)}</b>
            </p>
          </div>
          <div className="p-col-3" style={{ marginTop: 0 }}>
            <Button
              label="Eliminar"
              icon="pi pi-trash"
              style={{ marginRight: 5 }}
              onClick={Eliminar}
              className="p-button-danger p-ml-2"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
