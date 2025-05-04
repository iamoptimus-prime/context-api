import React, { useState } from "react";
import ProductsContext from "./ProductsContext";

const ProductsContextProvider = (props) => {
  const initialStateForProducts = {
    categories: [
      "Jackets & Coats",
      "Hoodies",
      "T-shirts & Vests",
      "Shirts",
      "Blazers & Suits",
      "Jeans",
      "Trousers",
      "Shorts",
      "Underwear",
    ],
    sortType: ["Recommended", "Size", "Price", "Name"],
    products: [
      {
        id: new Date().now,
        name: "Printed T-shirt",
        image:
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        price: 12.55,
      },
      {
        id: new Date().now,
        name: "Slub jersey T-shirt",
        image:
          "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80",
        price: 18.7,
      },
      {
        id: new Date().now,
        name: "T-shirt with a motif",
        image:
          "https://images.unsplash.com/photo-1603320409990-02d834987237?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 16.55,
      },
      {
        id: new Date().now,
        name: "Art T-shirt",
        image:
          "https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        price: 12.55,
      },
    ],
  };

  const [products, setProducts] = useState(initialStateForProducts);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
