import React, { useState } from "react";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import Pagination from "./components/Pagination";
import data from "./db.json";

const App = () => {
  const [prodData, setProdData] = useState(data.products);
  return (
    <div>
      <AddProduct />
      <Products prodData={prodData} />
      <Pagination />
    </div>
  );
};

export default App;
