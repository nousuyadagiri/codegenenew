import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useNavigate, Link } from "react-router-dom";
import aboutImage1 from "../assets/images/gifs/Developer3.gif";
// import gifImage1 from "../assets/images/gifs/3.gif";
// import gifImage2 from "../assets/images/gifs/4.gif";
// import gifImage3 from "../assets/images/gifs/5.gif";
import Employees from "../common/Employees";
import FindGoals from "../common/FindGoals";

const Jobs = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <section className="main_banner">
          <div className="row">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-6 my-auto"
            >
              <h1 className="fs-49 my-3">
                Don’t bring a chair, we’ll find you the right one!
              </h1>
              <p className="mb-0 text-muted fs-16 banner_info_text">
                At the end of the day, we are all code-slingers; we find passion
                in undoing the bothersome logical problems and find a problem
                that you love to get involved with. We believe that you must
                spend your talent and effort with the right set of people that
                can bring the best out of you. So, why don’t you come over and
                we’ll find a chair for you.
              </p>
              <button
                className="btn cg_btn_gradient btn-lg rounded-0 border-0 contact_us_btn mt-4"
                onClick={() => navigate("/applyform")}
              >
                Apply Now{" "}
                <i className="bi bi-arrow-up-right-circle-fill fs-20"></i>
              </button>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-6 text-end"
            >
              <img src={aboutImage1} alt="img" className="animated_gif" />
            </motion.div>
          </div>
        </section>
        {/* <section>
          <h3 className="fs-25 fw-bold text-center mb-5">
            How do you get started?
          </h3>
          <div className="row get_started">
            <div className="col-xl-4">
              <div className="text-center small_bg">
                <img src={gifImage1} alt="img" className="small_gifs" />
                <h4 className="my-4 fw-semibold">Apply</h4>
                <p className="text-muted">
                  There’s always a piece of code waiting to be written, so send
                  in your profile right away
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="text-center small_bg">
                <img src={gifImage2} alt="img" className="small_gifs" />
                <h4 className="my-4 fw-semibold">Interview</h4>
                <p className="text-muted">
                  We’ll line you up with opportunities that fit your profile and
                  experience
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="text-center small_bg">
                <img src={gifImage3} alt="img" className="small_gifs" />
                <h4 className="my-4 fw-semibold">Join</h4>
                <p className="text-muted">
                  That’s it, you’re all set and you can dive right in!
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <section>
          <motion.h5
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="fw-bold text-center mb-5 fs-25"
          >
            Current Openings
          </motion.h5>
          <div className="row justify-content-evenly px-3">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-3 col-sm-6 current_openings fancy"
            >
              <Link>
                <span className="top-key"></span>
                <span className="text">NodeJs Developer</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-3 col-sm-6 current_openings fancy"
            >
              <Link>
                <span className="top-key"></span>
                <span className="text">Frontend Developer</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-3 col-sm-6 current_openings fancy"
            >
              <Link>
                <span className="top-key"></span>
                <span className="text">Python Developer</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </Link>
            </motion.div>
          </div>
          <div className="row justify-content-evenly px-3">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-3 col-sm-6 current_openings fancy"
            >
              <Link>
                <span className="top-key"></span>
                <span className="text">NextJS Developer</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-3 col-sm-6 current_openings fancy"
            >
              <Link>
                <span className="top-key"></span>
                <span className="text">UI Developer</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-3 col-sm-6 current_openings fancy"
            >
              <Link>
                <span className="top-key"></span>
                <span className="text">Backend Developer</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </Link>
            </motion.div>
          </div>
        </section>
        <section className="jobs_section">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="row justify-content-evenly"
          >
            <div className="col-lg-5">
              <button
                className="btn cg_btn_gradient btn-lg rounded-0 border-0 contact_us_btn mb-4 mb-lg-0"
                onClick={() => navigate("/aboutus")}
              >
                See our work culture{" "}
                <i className="bi bi-arrow-up-right-circle-fill fs-20"></i>
              </button>
            </div>
            <div className="col-lg-5 ">
              <h4>Hire great people and give them freedom to be awesome..</h4>
              <p className="text-muted text-end ">
                Pawan Rebba, CTO @TopJuan Tech Inc || Founder & CEO @ Codegene
                Technologies Pvt Ltd || Fintech,Techlover &Blockchain Enthusiast
              </p>
            </div>
          </motion.div>
        </section>
      </div>
      <div className="py-5 text-center apply_form_section mb-5">
        <motion.h4
          variants={fadeIn("down", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="fw-bold "
        >
          Getting excited!
        </motion.h4>
        <motion.p
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="mb-0 fw-semibold text-muted"
        >
          Please fill out{" "}
          <Link className="text-primary" onClick={() => navigate("/applyform")}>
            this form
          </Link>
          , and we will get back to you.
        </motion.p>
      </div>
      <div className="container">
        <Employees />
        <FindGoals />
      </div>
    </>
  );
};

export default Jobs;
