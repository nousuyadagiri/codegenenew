import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import codegeneLogo from "../assets/images/light_logo.jpg";
import { useMotionValueEvent, motion, useScroll } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  // const [isSticky, setIsSticky] = useState(false);
  const offcanvasRef = useRef(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNavLinkClick = (path) => {
    if (offcanvasRef.current) {
      offcanvasRef.current.classList.remove("show");
    }
    navigate(path);
  };

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duaration: 0.35, ease: "easeInOut" }}
      className="codegene_navbar position-sticky top-0"
    >
      <nav
        className="navbar navbar-expand-lg  px-0 px-lg-3 py-lg-3"
        aria-label="Offcanvas navbar large"
      >
        <div className="container-fluid justify-content-lg-between px-lg-5 py-lg-0">
          <Link className="navbar-brand logo" to="/">
            <img src={codegeneLogo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler px-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-ion">
              <i className="ri-menu-3-line fs-25"></i>
            </span>
          </button>
          <div
            ref={offcanvasRef}
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header">
              <Link className="navbar-brand logo" to="/">
                <img src={codegeneLogo} alt="logo" />
              </Link>
              <button
                type="button"
                className="btn-close btn-close-dark"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3 header-right">
                <li className="nav-item">
                  <NavLink
                    data-bs-dismiss="offcanvas"
                    to="/home"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={() => handleNavLinkClick("/home")}
                  >
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    data-bs-dismiss="offcanvas"
                    to="/aboutus"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={() => handleNavLinkClick("/aboutus")}
                  >
                    <span>About Us</span>
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    to="/jobs"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={() => handleNavLinkClick("/jobs")}
                  >
                    <span>Jobs</span>
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    data-bs-dismiss="offcanvas"
                    to="/whycodegene"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={() => handleNavLinkClick("/whycodegene")}
                  >
                    <span>Insights</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    data-bs-dismiss="offcanvas"
                    to="/services"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={() => handleNavLinkClick("/services")}
                  >
                    <span>Services</span>
                  </NavLink>
                </li>
              </ul>
              <div className="mt-3 mt-lg-0 d-flex justify-content-center">
                <button
                  className="btn rounded-pill px-4 btn-lg cg_btn_gradient contact_us_btn"
                  onClick={() => {
                    if (offcanvasRef.current) {
                      offcanvasRef.current.classList.remove("show");
                    }
                    navigate("/contactus");
                  }}
                >
                  Contact Us{" "}
                  <i className="ri-arrow-right-line align-middle contactus_icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Header;
