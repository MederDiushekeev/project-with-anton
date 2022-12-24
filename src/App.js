import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddProduct } from "./components/AddProduct/AddProduct";
import ContactUs from "./components/ContactUs/ContactUs";
import EditProduct from "./components/EditProduct/EditProduct";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product" element={<EditProduct />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="*" element={<h1>NOT FOUND PAGE 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
