import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import codegeneLogo from "../assets/images/light_logo.jpg";

const Header = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`codegene_navbar ${isSticky ? "isSticky" : ""}`}>
      <nav
        className="navbar navbar-expand-lg fixed-top px-0 px-lg-3 py-lg-3"
        aria-label="Offcanvas navbar large"
      >
        <div className="container-fluid justify-content-lg-between py-2 px-3 px-lg-5 py-lg-0">
          <Link className="navbar-brand logo" to="/">
            <img src={codegeneLogo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
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
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      isActive ? "nav-link" : "nav-link"
                    }
                  >
                    <span>About Us</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/jobs"
                    className={({ isActive }) =>
                      isActive ? "nav-link" : "nav-link"
                    }
                  >
                    <span>Jobs</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/whycodegene"
                    className={({ isActive }) =>
                      isActive ? "nav-link" : "nav-link"
                    }
                  >
                    <span>Why Codegene</span>
                  </NavLink>
                </li>
                <li className="nav-item dropdown header-dropdown dropdown-toggle d-flex align-items-center">
                  <NavLink
                    to="/community"
                    className={({ isActive }) =>
                      isActive ? "nav-link" : "nav-link"
                    }
                    data-bs-auto-close="outside"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Community
                  </NavLink>
                  <ul className="dropdown-menu codegene_community">
                    <li>
                      <Link className="dropdown-item">
                        <span>Codegene Talks</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">
                        <span>Codegene Community</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">
                        <span>Offline Meetups</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="mt-3 mt-lg-0 d-flex justify-content-center">
                <button
                  className="btn rounded-pill px-4 btn-lg cg_btn_gradient contact_us_btn"
                  onClick={() => navigate("/contactus")}
                >
                  Contact Us{" "}
                  <i className="ri-arrow-right-line align-middle contactus_icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
