import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const { hash } = useLocation() || "";

  useEffect(() => {
    // window.scrollTo(0, 0);
    if (hash) {
      console.log("hitt");
      const element = document.getElementById(hash.replace("#", ""));
      console.log(element, "fff");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        element.style.paddingTop = "100px";
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
  return (
    <footer>
      {/* <div className="row mx-sm-5 mx-2 footer-border pt-5 d-flex justify-content-between">
        <div className="col-md-3 col-sm-6 col-12">
          <Link className="footer-logo">
            <img src={FooterLogo} alt="Logo" />
          </Link>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <ul className="list-group ">
            {navItems.map((item, index) => (
              <li key={index} className="list-group-item">
                <NavLink to={item.path}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 col-12 mt-4 mt-md-0">
          <h6 className="fw-bold mb-0 mt-2 mb-2 main-info">Location</h6>
          <ul className="list-group">
            {addresses.map((address, index) => (
              <li className="list-group-item" key={index}>
                <Link className="fw-normal">
                  <i className="ri-map-pin-line text-muted align-middle"></i>{" "}
                  <span className="fs-12">{address.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 col-12 mt-4 mt-md-0">
          <h6 className="fw-bold mb-0 mt-3 mb-2 main-info">Contact</h6>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="mailto: info@codegene.io" className="fw-light">
                info@codegene.io
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="fw-light">+918883456785</Link>
            </li>
          </ul>
          <h6 className="fw-bold mb-0 mt-4 mb-2 main-info">Follow us on</h6>
          <div className="d-flex btn-list social_icons">
            {socialIcons.map((icon, index) => (
              <Link key={index} className="btn btn-sm btn-icon" to={icon.link}>
                <img src={icon.src} alt={icon.alt} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="mb-0 mt-4" /> */}
      <div className="py-3 bg-primary text-center px-3 px-sm-0">
        <div className="d-sm-flex btn-list social_icons justify-content-around align-items-center">
          <p className="mb-3 mb-sm-0 fw-medium">
            ©2024 Codegene.io All rights reserved
          </p>
          <div>
            <a
              href="https://www.facebook.com/people/Codegene-Software-Solutions/100075971750940/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ms-3 ri-facebook-box-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/codegene/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ms-3 ri-linkedin-box-fill"></i>
            </a>
            <a
              href="https://x.com/CodegeneS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ms-3 ri-twitter-x-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
