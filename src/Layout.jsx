import React from "react";
import { motion, useScroll } from "framer-motion";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ScrollToTop from "./common/ScrollToTop";

const Layout = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar-scroll"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <div className="main-panel ">
        <div className="content-wrapper container-fluid px-0 cg_services">
          <Outlet />
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
};

export default Layout;
