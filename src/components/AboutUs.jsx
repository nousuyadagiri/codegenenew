import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import aboutImage1 from "../assets/images/4.png";
import { useNavigate } from "react-router-dom";
import "../../node_modules/swiper/swiper.css";
import "../../node_modules/swiper/modules/navigation.css";
import "../../node_modules/swiper/modules/pagination.css";
import "../../node_modules/swiper/modules/scrollbar.css";
import aboutImage2 from "../assets/images/1.jpg";
import FindGoals from "../common/FindGoals";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <section className="main_banner peopel_priority">
          <div className="row">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="col-lg-6 col-12 col-sm-12 my-auto"
            >
              <h1 className="fs-44 mb-3 mt-5">
                <span className="text-highlighter">Empowering</span> Individuals
                and <span className="text-highlighter">Businesses</span> with{" "}
                <span className="text-highlighter">Innovative</span> Software
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
              className="col-lg-6 col-12 col-sm-12 text-end bg-highlight"
            >
              <img src={aboutImage1} alt="img" className="animated_gif " />
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
                        Passion fuels innovation. We harness technology to
                        conquer challenges and create meaningful impact,
                        propelling individuals and businesses forward.
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
                        Embrace adaptability for success. We thrive on change,
                        using it to innovate and grow. With agile methods and
                        responsive communication, we deliver solutions that
                        exceed expectations. Join us on a journey of
                        transformation and navigate change with confidence.
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
                        Learning & Experimentation: Embrace perpetual growth
                        with us. Our culture fosters curiosity and
                        experimentation, driving innovation. Join our journey of
                        discovery, where every lesson learned propels us towards
                        greater success.
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
                        Customer success drives us forward. We’re committed to
                        your triumphs, going above and beyond to anticipate and
                        fulfill your needs. Together, we achieve greatness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* <section className="our_team">
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
        </section> */}

        {/* <section className="our_team">
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="fs-25 text-center fw-bold mb-5"
          >
            Our Team
          </motion.h3>
          <div className="row">
            <div className="col-xl-6">
              <div className="card shadow-none mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      src={Employee1}
                      alt="img"
                      width="150"
                      height="150"
                      className="rounded-circle object-fit-cover"
                    />
                  </div>
                  <p className="mb-0 team_details ms-4 mt-4">
                    {" "}
                    <span className="employe_name">
                      Pavan Kumar
                    </span> &nbsp; <span className="designation">CEO</span>
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
                  <p className="mt-3 text-muted textHightlight">
                    Our visionary CEO, embodies excellence and innovation. With
                    a proven track record of strategic leadership and unwavering
                    commitment to client satisfaction, Pavan drives our company
                    towards continual growth and success. Under his guidance, we
                    are propelled towards excellence in every endeavor, ensuring
                    promising outcomes for our clients and stakeholders alike.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card shadow-none mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      src={Employee2}
                      alt="img"
                      width="150"
                      height="150"
                      className="rounded-circle object-fit-cover"
                    />
                  </div>
                  <p className="mb-0 team_details ms-4 mt-4">
                    {" "}
                    <span className="employe_name">Sai Murari</span> &nbsp;{" "}
                    <span className="designation">TL</span>
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
                  <p className="mt-3 text-muted textHightlight">
                    Our accomplished Project Manager, driving our company
                    towards success. With a sharp focus on project efficiency
                    and team collaboration, Tejasvi ensures seamless execution
                    of our initiatives, ensuring timely delivery and exceptional
                    results. Her strategic vision and dedication to excellence
                    propel our company towards achieving its goals with
                    precision and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
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
              part of the Codegene Squad and lead futuristic tech innovations
            </p>
            <button
              className="btn cg_btn_gradient btn-lg rounded-0 border-0 contact_us_btn shadow mb-4 mb-lg-0"
              onClick={() => navigate("/contactus")}
            >
              I'm Interested{" "}
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
        <FindGoals />
      </div>
    </>
  );
};

export default AboutUs;
