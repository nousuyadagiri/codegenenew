import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ScrollToTop from "./common/ScrollToTop";
import CommonDetails from "./common/commonDetails";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="main-panel">
        <div className="content-wrapper container">
          <Outlet />
        </div>
        <div className="container">
          <CommonDetails />
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
};

export default Layout;
