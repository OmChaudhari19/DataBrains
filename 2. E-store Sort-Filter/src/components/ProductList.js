import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products: products, gridView } = useFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry No Products for your Search
      </h5>
    );
  }
  if (gridView) return <GridView products={products} />;
  return <ListView products={products} />;
};

export default ProductList;
