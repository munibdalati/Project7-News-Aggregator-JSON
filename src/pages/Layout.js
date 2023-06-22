import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Sports from "./Sports";
import Category from "./Category";
import Test from "./Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/sports" Component={Sports} />
        <Route path="/details" Component={Details} />
        <Route path="/signIn" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/:type" Component={Category} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
