// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Link } from "react-router-dom";
// import Employee1 from "../assets/images/users/1.jpg";
// import Employee2 from "../assets/images/users/2.jpg";
// import Employee3 from "../assets/images/users/3.jpg";
// import Employee4 from "../assets/images/users/4.jpg";
// import Employee5 from "../assets/images/users/5.jpg";
// import Employee6 from "../assets/images/users/6.jpg";
// import Employee7 from "../assets/images/users/7.jpg";

// const Employees = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1.1 1"],
//   });

//   const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
//   return (
//     <motion.div
//       style={{
//         scale: scaleProgress,
//         opacity: opacityProgress,
//       }}
//       ref={ref}
//     >
//       <section className="common_section">
//         <div className="row justify-content-evenly">
//           <div className="col-md-6">
//             <div className="cg_employees">
//               <figure className="employe1">
//                 <span>
//                   <img src={Employee1} alt="img" />
//                 </span>
//                 <div className="employe_designation">
//                   <p>UI Developer</p>
//                   <p>Nousu</p>
//                 </div>
//               </figure>
//               <figure className="employe2">
//                 <span>
//                   <img src={Employee5} alt="img" />
//                 </span>
//                 <div className="employe_designation">
//                   <p>React Native TL</p>
//                   <p>Sai Murari</p>
//                 </div>
//               </figure>
//               <figure className="employe3">
//                 <span>
//                   <img src={Employee3} alt="img" />
//                 </span>
//                 <div className="employe_designation">
//                   <p>Frontend Developer</p>
//                   <p>Stany</p>
//                 </div>
//               </figure>
//               <figure className="employe4">
//                 <span>
//                   <img src={Employee4} alt="img" />
//                 </span>
//                 <div className="employe_designation">
//                   <p>Block chain</p>
//                   <p>Tejashawini</p>
//                 </div>
//               </figure>
//               <figure className="employe5">
//                 <span>
//                   <img src={Employee2} alt="img" />
//                 </span>
//                 <div className="employe_designation">
//                   <p>UI Developer</p>
//                   <p>Nousu</p>
//                 </div>
//               </figure>
//               <figure className="employe6">
//                 <span>
//                   <img src={Employee6} alt="img" />
//                 </span>
//                 <div className="employe_designation">
//                   <p>React Native</p>
//                   <p>Gopinath</p>
//                 </div>
//               </figure>
//               <figure className="employe7">
//                 <span>
//                   <img src={Employee7} alt="img" />
//                 </span>
//                 <div className="employe_designation">
//                   <p>HR Management</p>
//                   <p>Jyothika</p>
//                 </div>
//               </figure>
//             </div>
//           </div>
//           <div className="col-md-4 my-auto">
//             <h2>
//               We grow, <br />
//               when you grow
//             </h2>
//             <p className="fw-light my-3">
//               There is something about human interaction that goes beyond just
//               learning, it inspires you. That is why we invite exceptional
//               figures over for conversation that sparks the fire.
//             </p>
//             <Link
//               to="/contactus"
//               className="btn btn-primary mt-3 rounded-1 py-3 fs-20 px-3"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default Employees;
