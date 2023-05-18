import React from 'react';
import "../index.css";

interface AboutProps {
  onClickResume: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Intro = () => {
  return (
    <section id="about" className=" w-screen bg-red-800 flex flex-col items-center justify-center text-center" data-scroll-index={1}>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-start">
          <div className="w-full md:w-12/12 sm:py-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
            <div className="text-left">
              <h2 className="text-3xl font-semibold">Hey !</h2>
              <br />
              <p className="mt-4 text-lg leading-7">
                I am a fullstack software developer with experience in languages such as Java, Python, and JavaScript, and proficiency in databases like SQL and MySQL.
                In my internship at Snap Inc, I developed additional features for an existing service and created a full-stack library project.
                I am fluent in Spanish and proficient in tools like GitHub and Git.
                I am committed to continually improving my skills and staying current with industry technologies.
                <br /><br />
                Check out my resume and some of the awesome things I've been working on recently.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={()=>{
                console.log("Hey there. ")
              }}>Download Resume</button>
            </div>
            <div className="mt-8">
              {/* <img src="img/about.jpg" alt="img" className="w-full" /> */}
              <div className="dots"></div>
            </div>
          </div>
          <div className="w-full md:w-7/12 sm:py-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms"></div>
          <div className="w-full md:w-5/12 sm:py-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1000ms"></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
