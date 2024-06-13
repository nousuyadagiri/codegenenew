import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Employees from "../common/Employees";
import FindGoals from "../common/FindGoals";

const ApplyForm = () => {
  const initialFormState = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    relevenatexperience: "",
    techstack: "",
    stackexperience: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    relocation: "",
    preferredLocation: "",
    linkedinURL: "",
    resume: null,
  };

  const [newForm, setNewForm] = useState(initialFormState);

  // handlechange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewForm({
      ...newForm,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setNewForm({
      ...newForm,
      [name]: files[0],
    });
  };

  //form submit
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(newForm);
    setNewForm(initialFormState);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 col-12">
          <div className="card shadow-none apply_form mb-0">
            <div className="card-body">
              <motion.h2
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="text-center my-5"
              >
                A few details and we’re done
              </motion.h2>
              <form onSubmit={formSubmit}>
                {/* basic details */}
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="row shadow-sm border rounded-3 px-1 py-4 mb-4"
                >
                  <div className="col-lg-6 col-12">
                    <div className="mb-3 form">
                      <label htmlFor="firstname" className="form-label">
                        FirstName <span className="text-danger">*</span>
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
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="mb-3 form">
                      <label htmlFor="lastname" className="form-label">
                        LastName <span className="text-danger">*</span>
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
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="mb-3 form">
                      <label htmlFor="phonenumber" className="form-label">
                        Mobile Number <span className="text-danger">*</span>
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
                    </div>
                  </div>
                </motion.div>

                {/* experience */}
                <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="row shadow-sm border rounded-3 px-1 py-4  mb-4"
                >
                  <div className="col-lg-6 col-12">
                    <div className="mb-3 form">
                      <label
                        htmlFor="relevenatexperience"
                        className="form-label"
                      >
                        Relevant Experience(in Years){" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="relevenatexperience"
                        value={newForm.relevenatexperience}
                        onChange={handleChange}
                        className="form-control"
                        id="relevenatexperience"
                        placeholder="Enter here"
                        required
                      />
                      <span className="input-border"></span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="mb-3">
                      <label htmlFor="techstack" className="form-label">
                        Tech Stack Category{" "}
                        <span className="text-danger">*</span>
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
                        <option value="Backend Developer">
                          Backend Developer
                        </option>
                        <option value="Frontend Developer">
                          Frontend Developer
                        </option>
                        <option value="Fullstack Developer">
                          Fullstack Developer
                        </option>
                        <option value="DevOps">DevOps</option>
                        <option value="Blockchain Developer">
                          Blockchain Developer
                        </option>
                        <option value="UI Developer">UI Developer</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="mb-3 form">
                      <label htmlFor="stackexperience" className="form-label">
                        Experience related to the stack (in Years){" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="stackexperience"
                        value={newForm.stackexperience}
                        onChange={handleChange}
                        className="form-control"
                        id="stackexperience"
                        placeholder="Enter your number"
                        required
                      />
                      <span className="input-border"></span>
                    </div>
                  </div>
                </motion.div>

                {/* salary expectation */}
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="row shadow-sm border rounded-3 px-1 py-4  mb-4"
                >
                  <div className="col-lg-4 col-12">
                    <div className="mb-3 form">
                      <label htmlFor="currentCTC" className="form-label">
                        Current CTC (in LPA){" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="currentCTC"
                        value={newForm.currentCTC}
                        onChange={handleChange}
                        className="form-control"
                        id="currentCTC"
                        placeholder="Enter here"
                        required
                      />
                      <span className="input-border"></span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="mb-3 form">
                      <label htmlFor="expectedCTC" className="form-label">
                        Expected CTC (in LPA){" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="expectedCTC"
                        value={newForm.expectedCTC}
                        onChange={handleChange}
                        className="form-control"
                        id="expectedCTC"
                        placeholder="Enter your number"
                        required
                      />
                      <span className="input-border"></span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="mb-3">
                      <label htmlFor="noticePeriod" className="form-label">
                        Notice Period <span className="text-danger">*</span>
                      </label>
                      <select
                        name="noticePeriod"
                        value={newForm.noticePeriod}
                        onChange={handleChange}
                        className="form-select"
                        aria-label="Default select example"
                        required
                      >
                        <option value="">select</option>
                        <option value="Immediate Joiner">
                          Immediate Joiner
                        </option>
                        <option value="5 days">5 days</option>
                        <option value="2 weeks">2 weeks</option>
                        <option value="1 Month">1 Month</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="mb-3">
                      <label htmlFor="relocation" className="form-label">
                        Open to Relocation?
                      </label>
                      <select
                        name="relocation"
                        value={newForm.relocation}
                        onChange={handleChange}
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="">select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="mb-3 form">
                      <label htmlFor="preferredLocation" className="form-label">
                        Preferred Location
                      </label>
                      <input
                        type="text"
                        name="preferredLocation"
                        value={newForm.preferredLocation}
                        onChange={handleChange}
                        className="form-control"
                        id="preferredLocation"
                        placeholder="Enter your number"
                      />
                      <span className="input-border"></span>
                    </div>
                  </div>
                </motion.div>

                {/* social media links */}
                <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="row shadow-sm border rounded-3 px-1 py-4"
                >
                  <div className="col-lg-12 col-12">
                    <div className="mb-3 form">
                      <label htmlFor="linkedinURL" className="form-label">
                        Linkedin URL
                      </label>
                      <input
                        type="text"
                        name="linkedinURL"
                        value={newForm.linkedinURL}
                        onChange={handleChange}
                        className="form-control"
                        id="linkedinURL"
                        placeholder="Enter here"
                      />
                      <span className="input-border"></span>
                    </div>
                  </div>
                  <div className="col-lg-12 col-12">
                    <div className="mb-3">
                      <label htmlFor="resume" className="form-label">
                        Upload Resume
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        id="resume"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* submit button */}
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="float-end"
                >
                  <button
                    className="btn cg_btn_gradient btn-lg rounded-0 border-0 contact_us_btn mt-4"
                    type="submit"
                  >
                    Submit
                    <i className="bi bi-arrow-up-right-circle-fill fs-20"></i>
                  </button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <>
        <Employees />
        <FindGoals />
      </>
    </div>
  );
};

export default ApplyForm;
