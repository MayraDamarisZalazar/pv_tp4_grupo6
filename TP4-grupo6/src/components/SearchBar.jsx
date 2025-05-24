import React from "react";

export default function SearchBar({ buscado, setBuscado, buscarPorId, setBuscarPorId }) {
  return (
    <div style={{ display:"flex" ,maxWidth: "90%", marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Buscar..."
        value={buscado}
        onChange={(e) => setBuscado(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 8 }}
      />
      <label style={{ display: "flex"}}> 
        <input
          type="checkbox"
          checked={buscarPorId}
          onChange={(e) => setBuscarPorId(e.target.checked)}
        />
        Buscar por ID
      </label>
    </div>
  );
}