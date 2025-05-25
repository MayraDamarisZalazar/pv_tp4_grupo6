import React, { useState, useMemo } from "react";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

export default function ProductList({ productos, onEdit, onDelete }) {
  const [buscado, setBuscado] = useState("");
  const [buscarPorId, setBuscarPorId] = useState(false);

  const productosFiltrados = useMemo(() => {
    const textoBusqueda = buscado.toLowerCase();

    return productos.filter((prod) => {
      if (buscarPorId) {
        // Buscamos por ID convertido a string
        return prod.id.toString().includes(textoBusqueda);
      } else {
        // Buscamos por título
        return prod.descripcion.toLowerCase().includes(textoBusqueda);
      }
    });
  }, [productos, buscado, buscarPorId]);

  if (productos.length === 0) return <p>No hay productos para mostrar.</p>;

  return (
    <>
      <SearchBar
        buscado={buscado}
        setBuscado={setBuscado}
        buscarPorId={buscarPorId}
        setBuscarPorId={setBuscarPorId}
      />

      <table className="product-table">
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
          {productosFiltrados.length === 0 ? (
            <tr>
              <td colSpan="8" style={{ textAlign: "center", padding: 16 }}>
                No se encontraron productos que coincidan con la búsqueda.
              </td>
            </tr>
          ) : (
            productosFiltrados.map((prod) => (
              <ProductItem
                key={prod.id}
                producto={prod}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

const thStyle = {
  textAlign: "left",
  padding: 8,
};
