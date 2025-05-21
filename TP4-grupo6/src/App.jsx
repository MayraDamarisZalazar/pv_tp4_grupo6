import React, { useState, useCallback } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

export default function App() {
  const [productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);

  // Agregar producto
  const agregarProducto = useCallback((producto) => {
    setProductos((prev) => [
      ...prev,
      { ...producto, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
    ]);
    setProductoEditando(null);
  }, []);

  // Editar producto
  const editarProducto = useCallback((productoActualizado) => {
    setProductos((prev) =>
      prev.map((p) => (p.id === productoActualizado.id ? productoActualizado : p))
    );
    setProductoEditando(null);
  }, []);

  // Seleccionar producto para edición
  const seleccionarProducto = useCallback((producto) => {
    setProductoEditando(producto);
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <ProductForm
        onAddProduct={productoEditando ? editarProducto : agregarProducto}
        productoEditando={productoEditando}
      />
      <ProductList productos={productos} onEdit={seleccionarProducto} />
    </div>
  );
}
