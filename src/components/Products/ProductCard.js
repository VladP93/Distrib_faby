import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function ProductCard(props) {
  const { title, subtitle, description, image } = props;

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

  const footer = (
    <span>
      <Button label="Agregar" icon="pi pi-check" style={{ marginRight: 5 }} />
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
        subTitle={subtitle}
        style={{ width: "25em" }}
        footer={footer}
        header={header}
      >
        <p className="p-m-0" style={{ lineHeight: "1.5" }}>
          {description}
        </p>
        <label>Cantidad: </label>
        <input type="number" style={{ width: 50 }} defaultValue={1} />
      </Card>
    </div>
  );
}
