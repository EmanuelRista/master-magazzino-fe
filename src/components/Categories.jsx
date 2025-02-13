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
      <ul>
        {items.map((category, index) => (
          <li key={category.id}>
            <h3>{category.category_name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
