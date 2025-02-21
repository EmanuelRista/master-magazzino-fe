import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../thunks/productsThunk";
import Table from "./Table";
import TableFilter from "./TableFilter";

function Products() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredData(items);
  }, [items]);

  if (status === "loading") {
    return <div className="container mt-5">Caricamento...</div>;
  }

  if (status === "failed") {
    return <div className="container mt-5">Errore: {error}</div>;
  }

  const title = "Prodotti";

  const columns = [
    { label: "Nome", key: "name" },
    { label: "Descrizione", key: "description" },
    { label: "Prezzo", key: "price", render: (item) => `${item.price} €` },
    { label: "Quantità", key: "available_quantity" },
    {
      label: "Categorie",
      key: "categories",
      render: (item) =>
        item.categories && item.categories.length > 0
          ? item.categories.join(", ")
          : "Nessuna Categoria",
    },
  ];

  const handleFilterChange = ({ filter, value }) => {
    if (!filter || !value) {
      setFilteredData(items);
      return;
    }

    const filtered = items.filter((item) => {
      if (filter === "categories") {
        return (
          item[filter]?.join(", ") === value ||
          (value === "Nessuna Categoria" &&
            (!item[filter] || item[filter].length === 0))
        );
      }
      return String(item[filter]) === String(value);
    });

    setFilteredData(filtered);
  };

  return (
    <React.Fragment>
      <TableFilter
        data={items}
        columns={columns}
        onFilterChange={handleFilterChange}
      />
      <Table title={title} data={filteredData} columns={columns} />
    </React.Fragment>
  );
}

export default Products;
