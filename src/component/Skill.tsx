import React from "react";
import "../index.css";
// Importing the images
import htmlLogo from "../img/logos/html.svg";
import cssLogo from "../img/logos/css.svg";
import jsLogo from "../img/logos/js.svg";
import javaLogo from "../img/logos/java.svg";
import mongodbLogo from "../img/logos/mongodb.svg";
import reactLogo from "../img/logos/react.svg";
import mysqlLogo from "../img/logos/mysql.svg";


function skill() {
  return (
    <div>
      <section id="skills" className="p-4 md:p-5">
        <div className="container mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>
        </div>

        <div className="container mx-auto px-5">
          <div
            id="skills"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 md:mt-5"
          >
            {/* HTML Skill */}
            <div className="p-2 md:p-3 shadow-sm flex items-center space-x-3">
              <div className="flex justify-center items-center">
                <img
                  src={htmlLogo}
                  alt=""
                  className="logo w-full h-auto"
                />
              </div>
              <div>
                <h5 className="mb-0 font-medium text-gray-700">HTML</h5>
                <p className="text-gray-500 mb-0">2 Years Experience</p>
              </div>
            </div>

            {/* CSS Skill */}
            <div className="p-2 md:p-3 shadow-sm flex items-center space-x-3">
              <div className="flex justify-center items-center">
                <img
                  src={cssLogo}
                  alt=""
                  className="logo w-full h-auto"
                />
              </div>
              <div>
                <h5 className="mb-0 font-medium text-gray-700">CSS</h5>
                <p className="text-gray-500 mb-0">2 Years Experience</p>
              </div>
            </div>

            {/* JavaScript Skill */}
            <div className="p-2 md:p-3 shadow-sm flex items-center space-x-3">
              <div className="flex justify-center items-center">
                <img
                  src={jsLogo}
                  alt=""
                  className="logo w-full h-auto"
                />
              </div>
              <div>
                <h5 className="mb-0 font-medium text-gray-700">JavaScript</h5>
                <p className="text-gray-500 mb-0">1 Year Experience</p>
              </div>
            </div>

            {/* Java Skill */}
            <div className="p-2 md:p-3 shadow-sm flex items-center space-x-3">
              <div className="flex justify-center items-center">
                <img
                  src={javaLogo}
                  alt=""
                  className="logo w-full h-auto"
                />
              </div>
              <div>
                <h5 className="mb-0 font-medium text-gray-700">Java</h5>
                <p className="text-gray-500 mb-0">1 Year Experience</p>
              </div>
            </div>

            {/* Python Skill */}
            <div className="p-2 md:p-3 shadow-sm flex items-center space-x-3">
              <div className="flex justify-center items-center">
                <img
                  src={jsLogo}
                  alt=""
                  className="logo w-full h-auto"
                />
              </div>
              <div>
                <h5 className="mb-0 font-medium text-gray-700">Python</h5>
                <p className="text-gray-500 mb-0">3 Years Experience</p>
              </div>
            </div>

            <div className="col mb-3">
              <div className="container">
                <div className="row skill-item rounded p-2 p-md-3 shadow-sm d-flex align-items-center">
                  <div className="col-3 thumb-md d-flex flex-wrap justify-content-center align-items-center">
                    <img
                      src={mongodbLogo}
                      alt=""
                      className="logo img-fluid"
                    />
                  </div>
                  <div className="col-9">
                    <h5 className="mb-0 fw-medium text-gray-700">Mongodb</h5>
                    <p className="exp text-muted mb-0">2 Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-3">
              <div className="container">
                <div className="row skill-item rounded p-2 p-md-3 shadow-sm d-flex align-items-center">
                  <div className="col-3 thumb-md d-flex flex-wrap justify-content-center align-items-center">
                    <img
                      src={reactLogo}
                      alt="c"
                      className="logo img-fluid"
                    />
                  </div>
                  <div className="col-9">
                    <h5 className="mb-0 fw-medium text-gray-700">React</h5>
                    <p className="exp text-muted mb-0">2 Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-3">
              <div className="container">
                <div className="row skill-item rounded p-2 p-md-3 shadow-sm d-flex align-items-center">
                  <div className="col-3 thumb-md d-flex flex-wrap justify-content-center align-items-center">
                    <img
                      src={mysqlLogo}
                      alt=""
                      className="logo img-fluid"
                    />
                  </div>
                  <div className="col-9">
                    <h5 className="mb-0 fw-medium text-gray-700">MySQL</h5>
                    <p className="exp text-muted mb-0">1 Year Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default skill;
