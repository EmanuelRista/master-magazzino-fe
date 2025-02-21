import React from "react";

const TableFilter = () => {
  return (
    <div className="row g-3 mb-3">
      <div className="col-md-6">
        <select className="form-select">
          <option value="">Seleziona un filtro</option>
          <option value="category">Categoria</option>
          <option value="status">Stato</option>
          <option value="price">Prezzo</option>
        </select>
      </div>

      <div className="col-md-6">
        <select className="form-select">
          <option value="">Seleziona un valore</option>
          <option value="1">Opzione 1</option>
          <option value="2">Opzione 2</option>
          <option value="3">Opzione 3</option>
        </select>
      </div>
    </div>
  );
};

export default TableFilter;
