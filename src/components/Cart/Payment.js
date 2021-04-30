import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function Payment() {
  const header = (
    <div>
      <br />
      <h3>Opción de pago</h3>
      <hr style={{ maxWidth: "80%" }} />
    </div>
  );
  return (
    <div style={{ marginTop: 5 }}>
      <Card header={header}>
        Pago
        <br />
        <br />
        <Button
          label="Comprar ahora"
          icon="pi pi-money-bill"
          style={{ marginRight: 5 }}
          className="p-button-info p-ml-2"
        />
      </Card>
    </div>
  );
}
