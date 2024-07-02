import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Accordion from "react-bootstrap/Accordion";
// import { Accordion, Card } from "react-bootstrap";
import Accordion from "../Accordion/Accordion";

import "./Home.css";
import homeimg from "../../images/home-img.png";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const accordionItems = [
    {
      title: "How can I search for jobs on this website?",
      content:
        "You can search for jobs by entering keywords in the search bar and filtering the results based on your preferences.",
    },
    {
      title: "Are there any fees for using this platform?",
      content:
        "No, our platform is completely free for job seekers. There are no hidden charges or fees.",
    },
    {
      title: "How can I contact employers through this website?",
      content:
        "You can contact employers by sending them a message through our messaging system or by using the contact information provided in the job listing.",
    },
    {
      title: "Can I receive job alerts for new postings?",
      content:
        "Yes, you can set up job alerts based on your preferences. You will receive notifications when new jobs matching your criteria are posted.",
    },
    {
      title: "Is my personal information secure on this platform?",
      content:
        "Yes, we take data privacy and security seriously. Your personal information is encrypted and protected to ensure confidentiality.",
    },
  ];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-blue-600 text-white rounded dark:bg-blue-400 dark:text-black"
      >
        Dark Mode
      </button>

      <section className="p-5  dark:bg-[#101b2f] ">
        <div className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-1 md:order-1">
                <div className="max-w-lg mx-auto">
                  <h1 className="text-5xl font-bold text-blue-800 mb-4 sm:text-2xl md:text-4xl dark:text-white">
                    Connecting you with local job opportunities
                  </h1>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="col">
                      <div className="card border-primary h-100 ">
                        <div className="card-body dark:bg-[#1E293B]">
                          <p className="card-text  text-sm  dark:text-white">
                            A platform dedicated to helping individuals in need
                            find employment opportunities nearby.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card border-primary h-100">
                        <div className="card-body dark:bg-[#1E293B]">
                          <p className="card-text text-sm dark:text-white">
                            Whether you are looking for full-time, part-time, or
                            temporary work, we are here to assist you.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card border-primary h-100 ">
                        <div className="card-body dark:bg-[#1E293B]">
                          <p className="card-text text-sm dark:text-white">
                            Our mission is to bridge the gap between job seekers
                            and employers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-center justify-center">
                    <button className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                      Start your journey now!
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 md:order-2 hidden sm:flex items-center justify-center">
                <div className="max-w-lg mx-auto">
                  <img
                    className="w-full h-auto"
                    src={homeimg}
                    alt="Connecting people with job opportunities"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-features mt-5 bg-blue-200  dark:bg-[#1E293B] p-3">
          <div className="featuresContainer">
            <div className="home-features1">
              <div className="home-container02">
                <h2
                  id="about"
                  className="text-3xl font-bold  text-[#0EA5E9] mb-4 sm:text-xl md:text-2xl"
                >
                  Empowering You to Find Opportunities
                </h2>
                <span className="home-features-sub-heading bodyLarge">
                  <span>
                    <span>
                      <span className="dark:text-white">
                        Discover the features that can help you on your journey
                        to find meaningful employment
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="home-container03 ">
                <div className="featuresCard feature-card-feature-card flex bg-white p-3 m-3  ">
                  <svg viewBox="0 0 1024 1024" className="featuresIcon mr-2 ">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="feature-card-container">
                    <h3 className="feature-card-text heading3">
                      <span>Job Listings</span>
                    </h3>
                    <span className="bodySmall pt-3">
                      <span>
                        Access to a variety of job listings in your area
                      </span>
                    </span>
                  </div>
                </div>
                <div className="featuresCard feature-card-feature-card flex  bg-white p-3  m-3">
                  <svg viewBox="0 0 1024 1024" className="featuresIcon mr-2">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="feature-card-container">
                    <h3 className="feature-card-text heading3">
                      <span>Skill Development</span>
                    </h3>
                    <span className="bodySmall  pt-3">
                      <span>
                        Opportunities for skill development and training
                        programs
                      </span>
                    </span>
                  </div>
                </div>
                <div className="featuresCard feature-card-feature-card flex  bg-white p-3  m-3">
                  <svg viewBox="0 0 1024 1024" className="featuresIcon mr-2">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="feature-card-container">
                    <h3 className="feature-card-text heading3">
                      <span>Community Support</span>
                    </h3>
                    <span className="bodySmall  pt-3">
                      <span>
                        Connect with a supportive community of job seekers and
                        mentors
                      </span>
                    </span>
                  </div>
                </div>
                <div className="featuresCard feature-card-feature-card flex  bg-white p-3 m-3">
                  <svg viewBox="0 0 1024 1024" className="featuresIcon mr-2">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="feature-card-container">
                    <h3 className="feature-card-text heading3">
                      <span>Resource Center</span>
                    </h3>
                    <span className="bodySmall  pt-3">
                      <span>
                        Access to resources such as resume building tips and
                        interview preparation
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-banner mt-5">
          <div className="home-banner1 bannerContainer">
            <h2 className="text-3xl font-bold  text-[#0EA5E9] mb-4 sm:text-xl md:text-2xl">
              Common questions
            </h2>
          </div>
        </div>

        <div className=" flex items-center justify-center">
          <Accordion items={accordionItems} />
        </div>
      </section>
    </>
  );
};

export default Home;
