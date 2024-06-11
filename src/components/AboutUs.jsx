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
import Employee1 from "../assets/images/users/5.jpg";
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
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-6 my-auto"
            >
              <h1 className="fs-50 my-3">
                Empowering people to realise their true potential
              </h1>
              <p className="mb-0 text-muted fs-16 banner_info_text">
                The work culture is evolving, but we still spend a good amount
                of time with our jobs. The question really is that if you are in
                the right place that helps you grow as a professional. We exist
                to empower people to realise their true potential and find the
                right opportunity and team that will inspire you.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-6 text-end"
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
            <div className="col-xl-2 my-auto text-center">
              <h2 className="text-primary fw-bold">Our Story</h2>
            </div>
            <div className="col-xl-7">
              <h3>
                Enabling seamless access to high growth organizations for top
                talent
              </h3>
              <p className="text-muted">
                Our aim is to bridge the gap between talent and opportunity and
                become the most preferred partner for talent to have access to
                right opportunities. We open doors for promising candidates to
                work with seed to unicorn startups and get experience not only
                across different technical domains but also work cultures. The
                idea is to bring along opportunities for individuals to
                accelerate their career by entering unfamiliar territories
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
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-5"
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem sequi architecto quam! Eligendi autem cumque ex
                        animi, facere sint, hic laboriosam vitae quas laudantium
                        consectetur voluptatum minus voluptas dignissimos
                        aperiam mollitia aspernatur, deserunt eveniet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-5"
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem sequi architecto quam! Eligendi autem cumque ex
                        animi, facere sint, hic laboriosam vitae quas laudantium
                        consectetur voluptatum minus voluptas dignissimos
                        aperiam mollitia aspernatur, deserunt eveniet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-5 ms-auto"
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem sequi architecto quam! Eligendi autem cumque ex
                        animi, facere sint, hic laboriosam vitae quas laudantium
                        consectetur voluptatum minus voluptas dignissimos
                        aperiam mollitia aspernatur, deserunt eveniet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-xl-5"
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem sequi architecto quam! Eligendi autem cumque ex
                        animi, facere sint, hic laboriosam vitae quas laudantium
                        consectetur voluptatum minus voluptas dignissimos
                        aperiam mollitia aspernatur, deserunt eveniet.
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
              className="btn cg_btn_gradient btn-lg rounded-0 border-0 contact_us_btn shadow"
              onClick={() => navigate("/jobs")}
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
