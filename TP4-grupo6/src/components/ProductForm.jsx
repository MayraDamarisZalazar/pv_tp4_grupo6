import React, { useState, useEffect } from "react";

export default function ProductForm({ onAddProduct, productoEditando, cancelarEdicion }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [descuento, setDescuento] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    if (productoEditando) {
      setTitulo(productoEditando.titulo || "");
      setDescripcion(productoEditando.descripcion || "");
      setPrecio(productoEditando.precio?.toString() || "");
      setDescuento(productoEditando.descuento?.toString() || "");
      setStock(productoEditando.stock?.toString() || "");
    } else {
      setTitulo("");
      setDescripcion("");
      setPrecio("");
      setDescuento("");
      setStock("");
      console.log("Limpiando formulario");
    }
    
  }, [productoEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo.trim() || !descripcion.trim() || !precio || !stock) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    const precioNum = parseFloat(precio);
    const descuentoNum = parseFloat(descuento) || 0;
    const stockNum = parseInt(stock);

    if (isNaN(precioNum) || precioNum < 0 || isNaN(stockNum) || stockNum < 0) {
      alert("Precio o stock inválido.");
      return;
    }

    const producto = {
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      precio: precioNum,
      descuento: descuentoNum,
      stock: stockNum,
    };

    if (productoEditando) {
      producto.id = productoEditando.id;
    }

    onAddProduct(producto);

    setTitulo("");
    setDescripcion("");
    setPrecio("");
    setDescuento("");
    setStock("");

  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>{productoEditando ? "Editar Producto" : "Agregar Producto"}</h2>

      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        /*style={{ width: "100%", padding: 8, marginBottom: 10 }}*/
        className="form-input"
      />

      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        /*style={{ width: "100%", padding: 8, marginBottom: 10 }}*/
        className="form-input"
      />

      <input
        type="number"
        placeholder="Precio Unitario"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        /*style={{ width: "100%", padding: 8, marginBottom: 10 }}*/
        step="0.01"
        min="0"
        className="form-input"
      />

      <input
        type="number"
        placeholder="Descuento (%)"
        value={descuento}
        onChange={(e) => setDescuento(e.target.value)}
        /*style={{ width: "100%", padding: 8, marginBottom: 10 }}*/
        step="0.01"
        min="0"
        className="form-input"
      />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        /*style={{ width: "100%", padding: 8, marginBottom: 10 }}*/
        min="0"
        className="form-input"
      />

      <button type="submit" className="submit" /*style={{ padding: 10, marginRight: 10 }}*/>
        {productoEditando ? "Guardar Cambios" : "Agregar Producto"}
      </button>
    </form>
  );
}
