import { Routes, Route } from "react-router-dom";
import { MainAdmin, AdminSignIn, Products } from "./containers";
import { Header } from "./components";

export const Admin = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AdminSignIn />} />
        <Route path="/main-panel" element={<MainAdmin />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};
