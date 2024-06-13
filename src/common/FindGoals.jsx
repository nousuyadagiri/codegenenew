import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useNavigate } from "react-router-dom";
import IncludeGif from "../assets/images/gifs/2.gif";

const FindGoals = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.section
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="bg-light px-2 px-lg-4 py-3 py-lg-0 mb-0 mt-5"
      >
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="row"
        >
          <div className="col-xl-3 col-lg-3 my-auto">
            <button
              className="btn cg_btn_gradient btn-lg mb-3 mb-lg-0 rounded-0 border-0 contact_us_btn"
              onClick={() => navigate("/contactus")}
            >
              Find your Goal
            </button>
          </div>
          <div className="col-xl-7 col-lg-7 my-auto">
            <h2 className="fw-bold">Its #Include You</h2>
            <p className="mb-0 text-muted">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              nesciunt doloremque quae illo? Doloremque deleniti minima sint
              iure blanditiis eaque neque molestiae.
            </p>
          </div>
          <div className="col-xl-2 col-lg-2 my-auto">
            <img src={IncludeGif} alt="img" className="includes_image" />
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default FindGoals;
