import React from "react";
import { motion, useScroll } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ScrollToTop from "./common/ScrollToTop";

const Layout = () => {
  // const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 6000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* {loading && <LoaderComponent />} */}
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
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
