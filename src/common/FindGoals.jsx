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
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="bg-light px-2 px-lg-4 py-3 py-lg-0 mb-0 mt-5"
      >
        <motion.div
          // variants={fadeIn("right", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: true, amount: 0.7 }}
          className="row"
        >
          <div className="col-xl-3 col-lg-3 my-auto">
            <button
              className="btn cg_btn_gradient btn-lg mb-3 mb-lg-0 rounded-0 border-0 contact_us_btn"
              onClick={() => navigate("/contactus")}
            >
              Find your goal
            </button>
          </div>
          <div className="col-xl-7 col-lg-7 my-auto">
            <h2 className="fw-bold">Its #Include You</h2>
            <p className="mb-0 text-muted">
              Your success is our priority. With tailored solutions and
              unwavering support, we’re here to exceed your expectations and
              build a trust-based partnership. Let’s achieve greatness together.
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
