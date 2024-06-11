import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import gifImage1 from "../assets/images/gifs/3.gif";
import gifImage2 from "../assets/images/gifs/4.gif";
import gifImage3 from "../assets/images/gifs/5.gif";
import gifImage4 from "../assets/images/gifs/down-arrow.gif";
import Image3 from "../assets/images/3.png";
import User1 from "../assets/images/users/5.jpg";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "../../node_modules/swiper/swiper.css";
import "../assets/styles.css";
import Employees from "../common/Employees";
import FindGoals from "../common/FindGoals";

const Home = () => {
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

  // const HorizontalScrollCarousel = () => {
  //   const targetRef = useRef(null);
  //   const { scrollYProgress } = useScroll({
  //     target: targetRef,
  //   });

  //   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  //   return (
  //     <section
  //       ref={targetRef}
  //       className="position-relative"
  //       // style={{ height: "200vh" }}
  //     >
  //       <div
  //         className="position-sticky top-0 d-flex align-items-center overflow-hidden"
  //         // style={{ height: "100vh" }}
  //       >
  //         <motion.div style={{ x }} className="d-flex gap-4">
  //           {userData.map((user, index) => (
  //             <div className="col-xl-4" key={index}>
  //               <div className="card shadow-none cg_developers overflow-hidden">
  //                 <div className="card-body">
  //                   <div className="d-flex align-items-center ms-3">
  //                     <img src={user.image} alt="user" className="shadow" />
  //                     <h6 className="mb-0 fw-semibold ms-3 fs-20">
  //                       {user.name}
  //                     </h6>
  //                   </div>
  //                   <div className="ps-5 mt-4">
  //                     <p className="text-muted ms-3">{user.description}</p>
  //                   </div>
  //                   <div className="text-end">
  //                     <Link>
  //                       Read more
  //                       <i className="ri-arrow-right-s-line align-middle"></i>
  //                     </Link>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </motion.div>
  //       </div>
  //     </section>
  //   );
  // };

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
            {/* <div className="position-relative sphere_animation">
              <Canvas
                camera={{
                  position: [10, -7.5, -5],
                }}
                style={{ height: "100vh" }}
                className=""
              >
                <OrbitControls maxDistance={20} minDistance={10} />
                <directionalLight />
                <pointLight position={[-30, 0, -30]} power={10.0} />
                <PointCircle />
              </Canvas>
            </div> */}
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

            {/* <div
              data-w-id="d835436e-df39-4939-f343-6f779f335e5d"
              className="w-layout-blockcontainer container w-container text-end d-flex flex-column"
            >
              <h2 className="fs-50 my-3 ms-auto">Code with the best</h2>
              <p className="mb-0 text-white-75 fs-16 banner_info_text text-end d-flex ms-auto">
                Take on challenges that you have always wanted to explore
                because that is why you could depend on us. We ensure perks and
                health benefits that go beyond just helping you land the
                opportunity. We make sure you are among peers of exceptional
                calibre and are part of a community that helps you grow.
              </p>
            </div>
            <div
              data-w-id="d835436e-df39-4939-f343-6f779f335e5d"
              className="w-layout-blockcontainer container w-container"
            >
              <h2 className="fs-50 my-3">Stability that comes with security</h2>
              <p className="mb-0 text-white-75 fs-16 banner_info_text">
                Take on challenges that you have always wanted to explore
                because that is why you could depend on us. We ensure perks and
                health benefits that go beyond just helping you land the
                opportunity. We make sure you are among peers of exceptional
                calibre and are part of a community that helps you grow.
              </p>
            </div> */}
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
                <h4 className="my-4 fw-semibold">Apply</h4>
                <p className="text-white-50">
                  There’s always a piece of code waiting to be written, so send
                  in your profile right away
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="text-center small_bg3">
                <img src={gifImage2} alt="img" className="small_gifs" />
                <h4 className="my-4 fw-semibold">Interview</h4>
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
          {/* <section className="mb-0">
            <h3 className="fs-25 fw-bold text-center mb-5">
              How do you get started?
            </h3>
            <div className="row get_started">
              <div className="col-xl-4">
                <div className="text-center small_bg">
                  <img src={gifImage1} alt="img" className="small_gifs" />
                  <h4 className="my-4 fw-semibold">Apply</h4>
                  <p className="text-white-50">
                    There’s always a piece of code waiting to be written, so
                    send in your profile right away
                  </p>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="text-center small_bg">
                  <img src={gifImage2} alt="img" className="small_gifs" />
                  <h4 className="my-4 fw-semibold">Interview</h4>
                  <p className="text-white-50">
                    We’ll line you up with opportunities that fit your profile
                    and experience
                  </p>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="text-center small_bg">
                  <img src={gifImage3} alt="img" className="small_gifs" />
                  <h4 className="my-4 fw-semibold">Join</h4>
                  <p className="text-white-50">
                    That’s it, you’re all set and you can dive right in!
                  </p>
                </div>
              </div>
            </div>
          </section> */}
          <section className="mb-0 my-5 pt-5 w-100">
            <div className="row justify-content-evenly">
              <div className="text-center">
                <h3 className="fs-25 fw-bold">Developer Experiences</h3>
                <p className="text-white-50 mb-5">
                  Hear from our talents who found the right opportunity
                </p>
              </div>
              {/* <HorizontalScrollCarousel /> */}
            </div>
          </section>
          <Employees />
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
