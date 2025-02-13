import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuppliers } from "../thunks/suppliersThunk";

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

  return (
    <div className="container mt-5">
      <h1>Fornitori</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Nome Fornitore</th>
            <th scope="col">Indirizzo</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
            <th scope="col">Ordini</th>
            <th scope="col">Azioni</th>
          </tr>
        </thead>
        <tbody>
          {items.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.supplier_name}</td>
              <td>{supplier.address}</td>
              <td>{supplier.phone}</td>
              <td>{supplier.email}</td>
              <td>
                <ul className="list-unstyled">
                  {supplier.orders.map((order) => (
                    <li key={order.id}>#{order.id}</li>
                  ))}
                </ul>
              </td>
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

export default Suppliers;
