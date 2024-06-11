import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import gifImage1 from "../assets/images/gifs/7.gif";
import gifImage2 from "../assets/images/gifs/8.gif";
import gifImage3 from "../assets/images/gifs/9.gif";
import Employees from "../common/Employees";
import FindGoals from "../common/FindGoals";

const WhyCodegene = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="why_Codegene">
        <div className="memories d-flex">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="row m-auto"
          >
            <div className="col-xl-12">
              <motion.h1
                variants={fadeIn("right", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="text-white lh-2 fs-50"
              >
                Helping developers realize their <br /> maximum potential since
                2019
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="container">
        <section className="peopel_priority">
          <motion.h3
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="fs-25 fw-bold text-center "
          >
            What makes us different?
          </motion.h3>
          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="text-muted mb-5 text-center"
          >
            Our people are our top priority
          </motion.p>
          <div className="row">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-4 mt-auto"
            >
              <div className="text-center small_bg">
                <img src={gifImage1} alt="img" className="small_gifs" />
                <h4 className="my-4 fw-semibold">Work With the Best</h4>
                <p className="text-muted">
                  Get to work with the best engineering teams at fast-growing
                  startups around the world.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-4 mt-auto"
            >
              <div className="text-center small_bg">
                <img src={gifImage3} alt="img" className="small_gifs" />
                <h4 className="my-4 fw-semibold">
                  Employee Wellbeing Comes First
                </h4>
                <p className="text-muted">
                  what-makes-us-different Employee Wellbeing Comes First Our
                  flexible leave policy and wellness coaches (by YourDOST)
                  ensure you are the best version of yourself.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-4 mt-auto"
            >
              <div className="text-center small_bg">
                <img src={gifImage2} alt="img" className="small_gifs" />
                <h4 className="my-4 fw-semibold">Keep Challenging Yourself</h4>
                <p className="text-muted">
                  We provide tailor-made exposure based on your skills and their
                  needs
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="jobs_section">
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="row justify-content-evenly"
          >
            <div className="col-xl-5">
              <button
                className="btn cg_btn_gradient btn-lg rounded-0 border-0 contact_us_btn mt-3"
                onClick={() => navigate("/jobs")}
              >
                Work with us
                <i className="bi bi-arrow-up-right-circle-fill fs-20"></i>
              </button>
            </div>
            <div className="col-xl-5 ">
              <h4>
                We’re always on the lookout for amazing Developers like you.
              </h4>
            </div>
          </motion.div>
        </section>
      </div>
      <section className="bg-primary py-5 profile_details">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="row justify-content-evenly"
        >
          <div className="col-xl-3">
            <div className="text-center">
              <div className="mb-2">
                <i className="bi bi-card-heading fs-50"></i>
              </div>
              <CountUp start={0} end={100} delay={0} duration={10}>
                {({ countUpRef }) => (
                  <div className="fs-49 fw-semibold mb-1">
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
              <p className="mb-0 fs-20 ">Our Total Projects</p>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="text-center">
              <div className="mb-2">
                <i className="bi bi-person-check-fill fs-50"></i>
              </div>
              <CountUp start={0} end={80} delay={0} duration={10}>
                {({ countUpRef }) => (
                  <div className="fs-49 fw-semibold mb-1">
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
              <p className="mb-0 fs-20 ">Satisfied Clients</p>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="text-center">
              <div className="mb-2">
                <i className="bi bi-people-fill fs-50"></i>
              </div>
              <CountUp start={0} end={140} delay={0} duration={10}>
                {({ countUpRef }) => (
                  <div className="fs-49 fw-semibold mb-1">
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
              <p className="mb-0 fs-20 ">Our Team Members</p>
            </div>
          </div>
        </motion.div>
      </section>
      <div className="container">
        <Employees />
        <FindGoals />
      </div>
    </>
  );
};

export default WhyCodegene;
