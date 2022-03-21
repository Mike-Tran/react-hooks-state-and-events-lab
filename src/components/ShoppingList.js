import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const shoppingListFilterHandler = (e) => {
    setSelectedCategory(e.target.value)
  }

  // const renderFilteredList = (item) => {
  //   if (selectedCategory === item.category || selectedCategory === "All") {
  //     return <Item key={item.id} name={item.name} category={item.category} />
  //   } else {
  //     return null
  //   }
  // }  
  
  const renderFilteredList = items.filter((item) => {
    if (selectedCategory === "All") return true;
    
    return selectedCategory === item.category;
  }); 

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={shoppingListFilterHandler}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {renderFilteredList.map((item) => 
          <Item key={item.id} name={item.name} category={item.category} />
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
