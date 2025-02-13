import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../thunks/ordersThunk";

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

  return (
    <div className="container mt-5">
      <h1>Ordini</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Data Ordine</th>
            <th scope="col">Stato</th>
            <th scope="col">ID Fornitore</th>
            <th scope="col">Azioni</th>
          </tr>
        </thead>
        <tbody>
          {items.map((order) => (
            <tr key={order.id}>
              <td>{order.order_date}</td>
              <td>{order.order_status}</td>
              <td>{order.supplier_id}</td>
              <td>
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    title="Visualizza"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    title="Modifica"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    title="Elimina"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
