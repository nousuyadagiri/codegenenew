import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useNavigate, Link } from "react-router-dom";
import ServiceImage1 from "../assets/images/gifs/10.gif";
import ServiceImage2 from "../assets/images/9.png";
import ServiceImage3 from "../assets/images/gifs/11.gif";
import ServiceImage4 from "../assets/images/gifs/12.gif";
import ServiceImage5 from "../assets/images/gifs/13.gif";
import techImage1 from "../assets/images/technologies/blockchain.png";
import techImage2 from "../assets/images/technologies/python.png";
import techImage3 from "../assets/images/technologies/nodejs.png";
import techImage4 from "../assets/images/technologies/reactjs.png";
import techImage5 from "../assets/images/technologies/reactnative.png";
import techImage6 from "../assets/images/technologies/redux.png";
import techImage7 from "../assets/images/technologies/mongodb.png";
import techImage8 from "../assets/images/technologies/redis.png";
import techImage9 from "../assets/images/technologies/amazon.png";
import techImage10 from "../assets/images/technologies/java.png";
import techImage11 from "../assets/images/technologies/bullmq.png";
import Employees from "../common/Employees";
import FindGoals from "../common/FindGoals";

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-center mb-5 pt-5"
        >
          <motion.h1
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            Design, <span className="fw-light">Development</span>, Security
          </motion.h1>
          <motion.p
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="text-muted"
          >
            Explore our digital services, Lets boost your online presence
            together !
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="d-flex flex-wrap align-items-center gap-3 justify-content-center"
          >
            <button
              className="btn btn-outline-primary btn-lg rounded-0"
              onClick={() => navigate("/jobs")}
            >
              Work With Us
            </button>
            <button
              className="btn btn-primary btn-lg rounded-0 border-0 contact_us_btn"
              onClick={() => navigate("/applyform")}
            >
              Get Started
              <i className="bi bi-arrow-up-right-circle-fill fs-20"></i>
            </button>
          </motion.div>
        </motion.div>

        <section className="pt-5">
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="fw-medium fs-18 mb-0"
          >
            Our Services <i className="ri-arrow-right-line align-middle"></i>
          </motion.p>
          <div className="row ">
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-6 my-auto"
            >
              <h3 className="fw-bold my-3">Find Your Best Services here</h3>
              <p className="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid, perferendis. Debitis natus voluptates cumque officiis.
                Sit sint non assumenda quod maxime laboriosam voluptatum!
                Repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Odit quo aliquam ipsa dolor, id, adipisci natus quibusdam
                quam odio accusantium suscipit, eveniet optio.
              </p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
                laudantium quaerat. Sapiente officiis beatae minima.
              </p>

              <img src={ServiceImage2} alt="img" className="animated_gif" />
            </motion.div>
            <motion.div
              // variants={fadeIn("up", 0.5)}
              // initial="hidden"
              // whileInView={"show"}
              // viewport={{ once: true, amount: 0.7 }}
              className="col-xl-6"
            >
              <div className="row">
                <div className="col-xl-6 col-sm-6 col-md-6">
                  <div className="card small_bg2">
                    <div className="card-body">
                      <img
                        src={ServiceImage1}
                        alt="img"
                        className="small_gifs"
                      />
                      <h6 className="fw-bold mt-3">Web Security</h6>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis necessitatibus perferendis voluptatum
                        voluptatem cum odit aspernatur. Accusantium,
                      </p>

                      <button className="Btn float-end">
                        <div className="sign">
                          <Link className="text-primary" to="#!">
                            <i className="ri-arrow-right-circle-fill align-middle text-white fs-18 lh-1"></i>
                          </Link>
                        </div>

                        <div className="text">View more</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6 col-md-6">
                  <div className="card small_bg2 mt-5">
                    <div className="card-body">
                      <img
                        src={ServiceImage5}
                        alt="img"
                        className="small_gifs"
                      />
                      <h6 className="fw-bold mt-3">Development & Coding</h6>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis necessitatibus perferendis voluptatum
                        voluptatem cum odit aspernatur. Accusantium,
                      </p>
                      <button className="Btn float-end">
                        <div className="sign">
                          <Link className="text-primary" to="#!">
                            <i className="ri-arrow-right-circle-fill align-middle text-white fs-18 lh-1"></i>
                          </Link>
                        </div>

                        <div className="text">View more</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6 col-md-6">
                  <div className="card small_bg2">
                    <div className="card-body">
                      <img
                        src={ServiceImage3}
                        alt="img"
                        className="small_gifs"
                      />
                      <h6 className="fw-bold mt-3">Support</h6>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis necessitatibus perferendis voluptatum
                        voluptatem cum odit aspernatur. Accusantium,
                      </p>
                      <button className="Btn float-end">
                        <div className="sign">
                          <Link className="text-primary" to="#!">
                            <i className="ri-arrow-right-circle-fill align-middle text-white fs-18 lh-1"></i>
                          </Link>
                        </div>

                        <div className="text">View more</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6 col-md-6">
                  <div className="card small_bg2 mt-5">
                    <div className="card-body">
                      <img
                        src={ServiceImage4}
                        alt="img"
                        className="small_gifs"
                      />
                      <h6 className="fw-bold mt-3">Deployment & Production</h6>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis necessitatibus perferendis voluptatum
                        voluptatem cum odit aspernatur. Accusantium,
                      </p>
                      <button className="Btn float-end">
                        <div className="sign">
                          <Link className="text-primary" to="#!">
                            <i className="ri-arrow-right-circle-fill align-middle text-white fs-18 lh-1"></i>
                          </Link>
                        </div>

                        <div className="text">View more</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="tech_img mb-0">
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="fw-bold text-center mb-1"
          >
            Our Technologies
          </motion.h3>
          <motion.h6
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="text-muted text-center mb-5"
          >
            Technologies We Used To Develop Applications.
          </motion.h6>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="row py-4"
          >
            <motion.div
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-3 col-md-4 col-sm-6 col-6"
            >
              <div className="techimage">
                <img src={techImage1} alt="techimage" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-3 col-md-4 col-sm-6 col-6"
            >
              <div className="techimage">
                <img src={techImage2} alt="techimage" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-3 col-md-4 col-sm-6 col-6"
            >
              <div className="techimage">
                <img src={techImage3} alt="techimage" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-3 col-md-4 col-sm-6 col-6"
            >
              <div className="techimage">
                <img src={techImage4} alt="techimage" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-3 col-md-4 col-sm-6 col-6"
            >
              <div className="techimage">
                <img src={techImage5} alt="techimage" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-3 col-md-4 col-sm-6 col-6"
            >
              <div className="techimage">
                <img src={techImage6} alt="techimage" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-3 col-md-4 col-sm-6 col-6"
            >
              <div className="techimage">
                <img src={techImage7} alt="techimage" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-3 col-md-4 col-sm-6 col-6"
            >
              <div className="techimage">
                <img src={techImage8} alt="techimage" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-3 col-md-4 col-sm-6 col-6"
            >
              <div className="techimage">
                <img src={techImage9} alt="techimage" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-3 col-md-4 col-sm-6 col-6"
            >
              <div className="techimage">
                <img src={techImage10} alt="techimage" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-3 col-md-4 col-sm-6 col-6"
            >
              <div className="techimage">
                <img src={techImage11} alt="techimage" />
              </div>
            </motion.div>
          </motion.div>
        </section>
        <>
          <Employees />
          <FindGoals />
        </>
      </div>
    </>
  );
};

export default Services;
