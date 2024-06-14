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
      <div className="main-panel codegene_mail">
        <div className="content-wrapper container-fluid px-0 cg_services">
          <Outlet />
          <a
            href="mailto:info@codegene.io"
            className="button info w-button"
            data-w-id="bb72254c-2d37-9ec6-683b-41c1a0d6805d"
          >
            info@codegene.io
          </a>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
};

export default Layout;
