import React from "react";
import "./MainLayout.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="container-fluid m-0 p-0">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
