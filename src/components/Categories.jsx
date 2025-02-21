import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../thunks/categoriesThunk";
import Table from "./Table";

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
  const title = "Categorie";

  const columns = [{ label: "Nome categoria", key: "category_name" }];

  return <Table title={title} data={items} columns={columns}></Table>;
}

export default Categories;
