import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import aboutImage1 from "../assets/images/4.png";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "../../node_modules/swiper/swiper.css";
import "../../node_modules/swiper/modules/navigation.css";
import "../../node_modules/swiper/modules/pagination.css";
import "../../node_modules/swiper/modules/scrollbar.css";
import Employee1 from "../assets/images/user-image.jpg";
import LinkedinImage from "../assets/images/linkedin.png";
import aboutImage2 from "../assets/images/1.jpg";
import Employees from "../common/Employees";
import FindGoals from "../common/FindGoals";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <section className="hero-heading-center">
        <div className="container py-5">
          <div className="hero-wrapper-2">
            <div className="hero-split-2">
              <h1 className=" margin-bottom-32px fs-49">
                Empowering people to realise their true potential
              </h1>
              <p className="margin-bottom-24px-2">
                The work culture is evolving, but we still spend a good amount
                of time with our jobs. The question really is that if you are in
                the right place that helps you grow as a professional. We exist
                to empower people to realise their true potential and find the
                right opportunity and team that will inspire you.
              </p>
              <a href="#" className="btn btn-lg cg_btn_gradient rounded-0">
                Start for free
              </a>
            </div>
            <div className="hero-split-2"></div>
            <div
              className="spline-scene"
              data-w-id="5f807120-ead5-f929-e79e-281d3d0e8454"
              data-animation-type="spline"
              data-spline-url="https://prod.spline.design/4vNY-RXmBR4dLqx1/scene.splinecode"
            >
              <canvas></canvas>
            </div>
          </div>
        </div>
      </section> */}
      <div className="container">
        <section className="main_banner">
          <div className="row">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-6 col-12 col-sm-12 my-auto"
            >
              <h1 className="fs-44 mb-3 mt-5">
                Empowering Individuals and Businesses with Innovative Software
                Solutions
              </h1>
              <p className="mb-0 text-muted fs-16 banner_info_text">
                In a world where work culture is rapidly evolving, finding the
                right environment to thrive professionally is paramount. At
                CodeGene.io, we’re not just about creating software - we’re
                about empowering individuals and businesses alike to realize
                their true potential.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-6 col-12 col-sm-12 text-end"
            >
              <img src={aboutImage1} alt="img" className="animated_gif" />
            </motion.div>
          </div>
        </section>

        <section className="bg-light p-4">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="row justify-content-evenly"
          >
            <div className="col-lg-2 my-auto text-center">
              <h2 className="text-primary fw-bold">Our Story</h2>
            </div>
            <div className="col-lg-7">
              <h3>Empowering Talent, Unleashing Opportunities</h3>
              <p className="text-muted">
                At CodeGene.io, we’re on a transformative journey. Our mission?
                Empowering top talent to effortlessly navigate towards
                high-growth organizations. We’re the premier gateway to a
                diverse array of opportunities, from nascent startups to
                industry-leading unicorns. But we’re more than just a
                platform—we’re a catalyst for professional growth, fostering
                both technical expertise and cultural fluency. As we expand,
                efficiency and productivity are our guiding lights, propelling
                us to pioneer cutting-edge software solutions. Join us as we
                rewrite the rules of talent acquisition and shape the future of
                organizational success.
              </p>
            </div>
          </motion.div>
        </section>
        <section className="core_values">
          <motion.h3
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="fs-25 fw-bold text-center mb-5"
          >
            Core Values
          </motion.h3>
          <div className="row">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-5 col-sm-6 col-12"
            >
              <div className="card shadow-none border card_shadow ">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <div>
                      <i className="bi bi-lightning-fill fs-25 text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="fw-medium">Passion & purpose</h5>
                      <p className="text-muted">
                        Passion isn’t just a spark; it’s the roaring flame that
                        ignites purpose and drives us forward. We’re fueled by
                        an unyielding dedication to harnessing the power of
                        technology to conquer complex challenges and create
                        meaningful impact. Our journey is defined by an
                        insatiable hunger for innovation and a profound sense of
                        purpose, propelling individuals and businesses worldwide
                        towards bound
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-5 col-sm-6 col-12"
            >
              <div className="card shadow-none border">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <div>
                      <i className="bi bi-signpost-2-fill fs-25 text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="fw-medium">Adaptability</h5>
                      <p className="text-muted">
                        adaptability is not just a philosophy; it’s a way of
                        life. We thrive in the face of change, leveraging it as
                        a catalyst for innovation and growth. Through agile
                        methodologies, continuous learning, and flexible
                        solutions, we empower our team to navigate complex
                        challenges with ease.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-5 col-sm-6 col-12 ms-auto"
            >
              <div className="card shadow-none border">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <div>
                      <i className="bi bi-flag-fill fs-25 text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="fw-medium">Learning & experimentation</h5>
                      <p className="text-muted">
                        We believe in the power of perpetual growth. Our culture
                        fosters curiosity and embraces experimentation as
                        essential catalysts for innovation. Through continuous
                        education and hands-on exploration, we equip our team
                        with the tools and knowledge needed to stay ahead in a
                        dynamic digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-5 col-sm-6 col-12"
            >
              <div className="card shadow-none border">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <div>
                      <i className="bi bi-people-fill fs-25 text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="fw-medium">Customer Success</h5>
                      <p className="text-muted">
                        Customer success is more than just a goal; it’s our
                        driving force. We are deeply committed to the success
                        and satisfaction of our clients, understanding that
                        their triumphs are the true measure of our own success.
                        With a customer-centric approach ingrained in our
                        culture, we go above and beyond to anticipate and
                        fulfill the needs of our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="our_team">
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="fs-25 text-center fw-bold mb-0"
          >
            Our Team
          </motion.h3>
          <Swiper
            className="pt-5 pb-4"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 2,
              },
              639: {
                slidesPerView: 3,
              },
              865: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
            spaceBetween={15}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="card shadow-none mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      src={Employee1}
                      alt="img"
                      width="60"
                      height="60"
                      className="rounded-circle object-fit-cover"
                    />
                    <p className="mb-0 team_details ms-4">
                      {" "}
                      <span className="employe_name">
                        Sai Murari
                      </span> &nbsp; <span className="designation">TL</span>
                      &nbsp;&nbsp;
                      <Link
                        to="https://www.linkedin.com/in/v-n-sai-kumar-murari-30a33619b/"
                        target="_blank"
                      >
                        <img
                          src={LinkedinImage}
                          alt="img"
                          width="18"
                          height="18"
                          className="object-fit-cover"
                        />
                      </Link>
                    </p>
                  </div>
                  <p className="mt-3 text-muted textHightlight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni quasi, modi nostrum, nihil voluptatem laudantium illum
                    tempora sunt id, pariatur aut suscipit qui.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card shadow-none mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      src={Employee1}
                      alt="img"
                      width="60"
                      height="60"
                      className="rounded-circle object-fit-cover"
                    />
                    <p className="mb-0 team_details ms-4">
                      {" "}
                      <span className="employe_name">Sai RamaKrsihna</span>{" "}
                      &nbsp; <span className="designation">TL</span>
                      &nbsp;&nbsp;
                      <Link
                        to="https://www.linkedin.com/in/v-n-sai-kumar-murari-30a33619b/"
                        target="_blank"
                      >
                        <img
                          src={LinkedinImage}
                          alt="img"
                          width="18"
                          height="18"
                          className="object-fit-cover"
                        />
                      </Link>
                    </p>
                  </div>
                  <p className="mt-3 text-muted textHightlight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni quasi, modi nostrum, nihil voluptatem laudantium illum
                    tempora sunt id, pariatur aut suscipit qui.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card shadow-none mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      src={Employee1}
                      alt="img"
                      width="60"
                      height="60"
                      className="rounded-circle object-fit-cover"
                    />
                    <p className="mb-0 team_details ms-4">
                      {" "}
                      <span className="employe_name">Sravani</span> &nbsp;{" "}
                      <span className="designation">TL</span>&nbsp;&nbsp;
                      <Link
                        to="https://www.linkedin.com/in/v-n-sai-kumar-murari-30a33619b/"
                        target="_blank"
                      >
                        <img
                          src={LinkedinImage}
                          alt="img"
                          width="18"
                          height="18"
                          className="object-fit-cover"
                        />
                      </Link>
                    </p>
                  </div>
                  <p className="mt-3 text-muted textHightlight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni quasi, modi nostrum, nihil voluptatem laudantium illum
                    tempora sunt id, pariatur aut suscipit qui.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card shadow-none mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      src={Employee1}
                      alt="img"
                      width="60"
                      height="60"
                      className="rounded-circle object-fit-cover"
                    />
                    <p className="mb-0 team_details ms-4">
                      {" "}
                      <span className="employe_name">Raghava</span> &nbsp;{" "}
                      <span className="designation">TL</span>&nbsp;&nbsp;
                      <Link
                        to="https://www.linkedin.com/in/v-n-sai-kumar-murari-30a33619b/"
                        target="_blank"
                      >
                        <img
                          src={LinkedinImage}
                          alt="img"
                          width="18"
                          height="18"
                          className="object-fit-cover"
                        />
                      </Link>
                    </p>
                  </div>
                  <p className="mt-3 text-muted textHightlight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni quasi, modi nostrum, nihil voluptatem laudantium illum
                    tempora sunt id, pariatur aut suscipit qui.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card shadow-none mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      src={Employee1}
                      alt="img"
                      width="60"
                      height="60"
                      className="rounded-circle object-fit-cover"
                    />
                    <p className="mb-0 team_details ms-4">
                      {" "}
                      <span className="employe_name">Tejsavi</span> &nbsp;{" "}
                      <span className="designation">PM</span>&nbsp;&nbsp;
                      <Link
                        to="https://www.linkedin.com/in/v-n-sai-kumar-murari-30a33619b/"
                        target="_blank"
                      >
                        <img
                          src={LinkedinImage}
                          alt="img"
                          width="18"
                          height="18"
                          className="object-fit-cover"
                        />
                      </Link>
                    </p>
                  </div>
                  <p className="mt-3 text-muted textHightlight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni quasi, modi nostrum, nihil voluptatem laudantium illum
                    tempora sunt id, pariatur aut suscipit qui.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card shadow-none mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      src={Employee1}
                      alt="img"
                      width="60"
                      height="60"
                      className="rounded-circle object-fit-cover"
                    />
                    <p className="mb-0 team_details ms-4">
                      {" "}
                      <span className="employe_name">
                        Sai Murari
                      </span> &nbsp; <span className="designation">TL</span>
                      &nbsp;&nbsp;
                      <Link
                        to="https://www.linkedin.com/in/v-n-sai-kumar-murari-30a33619b/"
                        target="_blank"
                      >
                        <img
                          src={LinkedinImage}
                          alt="img"
                          width="18"
                          height="18"
                          className="object-fit-cover"
                        />
                      </Link>
                    </p>
                  </div>
                  <p className="mt-3 text-muted textHightlight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni quasi, modi nostrum, nihil voluptatem laudantium illum
                    tempora sunt id, pariatur aut suscipit qui.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>

      <section className="join_us">
        <div className="row details_section">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="col-xl-6 my-auto"
          >
            <h1 className=" text-center fw-bold mb-4">Join Us</h1>
            <p className="mb-3 text-white-75">
              Why settle for normal, when you are meant for bigger things? Be a
              part of the Recro Squad and lead futuristic tech innovations
            </p>
            <button
              className="btn cg_btn_gradient btn-lg rounded-0 border-0 contact_us_btn shadow mb-4 mb-lg-0"
              onClick={() => navigate("/contactus")}
            >
              I'm Intrested{" "}
              <i className="bi bi-arrow-up-right-circle-fill fs-20"></i>
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="col-xl-6"
          >
            <img src={aboutImage2} alt="img" width="100%" />
          </motion.div>
        </div>
      </section>

      <div className="container">
        <Employees />
        <FindGoals />
      </div>
    </>
  );
};

export default AboutUs;
