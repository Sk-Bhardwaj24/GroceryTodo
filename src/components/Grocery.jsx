import React from "react";
import { v4 as uuid } from "uuid";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";

const Grocery = () => {
  const [groceryData, setGroceryData] = React.useState([]);
  const handleAdd = (title) => {
    if (title === "") {
      alert("enter valid Grocery");
      return;
    }
    const payload = {
      title,
      id: uuid(),
    };
    setGroceryData([...groceryData, payload]);
  };
  const handleDelete = (id) => {
    const updatedgrocery = groceryData.filter((data) => data.id !== id);
    setGroceryData(updatedgrocery);
  };
  return (
    <div>
      <GroceryInput handleAdd={handleAdd} />
      {groceryData.map((data, id) => (
        <GroceryList {...data} key={id} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Grocery;
