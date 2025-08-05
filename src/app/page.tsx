"use client";

import { useEffect } from "react";
import Aos from "aos";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { contactUs } from "@/api/common";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { FaRegEnvelopeOpen, FaRegUser } from "react-icons/fa";
import { LuHeading, LuPencil } from "react-icons/lu";

export default function Home() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div id="wrapper">
        <div className="banner">
          <div
            className="bannerHolder bgGradient parallex"
            style={{ backgroundImage: "url(/images/banner01-1.png)" }}
          >
            <div className="container" data-aos="flip-up">
              <div className="col">
                <h1>
                  Empowering<span> Digital Innovation </span>
                </h1>
                <p>
                  At TechBolted, we think technology is most powerful when
                  it&apos;s personal. We&apos;re not here to unleash more code
                  upon the world we&apos;re here to create experiences that
                  matter.
                </p>
                <p>
                  We&apos;re not making apps or websites, but rather building
                  solutions that solve real, actual business problems and
                  deliver measurable results. We collaborate with you to build
                  tech that serves your vision. Real problems. Business
                  challenges. Growth blockers. Creative gaps. And we do it
                  together with a team of thinkers and makers: strong
                  developers, tasteful designers, and strategists who understand
                  context.
                </p>
              </div>
              <div className="col">
                <div className="img-box">
                  <Image
                    width={250}
                    height={250}
                    src="/images/banner01.png"
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bannerBottom">
            <div className="container" data-aos="flip-up">
              <p>
                We help startups build, launch, and scale faster-with tailored
                tech solutions that drive real growth. From MVP to market
                dominance, we&apos;re your tech partner for speed, efficiency,
                and results. See why we stand out here!
              </p>
              <Link href="#ContactUs" className="btn">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <main id="main">
          <section className="section">
            <div className="container" data-aos="flip-up">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="img-box p-3">
                    <Image
                      width={250}
                      height={250}
                      src="/images/img02.png"
                      alt="#"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h2>
                    Did <span>You</span> Know?
                  </h2>
                  <p>
                    <b>Blockchain isn&apos;t just for crypto.</b> <br />
                    We&apos;ve helped businesses use blockchain for voting
                    systems, data security, and affiliate tracking.
                  </p>
                  <p>
                    <b>
                      Custom CMS saves businesses 30–50% in operational
                      overhead.
                    </b>{" "}
                    <br />
                    We build CMS platforms that give you full control-without the tech headaches.
                  </p>
                  <p>
                    <b>
                      Digital marketing delivers 3x the ROI of traditional
                      methods.
                    </b>{" "}
                    <br />
                    Our strategies don&apos;t just look good-they&apos;re
                    backed by data and built to perform.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="section bg1">
            <div className="container" data-aos="flip-up">
              <div className="sectionHeader text-center">
                <h2>
                  <span>Our</span> Services
                </h2>
                <p>
                  We offer end-to-end digital solutions tailored to grow your
                  business and elevate your brand.
                </p>
              </div>
              <div className="row colList waveList text-center">
                <div className="col-lg-4">
                  <div className="box">
                    <h3>Web & Mobile Development</h3>
                    <p>
                      Your vision meets our technical magic to craft fast,
                      beautiful, and intuitive platforms that don&apos;t just
                      function flawlessly, but feel like a natural extension of
                      your brand. From the first click to the final conversion,
                      we engineer every interaction to delight users and drive
                      results.
                    </p>
                    <Link href="#ContactUs" className="btn">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box">
                    <h3>E-Commerce Solutions</h3>
                    <p>
                      Turn browsers into buyers with online stores built for
                      speed and sales. We integrate powerful platforms like
                      Shopify to create shopping experiences that feel
                      effortless-and drive serious revenue.
                    </p>
                    <Link href="#ContactUs" className="btn">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box">
                    <h3>Blockchain Development</h3>
                    <p>
                      Beyond the hype, we build real blockchain solutions-secure smart contracts, decentralized apps, and
                      transparent systems that put trust back into digital
                      transactions.
                    </p>
                    <Link href="#ContactUs" className="btn">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box">
                    <h3>Custom CMS Development</h3>
                    <p>
                      Tired of wrestling with clunky content systems? We build
                      intuitive CMS platforms that let you update content with
                      ease-no tech headaches required.
                    </p>
                    <Link href="#ContactUs" className="btn">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box">
                    <h3>Affiliate Systems</h3>
                    <p>
                      Grow your tribe with affiliate platforms designed to turn
                      partners into profit. We create systems that make scaling
                      your reach (and revenue) effortless.
                    </p>
                    <Link href="#ContactUs" className="btn">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box">
                    <h3>Digital Marketing</h3>
                    <p>
                      Cut through the noise with marketing that actually works.
                      We combine data and creativity to attract your ideal
                      customers-and keep them engaged
                    </p>
                    <Link href="#ContactUs" className="btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container" data-aos="flip-up">
              <div className="sectionHeader text-center">
                <h2>
                  <span>Our</span> Process
                </h2>
                <p>
                  At DevDoc, the key to successful marketing lies in
                  understanding your audience and <br /> delivering targeted
                  strategies. Here&apos;s how we do it:
                </p>
              </div>
              <ul className="processList">
                <li>
                  <div className="box">
                    <div className="description">
                      <h3>Discovery & Strategy</h3>
                      <p>
                        Understanding your vision and setting clear objectives.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box">
                    <div className="description">
                      <h3>Design & Development</h3>
                      <p>
                        Creating user-centric designs and developing robust
                        solutions.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box">
                    <div className="description">
                      <h3>Testing & Quality Assurance</h3>
                      <p>
                        Guaranteeing reliability, speed, and protection with
                        thorough quality checks.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box">
                    <div className="description">
                      <h3>Launch & Support</h3>
                      <p>
                        Deploying your solution and providing ongoing support
                        for continuous improvement.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="section bg-transparent" id="ContactUs">
            <div className="container" data-aos="flip-up">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sectionHeader">
                    <h2>Get in touch with us!</h2>
                    <p>
                      Please fill out the contact form to discuss how we can
                      collaborate to create exceptional and impactful digital
                      experiences. We look forward to partnering with you and
                      making your brand shine.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string().required("Name is required"),
                      email: Yup.string()
                        .email("Invalid email address")
                        .required("Email is required"),
                      subject: Yup.string().required("Subject is required"),
                      message: Yup.string().required("Message is required"),
                    })}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      const res = await contactUs(values);
                      if (res?.status == 200) {
                        toast.success("Form submitted successfully");
                        resetForm();
                      }
                      setSubmitting(false);
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className="contactForm row" id="contactForm" autoComplete={'off'}>
                        <div className="form-group col-md-6">
                          <div className="inputBox">
                            <label htmlFor={"name"}>Name</label>
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Enter Name"
                              name="name"
                            />
                            <div className="iconBox">
                              <FaRegUser />
                            </div>
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="text-danger small mt-1"
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <div className="inputBox">
                            <label htmlFor={"email"}>Email</label>
                            <Field
                              type="email"
                              className="form-control"
                              placeholder="Enter Email"
                              name="email"
                            />
                            <div className="iconBox">
                              <FaRegEnvelopeOpen />
                            </div>
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-danger small mt-1"
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-12">
                          <div className="inputBox">
                            <label htmlFor={"subject"}>Subject</label>
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Enter Subject"
                              name="subject"
                            />
                            <div className="iconBox">
                              <LuHeading />
                            </div>
                            <ErrorMessage
                              name="subject"
                              component="div"
                              className="text-danger small mt-1"
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-12">
                          <div className="inputBox">
                            <label htmlFor={"message"}>Message</label>
                            <Field
                              as="textarea"
                              className="form-control"
                              placeholder="Enter Message"
                              name="message"
                            />
                            <div className="iconBox">
                              <LuPencil />
                            </div>
                            <ErrorMessage
                              name="message"
                              component="div"
                              className="text-danger small mt-1"
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-12 d-flex justify-content-center mt-3">
                          <button
                            type="submit"
                            className="btn col-8 col-md-6 col-lg-4"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Submit"}
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Success Modal */}
      <div
        className="modal fade"
        id="successModal"
        tabIndex={-1}
        aria-labelledby="successModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <div className="mb-4">
                <h2 className="mb-0">
                  Thank <span className="themeColor">You!</span>
                </h2>
              </div>
              <div className="mb-4">
                <p className="fw-bold">YOUR MESSAGE IS WELL RECEIVED.</p>
                <p>
                  We appreciate you reaching out to us. Our team will review
                  your message and respond as soon as possible. In the meantime,
                  feel free to explore our website or check your inbox for any
                  updates.
                </p>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button type="button" className="btn" data-bs-dismiss="modal">
                  Close
                </button>
                <Link href="https://www.techbolted.com" className="btn border">
                  Back To Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      <div
        className="modal fade"
        id="errorModal"
        tabIndex={-1}
        aria-labelledby="errorModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <div className="mb-4">
                <h2 className="mb-0">
                  Oh <span className="themeColor">No!</span>
                </h2>
              </div>
              <div className="mb-4">
                <p className="fw-bold">
                  THERE WAS AN ISSUE WITH YOUR SUBMISSION.
                </p>
                <p className="show_contact_error">
                  We encountered an error while processing your request. Please
                  go back and try again. If the issue persists, ensure all
                  required fields are filled out correctly or refresh the page
                  before resubmitting. For further assistance, feel free to
                  contact our support team.
                </p>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button type="button" className="btn" data-bs-dismiss="modal">
                  Close
                </button>
                <Link href="https://www.techbolted.com/" className="btn border">
                  Back To Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
