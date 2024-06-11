import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import TermsImage from "../assets/images/8.png";

const Terms = () => {
  return (
    <div className="container terms_conditions">
      <div className="row">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="col-xl-12"
        >
          <h1 className="fs-49 my-3">
            Codegene <span className="text-danger">Terms Of Uses</span>
          </h1>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe
            sequi earum eveniet eius dignissimos tempore praesentium dolore enim
            reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Natus saepe sequi earum eveniet eius dignissimos tempore
            praesentium dolore enim reprehenderit.
          </p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe
            sequi earum eveniet eius dignissimos tempore praesentium dolore enim
            reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Natus saepe sequi earum eveniet eius dignissimos tempore
            praesentium dolore enim reprehenderit.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="col-xl-12"
        >
          <h4 className="my-3">Disclaimer of Warranty</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe
            sequi earum eveniet eius dignissimos tempore praesentium dolore enim
            reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Natus saepe sequi earum eveniet eius dignissimos tempore
            praesentium dolore enim reprehenderit.
          </p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe
            sequi earum eveniet eius dignissimos tempore praesentium dolore enim
            reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Natus saepe sequi earum eveniet eius dignissimos tempore
            praesentium dolore enim reprehenderit.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="col-xl-6"
        >
          <h4>User Agreement</h4>
          <p className="fs-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <ul className="list-style-disc">
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              itaque unde dolorem consequatur dicta. Deserunt soluta corrupti
              ipsa esse alias!
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              itaque unde dolorem consequatur dicta.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              itaque under
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
          className="col-xl-6 text-end"
        >
          <img src={TermsImage} alt="img" className="animated_gif" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="col-xl-8"
        >
          <h4>Copyright and Trademarks</h4>
          <p className="fs-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            aliquid cumque accusantium. Labore mollitia deserunt, iste sunt
            corrupti neque eum aut dolor repellendus quas modi dicta,
            voluptatibus iure illum minima non dolorem omnis vel nobis. Beatae
            iusto mollitia in explicabo, numquam repellendus delectus ut, minima
            nobis nulla dolores soluta doloremque!
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="col-xl-8"
        >
          <h4>Applicable Laws</h4>
          <p className="fs-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            aliquid cumque accusantium. Labore mollitia deserunt, iste sunt
            corrupti neque eum aut dolor repellendus quas modi dicta,
            voluptatibus iure illum minima non dolorem omnis vel nobis. Beatae
            iusto mollitia in explicabo, numquam repellendus delectus ut, minima
            nobis nulla dolores soluta doloremque!
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="col-xl-8"
        >
          <h4>Contact Us</h4>
          <p className="fs-16">
            Please contact us at info@codegene.io if you have any questions
            about Recro’s Privacy Policy or Terms of Use.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
