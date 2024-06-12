import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Joi from "joi";
import aboutImage1 from "../assets/images/6.png";
import Employees from "../common/Employees";
import FindGoals from "../common/FindGoals";

const ContactUs = () => {
  const initialFormState = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    techstack: "",
    textarea: "",
  };

  const [newForm, setNewForm] = useState(initialFormState);
  // const [errors, setErrors] = useState({});

  // Joi validation schema
  // const schema = Joi.object({
  //   firstname: Joi.string().required().label("First Name"),
  //   lastname: Joi.string().required().label("Last Name"),
  //   phonenumber: Joi.string()
  //     .pattern(new RegExp(/^\d{10}$/))
  //     .required()
  //     .label("Phone Number")
  //     .messages({
  //       "string.pattern.base": "Phone number must be 10 digits",
  //     }),
  //   email: Joi.string().email().required().label("Email"),
  //   techstack: Joi.string().required().label("How Can We Help You?"),
  //   textarea: Joi.string().required().label("Message"),
  // });

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewForm({
      ...newForm,
      [name]: value,
    });
  };

  // form submit
  const formSubmit = (e) => {
    e.preventDefault();

    // const { error } = schema.validate(newForm, { abortEarly: false });
    // if (error) {
    //   const validationErrors = {};
    //   error.details.forEach((detail) => {
    //     validationErrors[detail.path[0]] = detail.message;
    //   });
    //   setErrors(validationErrors);
    // } else {

    console.log(newForm);
    //   setNewForm(initialFormState);
    //   setErrors({});
    // }
  };

  return (
    <div className="container">
      <div className="row apply_form mb-5 px-3">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="col-lg-7"
        >
          <h3 className="mb-1 mt-5">Let’s have a chat about your growth</h3>
          <p className="text-muted mb-4">
            There is a talent waiting to work with a brand like you.
          </p>
          <form onSubmit={formSubmit}>
            <div className="row shadow-sm border p-4 mb-4">
              <div className="col-xl-12">
                <div className="mb-3">
                  <label htmlFor="techstack" className="form-label">
                    How Can We Help You? <span className="text-danger">*</span>
                  </label>
                  <select
                    name="techstack"
                    value={newForm.techstack}
                    onChange={handleChange}
                    className="form-select"
                    aria-label="Default select example"
                    required
                  >
                    <option value="">select</option>
                    <option value="Work With Us">Work With Us</option>
                    <option value="Others">Others</option>
                  </select>
                  {/* {errors.techstack && (
                    <div className="text-danger">{errors.techstack}</div>
                  )} */}
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="mb-3 form">
                  <label htmlFor="firstname" className="form-label">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={newForm.firstname}
                    autoFocus
                    onChange={handleChange}
                    className="form-control"
                    id="firstname"
                    placeholder="Enter your first name"
                    required
                  />
                  <span className="input-border"></span>
                  {/* {errors.firstname && (
                    <div className="text-danger">{errors.firstname}</div>
                  )} */}
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="mb-3 form">
                  <label htmlFor="lastname" className="form-label">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={newForm.lastname}
                    onChange={handleChange}
                    className="form-control"
                    id="lastname"
                    placeholder="Enter your last name"
                    required
                  />
                  <span className="input-border"></span>
                  {/* {errors.lastname && (
                    <div className="text-danger">{errors.lastname}</div>
                  )} */}
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="mb-3 form">
                  <label htmlFor="phonenumber" className="form-label">
                    Phone Number <span className="text-danger">*</span>
                  </label>
                  <input
                    name="phonenumber"
                    value={newForm.phonenumber}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="phonenumber"
                    placeholder="Enter your number"
                    required
                  />
                  <span className="input-border"></span>
                  {/* {errors.phonenumber && (
                    <div className="text-danger">{errors.phonenumber}</div>
                  )} */}
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="mb-3 form">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={newForm.email}
                    onChange={handleChange}
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                  <span className="input-border"></span>
                  {/* {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )} */}
                </div>
              </div>
              <div className="col-xl-12">
                <div className="mb-3 form">
                  <label htmlFor="textarea" className="form-label">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    type="text"
                    name="textarea"
                    value={newForm.textarea}
                    onChange={handleChange}
                    className="form-control"
                    id="textarea"
                    placeholder="Enter your message"
                    required
                  />
                  {/* {errors.textarea && (
                    <div className="text-danger">{errors.textarea}</div>
                  )} */}
                </div>
              </div>
            </div>
            <button
              className="btn cg_btn_gradient btn-lg rounded-0 border-0 contact_us_btn mt-4"
              type="submit"
            >
              Submit <i className="bi bi-arrow-up-right-circle-fill fs-20"></i>
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="col-lg-5 my-auto text-end"
        >
          <div className="text-center mt-5 mt-lg-0">
            <img src={aboutImage1} alt="img" className="animated_gif" />
          </div>
        </motion.div>
      </div>
      <>
        <Employees />
        <FindGoals />
      </>
    </div>
  );
};

export default ContactUs;
