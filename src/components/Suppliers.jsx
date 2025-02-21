import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuppliers } from "../thunks/suppliersThunk";
import Table from "./Table";

function Suppliers() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.suppliers);

  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch]);

  if (status === "loading") {
    return <div className="container mt-5">Caricamento...</div>;
  }

  if (status === "failed") {
    return <div className="container mt-5">Errore: {error}</div>;
  }

  const title = "Fornitori";

  // Definizione delle colonne
  const columns = [
    { label: "Nome Fornitore", key: "supplier_name" },
    { label: "Indirizzo", key: "address" },
    { label: "Telefono", key: "phone" },
    { label: "email", key: "email" },
    {
      label: "Ordini",
      render: (item) =>
        item.orders && item.orders.length > 0
          ? item.orders.map((order) => order.id).join(", ")
          : "Nessun Ordine",
    },
  ];

  // Definizione delle azioni
  const actions = [
    {
      label: "Visualizza",
      icon: "eye",
      color: "primary",
      onClick: (item) => console.log("Visualizza", item),
    },
    {
      label: "Modifica",
      icon: "edit",
      color: "success",
      onClick: (item) => console.log("Modifica", item),
    },
    {
      label: "Elimina",
      icon: "trash",
      color: "danger",
      onClick: (item) => console.log("Elimina", item),
    },
  ];

  return <Table title={title} data={items} columns={columns}></Table>;
}

export default Suppliers;
