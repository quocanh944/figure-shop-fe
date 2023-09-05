import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AuthenLayout from "../components/AuthenLayout";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Customer from "../pages/Customer";
import Brands from "../pages/Brands";
import ProductForm from "../form/ProductForm";
import Films from "../pages/Films";
import Login from "../pages/Login";
import EditProduct from "../form/EditProduct";
import CustomerDetail from "../pages/CustomerDetail";
import OrderDetail from "../pages/OrderDetail";

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthenLayout />}>
        <Route path="" element={<AppLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/order" element={<Orders />}></Route>
          <Route path="/order/:id" element={<OrderDetail />}></Route>
          <Route path="/product" element={<Products />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/customer/:id" element={<CustomerDetail />}></Route>
          <Route path="/brands" element={<Brands />}></Route>
          <Route path="/films" element={<Films />}></Route>
          <Route path="/add-product" element={<ProductForm />}></Route>
          <Route path="/edit-product/:id" element={<EditProduct />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Admin;