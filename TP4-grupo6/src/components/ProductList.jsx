import React from "react";

export default function ProductList({ productos, onEdit }) {
  if (productos.length === 0) return <p>No hay productos para mostrar.</p>;

  const calcularPrecioConDescuento = (precio, descuento) => {
    return (precio - (precio * descuento) / 100).toFixed(2);
  };

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
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
          <tr key={prod.id} style={{ borderBottom: "1px solid #ccc" }}>
            <td style={tdStyle}>{prod.id}</td>
            <td style={tdStyle}>{prod.titulo}</td>
            <td style={tdStyle}>{prod.descripcion}</td>
            <td style={tdStyle}>${prod.precio.toFixed(2)}</td>
            <td style={tdStyle}>{prod.descuento}%</td>
            <td style={tdStyle}>
              ${calcularPrecioConDescuento(prod.precio, prod.descuento)}
            </td>
            <td style={tdStyle}>{prod.stock}</td>
            <td style={tdStyle}>
              <button onClick={() => onEdit(prod)} style={btnEditStyle}>
                Editar
              </button>
              <button style={btnDeleteStyle} disabled>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const thStyle = {
  textAlign: "left",
  padding: 8,
};

const tdStyle = {
  padding: 8,
};

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
