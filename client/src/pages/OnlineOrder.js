import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const OnlineOrder = () => {
  return (
    <div className="container" id="OnlineOrder">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default OnlineOrder;
