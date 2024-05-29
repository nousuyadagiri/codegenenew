import React from "react";
import aboutImage1 from "../assets/images/4.png";

const AboutUs = () => {
  return (
    <>
      <section className="main_banner">
        <div className="row">
          <div className="col-xl-6 my-auto">
            <h1 className="fs-50 my-3">
              Empowering people to realise their true potential
            </h1>
            <p className="mb-0 text-muted fs-16 banner_info_text">
              The work culture is evolving, but we still spend a good amount of
              time with our jobs. The question really is that if you are in the
              right place that helps you grow as a professional. We exist to
              empower people to realise their true potential and find the right
              opportunity and team that will inspire you.
            </p>
          </div>
          <div className="col-xl-6 text-end">
            <img src={aboutImage1} alt="img" className="animated_gif" />
          </div>
        </div>
      </section>
      <section className="bg-light p-4">
        <div className="row justify-content-evenly">
          <div className="col-xl-2 my-auto text-center">
            <h2 className="text-primary fw-bold">OUr Story</h2>
          </div>
          <div className="col-xl-7">
            <h3>
              Enabling seamless access to high growth organizations for top
              talent
            </h3>
            <p className="text-muted">
              Our aim is to bridge the gap between talent and opportunity and
              become the most preferred partner for talent to have access to
              right opportunities. We open doors for promising candidates to
              work with seed to unicorn startups and get experience not only
              across different technical domains but also work cultures. The
              idea is to bring along opportunities for individuals to accelerate
              their career by entering unfamiliar territories
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="row justify-content-evenly">
          <div className="col-xl-5">
            <div className="card shadow-none border">
              <div className="card-body">
                <div className="d-flex align-items-start">
                  <div>
                    <i class="bi bi-alarm fs-25"></i>
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold">Passion & purpose</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem sequi architecto quam! Eligendi autem cumque ex animi,
                      facere sint, hic laboriosam vitae quas laudantium
                      consectetur voluptatum minus voluptas dignissimos aperiam
                      mollitia aspernatur, deserunt eveniet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="card shadow-none border">
              <div className="card-body">
                <div className="d-flex align-items-start">
                  <div>
                    <i class="bi bi-alarm fs-25"></i>
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold">Adaptability</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem sequi architecto quam! Eligendi autem cumque ex animi,
                      facere sint, hic laboriosam vitae quas laudantium
                      consectetur voluptatum minus voluptas dignissimos aperiam
                      mollitia aspernatur, deserunt eveniet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="card shadow-none border">
              <div className="card-body">
                <div className="d-flex align-items-start">
                  <div>
                    <i class="bi bi-alarm fs-25"></i>
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold">Learning & experimentation</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem sequi architecto quam! Eligendi autem cumque ex animi,
                      facere sint, hic laboriosam vitae quas laudantium
                      consectetur voluptatum minus voluptas dignissimos aperiam
                      mollitia aspernatur, deserunt eveniet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="card shadow-none border">
              <div className="card-body">
                <div className="d-flex align-items-start">
                  <div>
                    <i class="bi bi-alarm fs-25"></i>
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold">Customer Success</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem sequi architecto quam! Eligendi autem cumque ex animi,
                      facere sint, hic laboriosam vitae quas laudantium
                      consectetur voluptatum minus voluptas dignissimos aperiam
                      mollitia aspernatur, deserunt eveniet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
