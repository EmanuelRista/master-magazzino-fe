import React from "react";

function Table({ title, data, columns, actions }) {
  return (
    <div className="container mt-5">
      <h1>{title}</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} scope="col">
                {col.label}
              </th>
            ))}
            {actions && <th scope="col">Azioni</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  {col.render ? col.render(item) : item[col.key] || "N/D"}
                </td>
              ))}
              {actions && (
                <td>
                  <div className="btn-group" role="group">
                    {actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        type="button"
                        className={`btn btn-outline-${action.color} btn-sm`}
                        title={action.label}
                        onClick={() => action.onClick(item)}
                      >
                        <i className={`fas fa-${action.icon}`}></i>
                      </button>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
