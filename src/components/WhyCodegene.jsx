import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn } from "../variants";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import gifImage1 from "../assets/images/gifs/4.gif";
import gifImage2 from "../assets/images/gifs/8.gif";
import gifImage3 from "../assets/images/gifs/9.gif";
import Employees from "../common/Employees";
import FindGoals from "../common/FindGoals";

const WhyCodegene = () => {
  const navigate = useNavigate();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <>
      <section className="why_Codegene">
        <div className="memories d-flex">
          <motion.div
            // variants={fadeIn("up", 0.2)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: true, amount: 0.7 }}
            className="row m-auto"
          >
            <div className="col-xl-12">
              <motion.h1
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="text-white lh-2 banner-text text-start text-lg-center"
              >
                Helping Developers Achieve <br /> Excellence Since 2018
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
            What sets us apart?
          </motion.h3>
          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="text-muted mb-5 text-center"
          >
            Our team members are our greatest asset.
          </motion.p>
          <div className="row">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-md-4 mt-0 mt-lg-5"
            >
              <div className="text-center mb-5 mb-md-0">
                <div className="small_bg">
                  <img src={gifImage1} alt="img" className="small_gifs" />
                </div>
                <h4 className="mt-4 mb-2 fw-semibold">
                  Collaborate with Top Talent{" "}
                </h4>
                <p className="text-muted">
                  Work alongside the best engineering teams at rapidly growing
                  startups worldwide.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-md-4"
            >
              <div className="text-center mb-5 mb-md-0">
                <div className="small_bg">
                  <img src={gifImage3} alt="img" className="small_gifs" />
                </div>
                <h4 className="mt-4 mb-2 fw-semibold">
                  Prioritizing Employee Wellness
                </h4>
                <p className="text-muted">
                  Our wellness-first approach includes a flexible leave policy
                  ensure you thrive.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-md-4 mt-0 mt-lg-5"
            >
              <div className="text-center mb-5 mb-md-0">
                <div className="small_bg">
                  <img src={gifImage2} alt="img" className="small_gifs" />
                </div>
                <h4 className="mt-4 mb-2 fw-semibold">
                  Challenge Ourself Continuously{" "}
                </h4>
                <p className="text-muted">
                  We offer customized opportunities tailored to your skills and
                  the needs of our projects.
                </p>
              </div>
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
                onClick={() => navigate("/contactus")}
              >
                Work with us
                <i className="bi bi-arrow-up-right-circle-fill fs-20"></i>
              </button>
            </div>
            <div className="col-lg-5 ">
              <h4>
                We’re always on the lookout for amazing developers like you.
              </h4>
            </div>
          </motion.div>
        </section>
      </div>
      <motion.section
        className="bg-primary py-5 profile_details"
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        ref={ref}
      >
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="row justify-content-evenly gap-3"
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
              <p className="mb-0">Our Total Projects</p>
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
              <p className="mb-0">Satisfied Clients</p>
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
              <p className="mb-0">Our Team Members</p>
            </div>
          </div>
        </motion.div>
      </motion.section>
      <div className="container">
        {/* <Employees /> */}
        <FindGoals />
      </div>
    </>
  );
};

export default WhyCodegene;
