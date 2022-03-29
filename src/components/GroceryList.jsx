import React from "react";
import "./components.css";

const GroceryList = ({ title, id, handleDelete }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button className="btn" onClick={() => handleDelete(id)}>
        {" "}
        Delete
      </button>
    </div>
  );
};

export default GroceryList;
