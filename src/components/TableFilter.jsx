import React, { useState, useEffect } from "react";

const TableFilter = ({ data, columns, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [applyFilter, setApplyFilter] = useState(false); // Stato per il pulsante

  // Gestisce il cambio del primo select
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    setSelectedValue(""); // Resetta il valore quando cambia il filtro
  };

  // Gestisce il cambio del secondo select
  const handleValueChange = (e) => {
    setSelectedValue(e.target.value);
  };

  // Gestisce il click sul pulsante Filtra
  const handleFilterClick = () => {
    setApplyFilter(true);
  };

  // Passa i filtri al genitore quando applyFilter è true
  useEffect(() => {
    if (applyFilter && onFilterChange) {
      onFilterChange({ filter: selectedFilter, value: selectedValue });
      setApplyFilter(false); // Resetta dopo aver applicato
    }
  }, [applyFilter, selectedFilter, selectedValue, onFilterChange]);

  // Estrae valori unici per il secondo select
  const getFilterValues = () => {
    if (!selectedFilter) return [];
    const values = data.map((item) =>
      selectedFilter === "categories"
        ? item[selectedFilter]?.join(", ") || "Nessuna Categoria"
        : item[selectedFilter]
    );
    return [...new Set(values.filter((v) => v !== undefined && v !== null))];
  };

  return (
    <div className="container mt-5">
      <div className="row g-3 mb-3">
        <div className="col-md-5">
          <select
            className="form-select"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option key="default" value="">
              Seleziona un filtro
            </option>
            {columns.map((element) => (
              <option key={element.key} value={element.key}>
                {element.label}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-5">
          <select
            className="form-select"
            value={selectedValue}
            onChange={handleValueChange}
          >
            <option key="default" value="">
              Seleziona un valore
            </option>
            {selectedFilter &&
              getFilterValues().map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
          </select>
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-primary w-100"
            onClick={handleFilterClick}
            disabled={!selectedFilter || !selectedValue} // Disabilita se non ci sono selezioni
          >
            Filtra
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableFilter;
