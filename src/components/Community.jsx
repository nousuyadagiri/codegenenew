import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import mainImage from "../assets/images/gifs/Developer.gif";
import gifImage1 from "../assets/images/gifs/3.gif";
import gifImage2 from "../assets/images/gifs/4.gif";
import gifImage3 from "../assets/images/gifs/5.gif";
import Image1 from "../assets/images/1.png";
import Image2 from "../assets/images/2.png";
import Image3 from "../assets/images/3.png";
import User1 from "../assets/images/users/5.jpg";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "../../node_modules/swiper/swiper.css";

const Home = () => {
  const userData = [
    {
      name: "Sai Murari",
      image: User1,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magnam dolorem quos ducimus! Soluta sapiente numquam itaque ut mollitia repudiandae perspiciatis error et nulla! Eum eligendi voluptate voluptatibus, sint magni aliquam assumenda maxime minima!",
    },
    {
      name: "Sai RamaKrishna",
      image: User1,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magnam dolorem quos ducimus! Soluta sapiente numquam itaque ut mollitia repudiandae perspiciatis error et nulla! Eum eligendi voluptate voluptatibus, sint magni aliquam assumenda maxime minima!",
    },
    {
      name: "Raghava",
      image: User1,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magnam dolorem quos ducimus! Soluta sapiente numquam itaque ut mollitia repudiandae perspiciatis error et nulla! Eum eligendi voluptate voluptatibus, sint magni aliquam assumenda maxime minima!",
    },
    {
      name: "Sravani",
      image: User1,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magnam dolorem quos ducimus! Soluta sapiente numquam itaque ut mollitia repudiandae perspiciatis error et nulla! Eum eligendi voluptate voluptatibus, sint magni aliquam assumenda maxime minima!",
    },
    {
      name: "Vennela",
      image: User1,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magnam dolorem quos ducimus! Soluta sapiente numquam itaque ut mollitia repudiandae perspiciatis error et nulla! Eum eligendi voluptate voluptatibus, sint magni aliquam assumenda maxime minima!",
    },
    {
      name: "Sathish",
      image: User1,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magnam dolorem quos ducimus! Soluta sapiente numquam itaque ut mollitia repudiandae perspiciatis error et nulla! Eum eligendi voluptate voluptatibus, sint magni aliquam assumenda maxime minima!",
    },
  ];
  return (
    <div className="container">
      <section className="main_banner section1">
        <div className="row">
          <div className="col-xl-6 my-auto">
            <p className="text-uppercase fs-16 mb-1">
              codegene technologies pvt ltd
            </p>
            <h1 className="fs-50 my-3">Design, Development, Security</h1>
            <p className="mb-0 text-muted fs-16 banner_info_text">
              We Build Fast And Highly Scalable Web Applications That Are Custom
              <br />
              Made Using Latest Web Technologies, Delivering The Best User
              Experience!
            </p>
            <div className="search mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search here..."
              />
              <button className="btn cg-bg-gradient" type="button">
                Search
              </button>
            </div>
          </div>
          <div className="col-xl-6 text-end">
            <img src={mainImage} alt="img" className="animated_gif" />
          </div>
        </div>
      </section>
      <section>
        <h3 className="fs-25 fw-bold text-center mb-5">
          How do you get started?
        </h3>
        <div className="row get_started">
          <div className="col-xl-4">
            <div className="text-center small_bg">
              <img src={gifImage1} alt="img" className="small_gifs" />
              <h4 className="my-4 fw-semibold">Apply</h4>
              <p className="text-muted">
                There’s always a piece of code waiting to be written, so send in
                your profile right away
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
      </section>
      <section>
        <div className="row">
          <div className="col-xl-6">
            <div>
              <img src={Image1} alt="img" className="stabs_img" />
            </div>
          </div>
          <div className="col-xl-6 my-auto">
            <h3 className="fs-25 fw-bold mb-4">
              Stability that comes with security
            </h3>
            <p className="text-muted">
              Take on challenges that you have always wanted to explore because
              that is why you could depend on us. We ensure perks and health
              benefits that go beyond just helping you land the opportunity. We
              make sure you are among peers of exceptional calibre and are part
              of a community that helps you grow.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 my-auto">
            <h3 className="fs-25 fw-bold mb-4">Code with the best</h3>
            <p className="text-muted">
              Take on challenges that you have always wanted to explore because
              that is why you could depend on us. We ensure perks and health
              benefits that go beyond just helping you land the opportunity. We
              make sure you are among peers of exceptional calibre and are part
              of a community that helps you grow.
            </p>
          </div>
          <div className="col-xl-6 text-end">
            <div>
              <img src={Image2} alt="img" className="stabs_img" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row justify-content-evenly">
          <div className="col-xl-3 text-center">
            <h3 className="fs-25 fw-bold mb-3">Developer Experiences</h3>
            <p className="text-muted mb-0">
              Hear from our talents who found the right opportunity
            </p>
            <img src={Image3} alt="img" />
          </div>
          <div className="col-xl-7 my-auto">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              modules={[EffectCards, Autoplay, Pagination]}
              className="mySwiper"
            >
              {userData.map((user, index) => (
                <SwiperSlide key={index}>
                  <div className="card shadow-none cg_developers overflow-hidden">
                    <div className="card-body">
                      <div className="d-flex align-items-center ms-3">
                        <img src={user.image} alt="user" className="shadow" />
                        <h6 className="mb-0 fw-semibold ms-3 fs-20">
                          {user.name}
                        </h6>
                      </div>
                      <div className="ps-5 mt-4">
                        <p className="text-muted ms-3">{user.description}</p>
                      </div>
                      <div className="text-end">
                        <Link>
                          Read more
                          <i className="ri-arrow-right-s-line align-middle"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
