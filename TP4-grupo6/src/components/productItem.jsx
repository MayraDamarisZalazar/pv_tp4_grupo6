// src/components/ProductItem.jsx
import React from "react";

export default function ProductItem({ producto, onEdit, onDelete }) {
  const calcularPrecioConDescuento = (precio, descuento) => {
    return (precio - (precio * descuento) / 100).toFixed(2);
  };

  return (
    <tr style={{ borderBottom: "1px solid #ccc" }}>
      <td>{producto.id}</td>
      <td>{producto.titulo}</td>
      <td>{producto.descripcion}</td>
      <td>${producto.precio.toFixed(2)}</td>
      <td>{producto.descuento}%</td>
      <td>${calcularPrecioConDescuento(producto.precio, producto.descuento)}</td>
      <td>{producto.stock}</td>
      <td>
        <button onClick={() => onEdit(producto)} style={btnEditStyle}>Editar</button>
        <button onClick={() => onDelete(producto.id)} style={btnDeleteStyle}>Eliminar</button>
      </td>
    </tr>
  );
}

const btnEditStyle = {
  marginRight: 10,
  padding: "5px 10px",
  backgroundColor: "#4caf50",
  color: "white",
  border: "none",
  borderRadius: 3,
  cursor: "pointer",
};

const btnDeleteStyle = {
  padding: "5px 10px",
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  borderRadius: 3,
  opacity: 0.6,
};
