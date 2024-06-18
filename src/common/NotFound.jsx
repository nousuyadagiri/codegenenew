import React from "react";
import errorImage from "../assets/images/error-image1.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className="text-center d-flex py-5 justify-content-center align-items-center error-page"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-auto">
            <h1 className="fw-bold fs-50 mb-3">404 ERROR</h1>
            <p className="fs-22 fw-medium text-white-75 mb-5 lh-1">
              We can't seem to find a page <br /> you are looking for
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="btn rounded-0 px-4 btn-lg cg_btn_gradient contact_us_btn"
                onClick={() => navigate("/")}
              >
                <i className="ri-arrow-left-s-line align-middle"></i> Go Back
              </button>
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <img src={errorImage} alt="img" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
