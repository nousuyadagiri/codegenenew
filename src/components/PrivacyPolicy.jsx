import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import PrivacyImage from "../assets/images/7.png";

const PrivacyPolicy = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="text-center bg-light py-4"
      >
        <h2 className="mb-0 fw-bold">
          Privacy <span className="text-primary">Policy</span>
        </h2>
        <p className="mb-0 text-muted fs-13">Last Updated: May 2024</p>
      </motion.div>
      <div className="container privacy_policy">
        <div className="row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="col-lg-6 col-sm-12 col-12"
          >
            <h4>Our Data Collection Practices</h4>
            <p className="fs-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              delectus iste ab.
            </p>
            <ul className="list-style-disc">
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                itaque unde dolorem consequatur dicta. Deserunt soluta corrupti
                ipsa esse alias!
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                itaque unde dolorem consequatur dicta. Deserunt soluta corrupti
                ipsa esse alias!
              </li>
            </ul>
            <h4>How We Use Your Data</h4>
            <p className="fs-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              delectus iste ab.
            </p>
            <ul className="list-style-disc">
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                itaque unde dolorem consequatur dicta. Deserunt soluta corrupti
                ipsa esse alias!
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                itaque unde dolorem consequatur dicta. Deserunt soluta corrupti
                ipsa esse alias!
              </li>
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="col-lg-6 col-sm-12 col-12 text-end"
          >
            <img src={PrivacyImage} alt="img" className="animated_gif" />
          </motion.div>
        </div>
        <div className="row justify-content-center mt-5">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="col-lg-8"
          >
            <h4>How We Collect Data from our Websites</h4>
            <p className="fs-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              delectus iste ab.
            </p>
            <ul className="list-style-disc">
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                itaque unde dolorem consequatur dicta. Deserunt soluta corrupti
                ipsa esse alias!
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                itaque unde dolorem consequatur dicta. Deserunt soluta corrupti
                ipsa esse alias!
              </li>
            </ul>
            <h4>When And How We Use Your Data</h4>
            <p className="fs-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              delectus iste ab.
            </p>
            <ul className="list-style-disc">
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                itaque unde dolorem consequatur dicta. Deserunt soluta corrupti
                ipsa esse alias!
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                itaque unde dolorem consequatur dicta. Deserunt soluta corrupti
                ipsa esse alias!
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="row mt-5">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="col-lg-10"
          >
            <h4>Contact Us</h4>
            <p className="fs-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              delectus iste ab.
            </p>
            <ul className="list-style-disc">
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                itaque unde dolorem consequatur dicta. Deserunt soluta corrupti
                info@codegene.io
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
