import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Login />} />
      <Route path="sign-up" element={<Registration />} />
    </Route>
  </Routes>
);

export default App;
