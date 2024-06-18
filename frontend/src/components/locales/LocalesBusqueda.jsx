import React from "react";

const LocalesBusqueda = ({ Nombre, setNombre, Buscar }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar local de Argentina por nombre"
        value={Nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button className="btn btn-warning" onClick={() => Buscar(Nombre)}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default LocalesBusqueda;
