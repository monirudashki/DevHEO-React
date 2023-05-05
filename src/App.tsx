import React from "react";
import "./App.css";

import { AuthProvider } from "./Contexts/AuthContext";
import { Header } from "Components/Core/Header/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "Components/Core/Home/HomeComponent/Home";
import Login from "Components/Auth/Login/LoginComponent/Login";
import Register from "Components/Auth/Register/RegisterComponent/Register";
import Footer from "Components/Core/Footer/FooterComponent/Footer";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
