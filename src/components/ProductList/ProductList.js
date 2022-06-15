import React from "react";
import Product from "../Product/Product";
import {products} from "../../data"
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="pl">
      <h2>Product list</h2>
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link}></Product>
        ))}
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
