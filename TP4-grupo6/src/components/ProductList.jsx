import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ productos, onEdit, onDelete }) {
  if (productos.length === 0) return <p>No hay productos para mostrar.</p>;

  return (
    <table className="product-table" /*style={{ width: "100%", borderCollapse: "collapse" }}*/>
      <thead>
        <tr style={{ backgroundColor: "#eee" }}>
          <th style={thStyle}>ID</th>
          <th style={thStyle}>Título</th>
          <th style={thStyle}>Descripción</th>
          <th style={thStyle}>Precio</th>
          <th style={thStyle}>Descuento</th>
          <th style={thStyle}>Precio Final</th>
          <th style={thStyle}>Stock</th>
          <th style={thStyle}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((prod) => (
          <ProductItem
            key={prod.id}
            producto={prod}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

const thStyle = {
  textAlign: "left",
  padding: 8,
};
