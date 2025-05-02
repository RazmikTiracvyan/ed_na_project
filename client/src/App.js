import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  Home,
  Contact,
  Shop,
  Product,
  SignIn,
  SignUp,
  BasketPage,
} from "./containers";

import { FilteredShop, Footer, Header, ScrolltoTop } from "./components";
import { Admin } from "./admin";

export const App = () => {
  const [isUser, setIsUser] = useState(null);
  const location = useLocation();

  const fetchUserProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsUser(null);
      return;
    }

    try {
      const { data, status } = await axios.get("http://localhost:3002/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (status === 200 && data) {
        data.basket?.forEach((item) => {
          if (!item.quantityToBuy) item.quantityToBuy = 1;
        });
        setIsUser(data);
      } else {
        localStorage.removeItem("token");
        setIsUser(null);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      localStorage.removeItem("token");
      setIsUser(null);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const isAdminRoute = location.pathname.includes("/admin-ed-na");

  return (
    <>
      {!isAdminRoute && <Header isUser={isUser} setIsUser={setIsUser} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:type" element={<Shop />} />
        <Route path="/product/:name" element={<Product isUser={isUser} />} />
        <Route path="/profile" element={<BasketPage setUser={setIsUser} isUser={isUser} />} />
        <Route path="/signin" element={<SignIn isUser={isUser} />} />
        <Route path="/signup" element={<SignUp isUser={isUser} />} />
        <Route path="/admin-ed-na/*" element={<Admin />} />
      </Routes>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <ScrolltoTop />}
    </>
  );
};
