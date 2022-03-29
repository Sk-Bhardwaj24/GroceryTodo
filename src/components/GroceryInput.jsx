import React from "react";
import "./components.css";

const GroceryInput = ({ handleAdd }) => {
  const [title, setTitle] = React.useState("");
  const handlechange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <input
        className="inp"
        value={title}
        onChange={(e) => handlechange(e)}
        placeholder="Enter Grocery"
      />
      <br />
      <br />
      <button
        className="btn"
        onClick={() => {
          handleAdd(title);
          setTitle(" ");
        }}
      >
        Enter
      </button>
    </div>
  );
};

export default GroceryInput;
