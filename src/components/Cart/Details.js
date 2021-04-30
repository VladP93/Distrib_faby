import React from "react";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Details(props) {
  const { cartList } = props;

  var resume = cartList;

  for (var i = 0; i < cartList.length; i++) {
    resume[i].producto = cartList[i].title + " " + cartList[i].subtitle;
    resume[i].cantidad = cartList[i].amount;
    resume[i].subtotal =
      "$" + (cartList[i].amount * cartList[i].price).toFixed(2);
  }

  const header = (
    <div>
      <br />
      <h3>Detalles de compra</h3>
      <hr style={{ maxWidth: "80%" }} />
    </div>
  );
  return (
    <div>
      <Card header={header}>
        <div style={{ textAlign: "justify" }}>
          {cartList.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <DataTable value={resume}>
              <Column field="producto" header="Producto"></Column>
              <Column field="cantidad" header="Cantidad"></Column>
              <Column field="subtotal" header="Subtotal"></Column>
            </DataTable>
          )}
        </div>
        <br />
        <br />
      </Card>
    </div>
  );
}
