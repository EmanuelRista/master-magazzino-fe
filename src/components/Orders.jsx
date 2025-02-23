import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../thunks/ordersThunk";
import Table from "./Table";

function Orders() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (status === "loading") {
    return <div className="container mt-5">Caricamento...</div>;
  }

  if (status === "failed") {
    return <div className="container mt-5">Errore: {error}</div>;
  }

  const title = "Ordini";

  // Definizione delle colonne
  const columns = [
    { label: "Data Ordine", key: "order_date" },
    { label: "Stato", key: "order_status" },
    { label: "ID Fornitore", key: "supplier_id" },
  ];

  return <Table title={title} data={items} columns={columns}></Table>;
}

export default Orders;
