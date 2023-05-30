import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "../Category/index";
import Header from "../Header/index";
import { useEffect } from "react";

export default function MainPage() {

    const categories = useSelector(state => state.products.categories)
  return (
    <div>
      <Header />
      {categories.map((category) => (
        <div key={categories.indexOf(category)}>
          {<Category category={category} />}
        </div>
      ))}
    </div>
  );
}
