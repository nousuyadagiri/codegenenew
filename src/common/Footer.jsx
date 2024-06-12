import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
// import FooterLogo from "../assets/images/mobile_light_logo.png";
import Linkedin from "../assets/images/gifs/Linkedin.gif";
import YouTube from "../assets/images/gifs/Youtube.gif";
import FaceBook from "../assets/images/gifs/Facebook.gif";
import Twitter from "../assets/images/gifs/Twitter.gif";
const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // const navItems = [
  //   { path: "/", label: "Home" },
  //   { path: "/aboutus", label: "About Us" },
  //   { path: "/jobs", label: "Jobs" },
  //   { path: "/whycodegene", label: "Why Codegene" },
  //   { path: "/contactus", label: "Contactus" },
  //   { path: "/services", label: "Services" },
  //   { path: "/privacy", label: "Privacy" },
  //   { path: "/terms", label: "Terms and Conditons" },
  // ];
  // const socialIcons = [
  //   { src: FaceBook, alt: "Facebook", link: "https://www.facebook.com" },
  //   { src: Twitter, alt: "Twitter", link: "https://www.twitter.com" },
  //   {
  //     src: Linkedin,
  //     alt: "LinkedIn",
  //     link: "https://www.linkedin.com/company/codegene/mycompany/",
  //   },
  //   { src: YouTube, alt: "YouTube", link: "https://www.youtube.com" },
  // ];
  // const addresses = [
  //   {
  //     text: "Room 411, 4th Floor, First Intramuros BF Condominium Corp., Aduana St, Intramuros, Manila, Philippines, 1002",
  //   },
  //   {
  //     text: "Reg: (EN:37-2050121), 30N GOULD ST, STE R , SHERIDAN , Wyoming, United States -82801",
  //   },
  //   {
  //     text: "Main Road, Currency Nagar, Vijayawada, Andhra Pradesh, India -520008",
  //   },
  //   {
  //     text: "DivyaSree Solitaire, 15, Inorbit Mall Rd, Madhapur, Hyderabad, Telangana 500081",
  //   },
  // ];
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
        <div className="d-flex btn-list social_icons justify-content-around align-items-center">
          <p className="mb-0 fw-medium">
            ©2024 Codegene.io, All rights reserved
          </p>
          <div>
            <Link>
              <i class="ms-3 ri-facebook-box-fill"></i>
            </Link>
            <Link>
              <i class="ms-3 ri-linkedin-box-fill"></i>
            </Link>
            <Link>
              <i class="ms-3 ri-youtube-fill"></i>
            </Link>
            <Link>
              <i class="ms-3 ri-twitter-x-fill"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
