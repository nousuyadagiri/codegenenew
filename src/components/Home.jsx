import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { useScroll, motion, useTransform } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import gifImage1 from "../assets/images/gifs/3.gif";
import gifImage2 from "../assets/images/gifs/4.gif";
import gifImage3 from "../assets/images/gifs/5.gif";
import gifImage4 from "../assets/images/gifs/down-arrow.gif";
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
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "../../node_modules/swiper/swiper.css";
import "../assets/styles.css";
import Employees from "../common/Employees";
import FindGoals from "../common/FindGoals";
import { fadeIn } from "../variants";
// import { myFunction } from "./custom";
import ContactUs from "./ContactUs";

const Home = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 3], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // const userData = [
  //   {
  //     name: "Sai Murari",
  //     image: User1,
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magnam dolorem quos ducimus! Soluta sapiente numquam itaque ut mollitia repudiandae perspiciatis error et nulla! Eum eligendi voluptate voluptatibus, sint magni aliquam assumenda maxime minima!",
  //   },
  //   {
  //     name: "Sai RamaKrishna",
  //     image: User1,
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magnam dolorem quos ducimus! Soluta sapiente numquam itaque ut mollitia repudiandae perspiciatis error et nulla! Eum eligendi voluptate voluptatibus, sint magni aliquam assumenda maxime minima!",
  //   },
  //   {
  //     name: "Raghava",
  //     image: User1,
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magnam dolorem quos ducimus! Soluta sapiente numquam itaque ut mollitia repudiandae perspiciatis error et nulla! Eum eligendi voluptate voluptatibus, sint magni aliquam assumenda maxime minima!",
  //   },
  //   {
  //     name: "Sravani",
  //     image: User1,
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magnam dolorem quos ducimus! Soluta sapiente numquam itaque ut mollitia repudiandae perspiciatis error et nulla! Eum eligendi voluptate voluptatibus, sint magni aliquam assumenda maxime minima!",
  //   },
  //   {
  //     name: "Vennela",
  //     image: User1,
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magnam dolorem quos ducimus! Soluta sapiente numquam itaque ut mollitia repudiandae perspiciatis error et nulla! Eum eligendi voluptate voluptatibus, sint magni aliquam assumenda maxime minima!",
  //   },
  //   {
  //     name: "Sathish",
  //     image: User1,
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magnam dolorem quos ducimus! Soluta sapiente numquam itaque ut mollitia repudiandae perspiciatis error et nulla! Eum eligendi voluptate voluptatibus, sint magni aliquam assumenda maxime minima!",
  //   },
  // ];
  const GoDownPage = () => {
    window.scrollTo({
      top: window.scrollY + 800,
      behavior: "smooth",
    });
    console.log("going down");
  };

  // useEffect(() => {
  //   console.log("Executed");
  //   setTimeout(() => {
  //     myFunction();
  //   }, 0);
  // }, []);

  return (
    <>
      <div className="home_section position-relative">
        <Link
          to="/applyform"
          className="button w-button"
          data-w-id="bb72254c-2d37-9ec6-683b-41c1a0d6805d"
        >
          Join The Codegene.io
        </Link>
        <div className="track">
          <div
            data-w-id="ee26dd06-1792-0fbc-8963-79f9b873c782"
            className="spline"
            data-animation-type="spline"
            data-spline-url="https://prod.spline.design/lyuybD4hrW5LYOzH/scene.splinecode"
          >
            <canvas></canvas>
          </div>
          <section className="hero mb-0">
            <h1 className="z-1">Codegene</h1>
            <img
              src={gifImage4}
              alt="img"
              className="go_down"
              onClick={GoDownPage}
            />
          </section>
          <div
            data-w-id="d835436e-df39-4939-f343-6f779f335e5d"
            className="w-layout-blockcontainer container w-container"
          >
            <h2 className="fs-50 my-3">
              Innovative Web Solutions
              <br /> Fast, Scalable, and Secure
            </h2>
            <p className="mb-0 text-white-75 fs-16 banner_info_text">
              We Build Fast And Highly Scalable Web Applications That Are Custom
              <br />
              Made Using Latest Web Technologies, Delivering The Best User
              Experience!
            </p>
          </div>

          <div className="gradient d-flex justify-content-center px-0">
            <div className="row container">
              <div className="col-xl-6"></div>
              <div className="col-xl-6">
                <div className="position-relative z-3 text-end">
                  <h2 className="fs-50 my-3 ms-auto">Code with the best</h2>
                  <p className="mb-0 text-white-75 fs-16 banner_info_text text-end d-flex ms-auto">
                    Take on challenges that you have always wanted to explore
                    because that is why you could depend on us. We ensure perks
                    and health benefits that go beyond just helping you land the
                    opportunity. We make sure you are among peers of exceptional
                    calibre and are part of a community that helps you grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="mb-0 how_start container">
          <h3 className="fs-25 fw-bold text-center mb-5">
            How do you get started?
          </h3>
          <div className="row get_started">
            <div className="col-xl-4">
              <div className="text-center small_bg3">
                <img src={gifImage1} alt="img" className="small_gifs" />
                <h4 className="my-4 fw-semibold">Connect</h4>
                <p className="text-white-50">
                  There’s always a piece of code waiting to be written, so send
                  in your profile right away
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="text-center small_bg3">
                <img src={gifImage2} alt="img" className="small_gifs" />
                <h4 className="my-4 fw-semibold">Collaborate</h4>
                <p className="text-white-50">
                  We’ll line you up with opportunities that fit your profile and
                  experience
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="text-center small_bg3">
                <img src={gifImage3} alt="img" className="small_gifs" />
                <h4 className="my-4 fw-semibold">Join</h4>
                <p className="text-white-50">
                  That’s it, you’re all set and you can dive right in!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div ref={ref} className="parallax_section py-5">
        <motion.div
          className="container position-relative z-3"
          style={{ y: textY }}
        >
          <section className="our_team my-5 py-3">
            <motion.h3
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="fs-25 text-center fw-bold mb-0"
            >
              Our Services{" "}
            </motion.h3>
            <motion.p
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-white-50 text-center"
            >
              Hear from our talents who found the right opportunity
            </motion.p>
            <Swiper
              className="pt-5 pb-5"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400: {
                  slidesPerView: 1,
                },
                639: {
                  slidesPerView: 2,
                },
                865: {
                  slidesPerView: 2,
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
              autoplay={{ delay: 3000 }} //{ delay: 3000 }
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="card shadow-none mb-0">
                  <div className="card-body">
                    <div className="main-services text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
                      </svg>
                      <h5 className="my-3">Mobile App</h5>
                      <p className="text-muted textHightlight">
                        Mobile app development services cover end to end
                        development of mobile apps,from business analysis
                      </p>
                      <button
                        className="btn btn-primary rounded-pill view-more-btn"
                        onClick={() => navigate("/services")}
                      >
                        Read more{" "}
                        <i class="bi bi-arrow-right align-middle fs-17 lh-0"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow-none mb-0">
                  <div className="card-body">
                    <div className="main-services text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l185-185 185 185-100 100-85-85-85 85ZM225-295 40-480l185-185 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 185 185-185 185ZM480-40 295-225l100-100 85 85 85-85 100 100L480-40Z" />
                      </svg>
                      <h5 className="my-3">API Development</h5>
                      <p className="text-muted textHightlight">
                        Mobile app development services cover end to end
                        development of mobile apps,from business analysis
                      </p>
                      <button
                        className="btn btn-primary rounded-pill view-more-btn"
                        onClick={() => navigate("/services")}
                      >
                        Read more{" "}
                        <i class="bi bi-arrow-right align-middle fs-17 lh-0"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow-none mb-0">
                  <div className="card-body">
                    <div className="main-services text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M159-120v-120h124L181-574q-27-15-44.5-44T119-680q0-50 35-85t85-35q39 0 69.5 22.5T351-720h128v-40q0-17 11.5-28.5T519-800q9 0 17.5 4t14.5 12l68-64q9-9 21.5-11.5T665-856l156 72q12 6 16.5 17.5T837-744q-6 12-17.5 15.5T797-730l-144-66-94 88v56l94 86 144-66q11-5 23-1t17 15q6 12 1 23t-17 17l-156 74q-12 6-24.5 3.5T619-512l-68-64q-6 6-14.5 11t-17.5 5q-17 0-28.5-11.5T479-600v-40H351q-3 8-6.5 15t-9.5 15l200 370h144v120H159Zm80-520q17 0 28.5-11.5T279-680q0-17-11.5-28.5T239-720q-17 0-28.5 11.5T199-680q0 17 11.5 28.5T239-640Zm126 400h78L271-560h-4l98 320Zm78 0Z" />
                      </svg>
                      <h5 className="my-3">AI & ML</h5>
                      <p className="text-muted textHightlight">
                        Mobile app development services cover end to end
                        development of mobile apps,from business analysis
                      </p>
                      <button
                        className="btn btn-primary rounded-pill view-more-btn"
                        onClick={() => navigate("/services")}
                      >
                        Read more{" "}
                        <i class="bi bi-arrow-right align-middle fs-17 lh-0"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow-none mb-0">
                  <div className="card-body">
                    <div className="main-services text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z" />
                      </svg>
                      <h5 className="my-3">Data Management</h5>
                      <p className="text-muted textHightlight">
                        Mobile app development services cover end to end
                        development of mobile apps,from business analysis
                      </p>
                      <button
                        className="btn btn-primary rounded-pill view-more-btn"
                        onClick={() => navigate("/services")}
                      >
                        Read more{" "}
                        <i class="bi bi-arrow-right align-middle fs-17 lh-0"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow-none mb-0">
                  <div className="card-body">
                    <div className="main-services text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q20 0 40 2.5t40 4.5v82q-20-2-40-4.5t-40-2.5q-26 36-45 75.5T404-640h116v80H386q-3 20-4.5 40t-1.5 40q0 20 1.5 40t4.5 40h188q3-20 4.5-40t1.5-40q0-20-1.5-40t-4.5-40h80q3 20 4.5 40t1.5 40q0 20-1.5 40t-4.5 40h136q5-20 7.5-40t2.5-40q0-20-2.5-40t-7.5-40h82q4 20 6 40t2 40q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM170-400h136q-3-20-4.5-40t-1.5-40q0-20 1.5-40t4.5-40H170q-5 20-7.5 40t-2.5 40q0 20 2.5 40t7.5 40Zm206 222q-18-34-31.5-69.5T322-320H204q29 51 73 87.5t99 54.5ZM204-640h118q9-37 22.5-72.5T376-782q-55 18-99 54.5T204-640Zm276 478q26-36 45-75.5t31-82.5H404q12 43 31 82.5t45 75.5Zm104-16q55-18 99-54.5t73-87.5H638q-9 37-22.5 72.5T584-178Zm56-462v-240h240v240H640Zm120-120h80v-80h-80v80Z" />
                      </svg>
                      <h5 className="my-3">Block Chain</h5>
                      <p className="text-muted textHightlight">
                        Mobile app development services cover end to end
                        development of mobile apps,from business analysis
                      </p>
                      <button
                        className="btn btn-primary rounded-pill view-more-btn"
                        onClick={() => navigate("/services")}
                      >
                        Read more{" "}
                        <i class="bi bi-arrow-right align-middle fs-17 lh-0"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow-none mb-0">
                  <div className="card-body">
                    <div className="main-services text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q31 0 57-14.5t42-38.5q-22-13-47-20t-52-7q-27 0-52 7t-47 20q16 24 42 38.5t57 14.5ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Z" />
                      </svg>
                      <h5 className="my-3">Web Security</h5>
                      <p className="text-muted textHightlight">
                        Mobile app development services cover end to end
                        development of mobile apps,from business analysis
                      </p>
                      <button
                        className="btn btn-primary rounded-pill view-more-btn"
                        onClick={() => navigate("/services")}
                      >
                        Read more{" "}
                        <i class="bi bi-arrow-right align-middle fs-17 lh-0"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>

          <section className="tech_img pb-5">
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
            <div className="text-center d-lg-none d-block">
              <button
                className="btn btn-primary btn-lg rounded-0"
                onClick={() => navigate("/services")}
              >
                View more{" "}
                <i class="bi bi-arrow-right align-middle fs-17 lh-0"></i>
              </button>
            </div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="row py-4"
            >
              <motion.div
                variants={fadeIn("right", 0.3)}
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
            </motion.div>
            <div className="text-center d-lg-block d-none">
              <button
                className="btn btn-primary btn-lg rounded-0"
                onClick={() => navigate("/services")}
              >
                View more{" "}
                <i class="bi bi-arrow-right align-middle fs-17 lh-0"></i>
              </button>
            </div>
          </section>
        </motion.div>

        <motion.div
          className="parallax_image"
          style={{
            y: backgroundY,
          }}
        ></motion.div>
      </div>
      <div className="container mt-5">
        <FindGoals />
      </div>
    </>
  );
};

export default Home;
