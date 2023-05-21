
import "../index.css";



const Intro = () => {
  return (
    <section id="about" className="w-screen  flex flex-col items-center justify-center text-center" data-scroll-index={1}>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-start">
          <div className="w-full md:w-8/12 xl:w-7/12 px-6 sm:py-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
            <div className="text-center md:text-left ml-8">
              <h2 className="text-3xl font-semibold">Hey!</h2>
              <br />
              <p className="mt-4 text-lg leading-7">
                I am a full-stack software developer with experience in languages such as Java, Python, and JavaScript, and proficiency in databases like SQL and MySQL.
                During my internship at Snap Inc, I contributed to the development of additional features for an existing service and created a full-stack library project.
                I am fluent in Spanish and proficient in tools like GitHub and Git.
                I am committed to continually improving my skills and staying up-to-date with industry technologies.
                <br /><br />
                Take a look at my resume and explore some of the exciting projects I have been working on recently.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => {
                console.log("Hey there.");
              }}>
                Download Resume
              </button>
            </div>
          </div>
          <div className="w-full md:w-4/12 xl:w-5/12 px-6 sm:py-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1000ms">
            <div className="mt-8">
              {/* <img src="img/about.jpg" alt="img" className="w-full" /> */}
              <div className="dots"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
