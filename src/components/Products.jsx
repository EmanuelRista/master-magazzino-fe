import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../thunks/productsThunk";
import Table from "./Table";
import TableFilter from "./TableFilter";

function Products() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <div className="container mt-5">Caricamento...</div>;
  }

  if (status === "failed") {
    return <div className="container mt-5">Errore: {error}</div>;
  }

  const title = "Prodotti";

  // Definizione delle colonne
  const columns = [
    { label: "Nome", key: "name" },
    { label: "Descrizione", key: "description" },
    { label: "Prezzo", render: (item) => `${item.price} €` },
    { label: "Quantità", key: "available_quantity" },
    {
      label: "Categorie",
      render: (item) =>
        item.categories && item.categories.length > 0
          ? item.categories.join(", ")
          : "Nessuna Categoria",
    },
  ];

  return (
    <React.Fragment>
      <TableFilter></TableFilter>
      <Table title={title} data={items} columns={columns} />
    </React.Fragment>
  );
}

export default Products;
