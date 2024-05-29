import React from "react";
import { useNavigate } from "react-router-dom";
import IncludeGif from "../assets/images/gifs/2.gif";
import Employee1 from "../assets/images/users/1.jpg";
import Employee2 from "../assets/images/users/2.jpg";
import Employee3 from "../assets/images/users/3.jpg";
import Employee4 from "../assets/images/users/4.jpg";
import Employee5 from "../assets/images/users/5.jpg";
import Employee6 from "../assets/images/users/6.jpg";
import Employee7 from "../assets/images/users/7.jpg";

const CommonDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="common_section">
        <div className="row justify-content-evenly">
          <div className="col-xl-6">
            <div className="cg_employees">
              <figure className="employe1">
                <span>
                  <img src={Employee1} alt="img" />
                </span>
                <div className="employe_designation">
                  <p>UI Developer</p>
                  <p>Nousu</p>
                </div>
              </figure>
              <figure className="employe2">
                <span>
                  <img src={Employee5} alt="img" />
                </span>
                <div className="employe_designation">
                  <p>React Native TL</p>
                  <p>Sai Murari</p>
                </div>
              </figure>
              <figure className="employe3">
                <span>
                  <img src={Employee3} alt="img" />
                </span>
                <div className="employe_designation">
                  <p>Frontend Developer</p>
                  <p>Stany</p>
                </div>
              </figure>
              <figure className="employe4">
                <span>
                  <img src={Employee4} alt="img" />
                </span>
                <div className="employe_designation">
                  <p>Block chain</p>
                  <p>Tejashawini</p>
                </div>
              </figure>
              <figure className="employe5">
                <span>
                  <img src={Employee2} alt="img" />
                </span>
                <div className="employe_designation">
                  <p>UI Developer</p>
                  <p>Nousu</p>
                </div>
              </figure>
              <figure className="employe6">
                <span>
                  <img src={Employee6} alt="img" />
                </span>
                <div className="employe_designation">
                  <p>React Native</p>
                  <p>Gopinath</p>
                </div>
              </figure>
              <figure className="employe7">
                <span>
                  <img src={Employee7} alt="img" />
                </span>
                <div className="employe_designation">
                  <p>HR Management</p>
                  <p>Jyothika</p>
                </div>
              </figure>
            </div>
          </div>
          <div className="col-xl-4 my-auto">
            <h2>
              We grow, <br />
              when you grow
            </h2>
            <p className="fw-light my-3">
              There is something about human interaction that goes beyond just
              learning, it inspires you. That is why we invite exceptional
              figures over for conversation that sparks the fire.
            </p>
            <input
              name="text"
              type="text"
              placeholder="Email ID"
              className="form-control"
            />
            <button className="btn btn-primary mt-3 rounded-1 py-3 fs-20 px-3">
              Cotact US
            </button>
          </div>
        </div>
      </section>
      <section className="bg-light p-4 mb-5">
        <div className="row">
          <div className="col-xl-3 my-auto">
            <div>
              <button
                className="btn cg-bg-gradient btn-lg rounded-0 border-0 contact_us_btn"
                onClick={() => navigate("/jobs")}
              >
                Find your Goal
              </button>
            </div>
          </div>
          <div className="col-xl-7">
            <h2 className="fw-bold">Its #Include You</h2>
            <p className="mb-0 text-muted">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              nesciunt doloremque quae illo? Doloremque deleniti minima sint
              iure blanditiis eaque neque molestiae.
            </p>
          </div>
          <div className="col-xl-2">
            <img src={IncludeGif} alt="img" className="includes_image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonDetails;
