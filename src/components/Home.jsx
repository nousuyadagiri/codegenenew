import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from 'swiper/modules';
import { useScroll, motion, useTransform } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gifImage1 from '../assets/images/gifs/3.gif';
import gifImage2 from '../assets/images/gifs/4.gif';
import gifImage3 from '../assets/images/gifs/5.gif';
import gifImage4 from '../assets/images/gifs/down-arrow.gif';
import techImage1 from '../assets/images/technologies/blockchain.png';
import techImage2 from '../assets/images/technologies/python.png';
import techImage3 from '../assets/images/technologies/nodejs.png';
import techImage4 from '../assets/images/technologies/reactjs.png';
import techImage5 from '../assets/images/technologies/reactnative.png';
import techImage6 from '../assets/images/technologies/redux.png';
import techImage7 from '../assets/images/technologies/mongodb.png';
import techImage8 from '../assets/images/technologies/redis.png';
import techImage9 from '../assets/images/technologies/amazon.png';
import techImage10 from '../assets/images/technologies/java.png';
import techImage11 from '../assets/images/technologies/bullmq.png';
import techImage12 from '../assets/images/technologies/swift.png';
import bgimage1 from '../assets/images/backgrounds/8.jpg';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import '../../node_modules/swiper/swiper.css';
import '../assets/styles.css';
import FindGoals from '../common/FindGoals';
import { fadeIn } from '../variants';

const Home = () => {
  const navigate = useNavigate();

  const ref = useRef(null);

  const handleButtonClick = (sectionId) => {
    navigate(`/services#${sectionId}`);
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 3], ['0%', '10%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

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
      behavior: 'smooth',
    });
    console.log('going down');
  };

  let location = useLocation();

  useEffect(() => {
    window.mycustomeCode();
  }, [location.pathname]);

  return (
    <>
      <div className='home_section position-relative'>
        <a
          href='mailto:info@codegene.io'
          className='button info w-button'
          data-w-id='bb72254c-2d37-9ec6-683b-41c1a0d6805d'
        >
          info@codegene.io
        </a>
        <div className='track'>
          <div
            data-w-id='ee26dd06-1792-0fbc-8963-79f9b873c782'
            className='spline'
            data-animation-type='spline'
            data-spline-url='https://prod.spline.design/lyuybD4hrW5LYOzH/scene.splinecode'
          >
            <canvas></canvas>
          </div>
          <section className='hero justify-content-center d-flex align-items-center mb-0'>
            <h1 className='z-1'>
              Empowering Businesses through Digital Ingenuity.
            </h1>
            <img
              src={gifImage4}
              alt='img'
              className='go_down'
              onClick={GoDownPage}
            />
          </section>
          <div
            data-w-id='d835436e-df39-4939-f343-6f779f335e5d'
            className='w-layout-blockcontainer container w-container'
          >
            <h2 className='fs-50 my-3'>
              Unveiling Cutting-Edge Technology Redefining Modern Finance
            </h2>
            <p className='mb-0 text-white-75 fs-16 banner_info_text'>
              Delve into our platform to uncover cutting-edge technology that
              revolutionizes financial transformation, where pioneering
              technology redefines the landscape of modern finance, seamlessly
              blending technology and financial expertise for a more connected
              and efficient financial ecosystem.”
            </p>
          </div>

          <div className='gradient d-flex justify-content-center px-0'>
            <div className='row container'>
              <div className='col-xl-6'>
                {/* <img src={bgimage1} alt="img" className="world-map" /> */}
              </div>
              <div className='col-xl-6'>
                <div className='position-relative z-3 text-end'>
                  <h2 className='fs-50 my-3 ms-auto'>Code with the best</h2>
                  <p className='mb-0 text-white-75 fs-16 banner_info_text text-end d-flex ms-auto'>
                    Embark on the challenges you’ve always craved exploring,
                    knowing you can rely on us. Our commitment extends beyond
                    mere opportunities, offering perks, health benefits, and a
                    community of exceptional peers dedicated to your growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='mb-0 how_start container'>
          <h3 className='fs-25 fw-bold text-center '>
            How to connect with us?
          </h3>
          <div className='text-white-50 text-center mb-5'>
            Connect with us and unlock possibilities.
          </div>
          <div className=' get_started'>
            <div className='col-md-4'>
              <div className='text-center small_bg3'>
                <img
                  src={gifImage1}
                  alt='img'
                  className='small_gifs small_gifss'
                />
                <h4 className='my-4 fs_mb fw-semibold'>Explore</h4>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='text-center small_bg3'>
                <img
                  src={gifImage2}
                  alt='img'
                  className='small_gifs small_gifss'
                />
                <h4 className='my-4 fs_mb fw-semibold'>Connect</h4>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='text-center small_bg3'>
                <img
                  src={gifImage3}
                  alt='img'
                  className='small_gifs small_gifss'
                />
                <h4 className='my-4 fs_mb fw-semibold '>collaborate</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div ref={ref} className='parallax_section py-5'>
        <motion.div
          className='container position-relative z-3'
          style={{ y: textY }}
        >
          <section className='our_team my-5 py-3'>
            <motion.h2
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className='text-center fw-semibold mb-0'
            >
              Our Services{' '}
            </motion.h2>
            <motion.p
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className='text-white-50 fw-normal text-center'
            >
              Your Success, Elevate Your Experience with Our Outstanding and
              Comprehensive Services Today
            </motion.p>
            <Swiper
              className='pt-5 pb-5'
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
                <div className='card shadow-none mb-0'>
                  <div className='card-body'>
                    <div className='main-services text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='M680-120q-17 0-28.5-11.5T640-160v-318q0-17 11.5-28.5T680-518h160q17 0 28.5 11.5T880-478v318q0 17-11.5 28.5T840-120H680Zm0-80h160v-238H680v238Zm-360 80v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v162h-80v-162H160v400h400v80h-80v80h80v80H320Zm28-290 92-70 92 70-34-114 92-74H476l-36-112-36 112H290l92 74-34 114Zm92-150Z' />
                      </svg>
                      <h5 className='my-3'>Mobile & Web Apps</h5>
                      <p className='text-muted textHightlight'>
                        Utilizing both WebApps and MobApps is essential for
                        reaching and engaging clients across various platforms,
                        ensuring seamless accessibility and user experience.
                      </p>
                      <button
                        className='btn btn-primary rounded-pill view-more-btn'
                        // onClick={() => navigate("/services")}
                        onClick={() => handleButtonClick('webapps')}
                      >
                        Read more{' '}
                        <i className='bi bi-arrow-right align-middle fs-17 lh-0'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow-none mb-0'>
                  <div className='card-body'>
                    <div className='main-services text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l185-185 185 185-100 100-85-85-85 85ZM225-295 40-480l185-185 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 185 185-185 185ZM480-40 295-225l100-100 85 85 85-85 100 100L480-40Z' />
                      </svg>
                      <h5 className='my-3'>API Development</h5>
                      <p className='text-muted textHightlight'>
                        Specializing in API development facilitates seamless
                        integration, scalability, customization, security, and
                        innovation for web and mobile applications.
                      </p>
                      <button
                        className='btn btn-primary rounded-pill view-more-btn'
                        onClick={() => handleButtonClick('apidev')}
                      >
                        Read more{' '}
                        <i className='bi bi-arrow-right align-middle fs-17 lh-0'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow-none mb-0'>
                  <div className='card-body'>
                    <div className='main-services text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='M159-120v-120h124L181-574q-27-15-44.5-44T119-680q0-50 35-85t85-35q39 0 69.5 22.5T351-720h128v-40q0-17 11.5-28.5T519-800q9 0 17.5 4t14.5 12l68-64q9-9 21.5-11.5T665-856l156 72q12 6 16.5 17.5T837-744q-6 12-17.5 15.5T797-730l-144-66-94 88v56l94 86 144-66q11-5 23-1t17 15q6 12 1 23t-17 17l-156 74q-12 6-24.5 3.5T619-512l-68-64q-6 6-14.5 11t-17.5 5q-17 0-28.5-11.5T479-600v-40H351q-3 8-6.5 15t-9.5 15l200 370h144v120H159Zm80-520q17 0 28.5-11.5T279-680q0-17-11.5-28.5T239-720q-17 0-28.5 11.5T199-680q0 17 11.5 28.5T239-640Zm126 400h78L271-560h-4l98 320Zm78 0Z' />
                      </svg>
                      <h5 className='my-3'>AI & ML</h5>
                      <p className='text-muted textHightlight'>
                        Utilizing AI and machine learning, our tech startup
                        optimizes user experience, enhances security, automates
                        processes, personalizes financial services.
                      </p>
                      <button
                        className='btn btn-primary rounded-pill view-more-btn'
                        onClick={() => handleButtonClick('ai-mi')}
                      >
                        Read more{' '}
                        <i className='bi bi-arrow-right align-middle fs-17 lh-0'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow-none mb-0'>
                  <div className='card-body'>
                    <div className='main-services text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z' />
                      </svg>
                      <h5 className='my-3'>Big data & Data Management</h5>
                      <p className='text-muted textHightlight'>
                        Leveraging advanced big data and data management
                        strategies optimizes decision-making, enhances customer
                        insights, ensures regulatory compliance.
                      </p>
                      <button
                        className='btn btn-primary rounded-pill view-more-btn'
                        onClick={() => handleButtonClick('datamanagment')}
                      >
                        Read more{' '}
                        <i className='bi bi-arrow-right align-middle fs-17 lh-0'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow-none mb-0'>
                  <div className='card-body'>
                    <div className='main-services text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q20 0 40 2.5t40 4.5v82q-20-2-40-4.5t-40-2.5q-26 36-45 75.5T404-640h116v80H386q-3 20-4.5 40t-1.5 40q0 20 1.5 40t4.5 40h188q3-20 4.5-40t1.5-40q0-20-1.5-40t-4.5-40h80q3 20 4.5 40t1.5 40q0 20-1.5 40t-4.5 40h136q5-20 7.5-40t2.5-40q0-20-2.5-40t-7.5-40h82q4 20 6 40t2 40q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM170-400h136q-3-20-4.5-40t-1.5-40q0-20 1.5-40t4.5-40H170q-5 20-7.5 40t-2.5 40q0 20 2.5 40t7.5 40Zm206 222q-18-34-31.5-69.5T322-320H204q29 51 73 87.5t99 54.5ZM204-640h118q9-37 22.5-72.5T376-782q-55 18-99 54.5T204-640Zm276 478q26-36 45-75.5t31-82.5H404q12 43 31 82.5t45 75.5Zm104-16q55-18 99-54.5t73-87.5H638q-9 37-22.5 72.5T584-178Zm56-462v-240h240v240H640Zm120-120h80v-80h-80v80Z' />
                      </svg>
                      <h5 className='my-3'>Blockchain Development</h5>
                      <p className='text-muted textHightlight'>
                        Blockchain offers unparalleled security, transparency,
                        and efficiency, revolutionizing industries by providing
                        tamper-proof data storage and automated trust
                        mechanisms.
                      </p>
                      <button
                        className='btn btn-primary rounded-pill view-more-btn'
                        onClick={() => handleButtonClick('blockchaindev')}
                      >
                        Read more{' '}
                        <i className='bi bi-arrow-right align-middle fs-17 lh-0'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow-none mb-0'>
                  <div className='card-body'>
                    <div className='main-services text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z' />
                      </svg>
                      <h5 className='my-3'>Digital Banking</h5>
                      <p className='text-muted textHightlight'>
                        Embracing digital banking offers unparalleled
                        convenience, accessibility, and efficiency, transforming
                        traditional banking experiences to meet the demands
                      </p>
                      <button
                        className='btn btn-primary rounded-pill view-more-btn'
                        onClick={() => handleButtonClick('digital-banking')}
                      >
                        Read more{' '}
                        <i className='bi bi-arrow-right align-middle fs-17 lh-0'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow-none mb-0'>
                  <div className='card-body'>
                    <div className='main-services text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q31 0 57-14.5t42-38.5q-22-13-47-20t-52-7q-27 0-52 7t-47 20q16 24 42 38.5t57 14.5ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Z' />
                      </svg>
                      <h5 className='my-3'>Web Security</h5>
                      <p className='text-muted textHightlight'>
                        Employing robust web security measures, our
                        fintech-focused tech startup safeguards sensitive data,
                        mitigates cyber threats, ensures regulatory compliance.
                      </p>
                      <button
                        className='btn btn-primary rounded-pill view-more-btn'
                        onClick={() => handleButtonClick('web-security')}
                      >
                        Read more{' '}
                        <i className='bi bi-arrow-right align-middle fs-17 lh-0'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow-none mb-0'>
                  <div className='card-body'>
                    <div className='main-services text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='M260-361v-40H160v-80h200v-80H200q-17 0-28.5-11.5T160-601v-160q0-17 11.5-28.5T200-801h60v-40h80v40h100v80H240v80h160q17 0 28.5 11.5T440-601v160q0 17-11.5 28.5T400-401h-60v40h-80Zm298 240L388-291l56-56 114 114 226-226 56 56-282 282Z' />
                      </svg>
                      <h5 className='my-3'>FinApps & FinTech</h5>
                      <p className='text-muted textHightlight'>
                        Fin Apps provide unmatched convenience, enabling
                        on-the-go financial management. FinTech revolutionizes
                        traditional finance by enhancing efficiency,
                        accessibility.
                      </p>
                      <button
                        className='btn btn-primary rounded-pill view-more-btn'
                        onClick={() => handleButtonClick('finapps-fintech')}
                      >
                        Read more{' '}
                        <i className='bi bi-arrow-right align-middle fs-17 lh-0'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow-none mb-0'>
                  <div className='card-body'>
                    <div className='main-services text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6Zm482-154q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Zm-80-120q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Zm170-40Z' />
                      </svg>
                      <h5 className='my-3'>Gaming</h5>
                      <p className='text-muted textHightlight'>
                        Specializing in gaming development for web and mobile
                        platforms, our team crafts immersive experiences that
                        drive engagement, foster creativity.
                      </p>
                      <button
                        className='btn btn-primary rounded-pill view-more-btn'
                        onClick={() => handleButtonClick('gaming')}
                      >
                        Read more{' '}
                        <i className='bi bi-arrow-right align-middle fs-17 lh-0'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow-none mb-0'>
                  <div className='card-body'>
                    <div className='main-services text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='M838-65 720-183v89h-80v-226h226v80h-90l118 118-56 57ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 20-2 40t-6 40h-82q5-20 7.5-40t2.5-40q0-20-2.5-40t-7.5-40H654q3 20 4.5 40t1.5 40q0 20-1.5 40t-4.5 40h-80q3-20 4.5-40t1.5-40q0-20-1.5-40t-4.5-40H386q-3 20-4.5 40t-1.5 40q0 20 1.5 40t4.5 40h134v80H404q12 43 31 82.5t45 75.5q20 0 40-2.5t40-4.5v82q-20 2-40 4.5T480-80ZM170-400h136q-3-20-4.5-40t-1.5-40q0-20 1.5-40t4.5-40H170q-5 20-7.5 40t-2.5 40q0 20 2.5 40t7.5 40Zm34-240h118q9-37 22.5-72.5T376-782q-55 18-99 54.5T204-640Zm172 462q-18-34-31.5-69.5T322-320H204q29 51 73 87.5t99 54.5Zm28-462h152q-12-43-31-82.5T480-798q-26 36-45 75.5T404-640Zm234 0h118q-29-51-73-87.5T584-782q18 34 31.5 69.5T638-640Z' />
                      </svg>
                      <h5 className='my-3'>Web3.0</h5>
                      <p className='text-muted textHightlight'>
                        The idea of a new, decentralized internet built on
                        blockchains represents a significant shift from the
                        traditional centralized model. This decentralized
                        internet aims to enhance privacy, security
                      </p>
                      <button
                        className='btn btn-primary rounded-pill view-more-btn'
                        onClick={() => handleButtonClick('web3')}
                      >
                        Read more{' '}
                        <i className='bi bi-arrow-right align-middle fs-17 lh-0'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>

          <section className='tech_img pb-5'>
            <motion.h2
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className='fw-semibold text-center mb-1'
            >
              Our Technologies
            </motion.h2>
            <motion.h6
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className='text-white-50 fw-normal text-center mb-5'
            >
              Technologies We Used To Develop Applications.
            </motion.h6>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className='row py-4'
            >
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='col-xl-3 col-md-4 col-sm-6 col-6'
              >
                <div className='techimage'>
                  <Link to='/services'>
                    <img src={techImage1} alt='techimage' />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='col-xl-3 col-md-4 col-sm-6 col-6'
              >
                <div className='techimage'>
                  <Link to='/services'>
                    <img src={techImage2} alt='techimage' />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='col-xl-3 col-md-4 col-sm-6 col-6'
              >
                <div className='techimage'>
                  <Link to='/services'>
                    <img src={techImage3} alt='techimage' />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='col-xl-3 col-md-4 col-sm-6 col-6'
              >
                <div className='techimage'>
                  <Link to='/services'>
                    <img src={techImage4} alt='techimage' />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='col-xl-3 col-md-4 col-sm-6 col-6'
              >
                <div className='techimage'>
                  <Link to='/services'>
                    <img src={techImage5} alt='techimage' />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='col-xl-3 col-md-4 col-sm-6 col-6'
              >
                <div className='techimage'>
                  <Link to='/services'>
                    <img src={techImage6} alt='techimage' />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='col-xl-3 col-md-4 col-sm-6 col-6'
              >
                <div className='techimage'>
                  <Link to='/services'>
                    <img src={techImage7} alt='techimage' />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='col-xl-3 col-md-4 col-sm-6 col-6'
              >
                <div className='techimage'>
                  <Link to='/services'>
                    <img src={techImage8} alt='techimage' />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='col-xl-3 col-md-4 col-sm-6 col-6'
              >
                <div className='techimage'>
                  <Link to='/services'>
                    <img src={techImage9} alt='techimage' />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='col-xl-3 col-md-4 col-sm-6 col-6'
              >
                <div className='techimage'>
                  <Link to='/services'>
                    <img src={techImage10} alt='techimage' />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='col-xl-3 col-md-4 col-sm-6 col-6'
              >
                <div className='techimage'>
                  <Link to='/services'>
                    <img src={techImage11} alt='techimage' />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='col-xl-3 col-md-4 col-sm-6 col-6'
              >
                <div className='techimage'>
                  <Link to='/services'>
                    <img src={techImage12} alt='techimage' />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </section>
        </motion.div>

        <motion.div
          className='parallax_image'
          style={{
            y: backgroundY,
          }}
        ></motion.div>
      </div>
      <div className='container mt-5'>
        <FindGoals />
      </div>
    </>
  );
};

export default Home;
