import React, { useState } from "react";
import axios from "axios";
import Joi from "joi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { toast } from "react-hot-toast";
import aboutImage1 from "../assets/images/6.png";
import worldMap from "../assets/images/cg-aboutus-map.gif";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    phone: "",
    type_of_enquiry: "",
    captcha: "",
  });

  const [errors, setErrors] = useState({});

  // Schema for validation
  const contactSchema = {
    first_name: Joi.string().trim().min(3).max(10).required(),
    last_name: Joi.string().trim().min(3).max(10).required(),
    email: Joi.string()
      .trim()
      .min(3)
      .max(55)
      .email({ tlds: { allow: ["com", "net", "org"] } })
      .required(),
    message: Joi.string().trim().min(20).max(500).required(),
    phone: Joi.string().trim().min(10).max(12).required(),
    type_of_enquiry: Joi.string().trim().min(10).max(50).required(),
    captcha: Joi.string().trim().min(3).required(),
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { error } = contactSchema.validate(form, { abortEarly: false });
    if (!error) return null;

    const validationErrors = {};
    error.details.forEach((detail) => {
      validationErrors[detail.path[0]] = detail.message;
    });
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post("/member/cg_contact_us", form);
      toast.success("Successfully submitted.");
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
        phone: "",
        type_of_enquiry: "",
        captcha: "",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000); // Navigate after 2 seconds
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error while submitting. Please try again.");
    }
  };


  const addresses = [
    {
      text: "Reg: (EN:37-2050121), 30N GOULD ST, STE R , SHERIDAN , Wyoming, United States -82801",
    },
    {
      text: "P2AG-F09, Building 1,Dubai Industrial City , Sheikh Mohammed Bin Zayed Rd - Dubai - United Arab Emirates",
    },
    {
      text: "Room 411, 4th Floor, First Intramuros BF Condominium Corp., Aduana St, Intramuros, Manila, Philippines, 1002",
    },
    {
      text: "DivyaSree Solitaire, 15, Inorbit Mall Rd, Madhapur, Hyderabad, Telangana 500081",
    },
    {
      text: "Main Road, Currency Nagar, Vijayawada, Andhra Pradesh, India -520008",
    },
  ];

  return (
    <div className="container">
      <section>
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
              There is a talent waiting to work with a brand like yours.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="row shadow-sm bg-white border p-4 mb-4">
                <div className="col-lg-6 col-12">
                  <div className="mb-3 form">
                    <label htmlFor="first_name" className="form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      value={form.first_name}
                      onChange={handleChange}
                      placeholder="First Name"
                      autoFocus
                      className="form-control"
                      id="firs_tname"
                      required
                    />
                    <span className="input-border"></span>
                    {errors.first_name && (
                      <p className="text-danger">{errors.first_name}</p>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="mb-3 form">
                    <label htmlFor="last_name" className="form-label">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      value={form.last_name}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="form-control"
                      id="last_name"
                      required
                    />
                    <span className="input-border"></span>
                    {errors.last_name && (
                      <p className="text-danger">{errors.last_name}</p>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="mb-3 form">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="form-control"
                      id="phone"
                      required
                    />
                    <span className="input-border"></span>
                    {errors.phone && (
                      <p className="text-danger">{errors.phone}</p>
                    )}
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
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="form-control"
                      id="email"
                      required
                    />
                    <span className="input-border"></span>
                    {errors.email && (
                      <p className="text-danger">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="mb-3 form">
                    <label htmlFor="textarea" className="form-label">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="form-control"
                      id="textarea"
                      required
                    />
                    {errors.message && (
                      <p className="text-danger">{errors.message}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="mb-3 form">
                    <label htmlFor="ype_of_enquiry" className="form-label">
                      Type of Enquiry <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="type_of_enquiry"
                      value={form.type_of_enquiry}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Type of Enquiry"
                    />
                    {errors.type_of_enquiry && (
                      <p className="text-danger">{errors.type_of_enquiry}</p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="captcha"
                    value={form.captcha}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Captcha"
                  />
                  {errors.captcha && (
                    <p className="text-danger">{errors.captcha}</p>
                  )}
                </div>
              </div>
              <button
                className="btn cg_btn_gradient btn-lg rounded-0 border-0 contact_us_btn mt-4"
                type="submit"
              >
                Submit{" "}
                <i className="bi bi-arrow-up-right-circle-fill fs-20"></i>
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
      </section>
      <section>
        <div className="row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="col-lg-5"
          >
            <h3 className="mb-4 main-info">Our Locations</h3>
            <ul className="list-group">
              {addresses.map((address, index) => (
                <li className="list-group-item px-0" key={index}>
                  <p className="fw-normal d-flex gap-2">
                    <i className="ri-map-pin-line text-primary fs-17 align-middle"></i>
                    <span className="fw-medium">{address.text}</span>
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="col-lg-7"
          >
            <img src={worldMap} alt="img" className="world-map" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
