import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";

export default function ProductCard(props) {
  const {
    id,
    title,
    subtitle,
    price,
    description,
    image,
    cartList,
    setCartList,
    setRefreshCart,
  } = props;
  const [amount, setAmount] = useState(0);

  const header = (
    <img
      alt="Card"
      src={image}
      style={{ width: 100, height: 150, marginTop: 10 }}
      onError={(e) =>
        (e.target.src =
          "https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2Fimagenotfound.png?alt=media&token=accf29eb-c906-4e71-b7c8-1562cc4b50f7")
      }
    />
  );

  const Agregar = () => {
    var itemFound = false;
    for (var i = 0; i < cartList.length; i++) {
      if (id === cartList[i].id) {
        cartList[i].amount += amount;
        itemFound = true;
      }
    }
    if (!itemFound) {
      cartList.push({
        id,
        title,
        subtitle,
        price,
        description,
        image,
        amount,
      });
    }

    setCartList(cartList);
    setRefreshCart(true);
  };

  const footer = (
    <span>
      <Button
        label="Agregar"
        icon="pi pi-check"
        style={{ marginRight: 5 }}
        onClick={Agregar}
      />
      <Button
        label="Detalles"
        icon="pi pi-list"
        className="p-button-secondary p-ml-2"
        style={{ marginLeft: 5 }}
      />
    </span>
  );

  return (
    <div>
      <Card
        title={title}
        subTitle={subtitle + " $" + (Math.round(price * 100) / 100).toFixed(2)}
        style={{ width: "25em" }}
        footer={footer}
        header={header}
      >
        <p className="p-m-0" style={{ lineHeight: "1.5" }}>
          {description}
        </p>{" "}
        <br />
        <label>
          <b>Cantidad: </b>
        </label>
        <InputNumber
          value={amount}
          onValueChange={(e) => setAmount(e.value)}
          min={1}
          showButtons
        />
      </Card>
    </div>
  );
}
