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
      <section id="skills" className="p-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="textthebold mb-4 text-3xl font-bold text-center text-gray-800">
              Skills
            </h2>
          </div>
        </div>

        <div className="[]container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* HTML Skill */}
            <div className="shadow-md rounded-lg p-4 flex items-center space-x-4 bg-white">
              <div className="flex justify-center items-center">
                <img src={htmlLogo} alt="HTML Logo" className="w-16 h-16" />
              </div>
              <div>
                <h5 className="mb-0 text-xl font-semibold text-gray-800">
                  HTML
                </h5>
                <p className="text-gray-600">2 Years Experience</p>
              </div>
            </div>

            {/* CSS Skill */}
            {/* CSS Skill */}
            <div className="shadow-md rounded-lg p-4 flex items-center space-x-4 bg-white">
              <div className="flex justify-center items-center">
                <img src={cssLogo} alt="CSS Logo" className="w-16 h-16" />
              </div>
              <div>
                <h5 className="mb-0 text-xl font-semibold text-gray-800">
                  CSS
                </h5>
                <p className="text-gray-600">2 Years Experience</p>
              </div>
            </div>

 {/* JavaScript Skill */}
 <div className="p-2 md:p-3 shadow-sm flex items-center space-x-3 bg-white">
              <div className="flex justify-center items-center">
                <img
                  src={jsLogo}
                  alt=""
                  className="w-16 h-16"
                />
              </div>
              <div>
                <h5 className="mb-0 font-medium text-gray-700 ">JavaScript</h5>
                <p className="text-gray-500 mb-0">1 Year Experience</p>
              </div>
            </div>

            {/* Java Skill */}
            <div className="p-2 md:p-3 shadow-sm flex items-center space-x-3  bg-white">
              <div className="flex justify-center items-center">
                <img
                  src={javaLogo}
                  alt=""
                  className="w-16 h-16"
                />
              </div>
              <div>
                <h5 className="mb-0 font-medium text-gray-700">Java</h5>
                <p className="text-gray-500 mb-0">1 Year Experience</p>
              </div>
            </div>

            {/* Python Skill */}
            <div className="p-2 md:p-3 shadow-sm flex items-center space-x-3  bg-white">
              <div className="flex justify-center items-center">
                <img
                  src={jsLogo}
                  alt=""
                  className="w-16 h-16"
                />
              </div>
              <div>
                <h5 className="mb-0 font-medium text-gray-700">Python</h5>
                <p className="text-gray-500 mb-0">3 Years Experience</p>
              </div>
            </div>


            <div className="p-2 md:p-3 shadow-sm flex items-center space-x-3  bg-white">
              <div className="flex justify-center items-center">
                    <img
                      src={mongodbLogo}
                      alt=""
                      className="w-16 h-16"
                    />
                  </div>
                  <div>
                    <h5 className="mb-0 font-medium text-gray-700">Mongodb</h5>
                    <p className="text-gray-500 mb-0">2 Years Experience</p>
                  
              </div>
            </div>

            <div className="p-2 md:p-3 shadow-sm flex items-center space-x-3  bg-white">
              <div className="flex justify-center items-center">
                    <img
                      src={reactLogo}
                      alt="c"
                      className="w-16 h-16"
                    />
                  </div>
                  <div>
                    <h5 className="mb-0 font-medium text-gray-700">React</h5>
                    <p className="text-gray-500 mb-0">2 Years Experience</p>
                  
                  </div>
               
            </div>

            <div className="p-2 md:p-3 shadow-sm flex items-center space-x-3  bg-white">
              <div className="flex justify-center items-center">
                    <img
                      src={mysqlLogo}
                      alt=""
                      className="w-16 h-16"
                    />
                  </div>
                  <div>
                    <h5 className="mb-0 font-medium text-gray-700">MySQL</h5>
                    <p className="text-gray-500 mb-0">2 Years Experience</p>
                 
              </div>
            </div>
    
   


          </div>
        </div>
      </section>
    </div>
  );
}

export default skill;
