import React from "react";
import Category_item from "./Category_item";
import { categories } from "./cetegories";
const Category = () => {
  return (
    <div className="container category-container">
        <div className="row g-3 row-cols-1 px-3 px-sm-0 row-cols-sm-2">
        {categories.map((item) => {
        return <Category_item key={item.id} item={item} />;
      })}
        </div>
     
    </div>
  );
};

export default Category;
