import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../thunks/categoriesThunk";

function Categories() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (status === "loading") {
    return <div className="container mt-5">Caricamento...</div>;
  }

  if (status === "failed") {
    return <div className="container mt-5">Errore: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <h1>Categorie</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Nome Categoria</th>
            <th scope="col">Azioni</th>
          </tr>
        </thead>
        <tbody>
          {items.map((category) => (
            <tr key={category.id}>
              <td>{category.category_name}</td>
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

export default Categories;
