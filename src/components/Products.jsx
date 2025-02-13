import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../thunks/productsThunk";

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

  return (
    <div className="container mt-5">
      <h1>Prodotti</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Descrizione</th>
            <th scope="col">Prezzo</th>
            <th scope="col">Quantità</th>
            <th scope="col">Categorie</th>
            <th scope="col">Azioni</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price} €</td>
              <td>{product.available_quantity}</td>
              <td>
                {product.categories && product.categories.length > 0
                  ? product.categories.join(", ")
                  : "Nessuna Categoria"}
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

export default Products;
