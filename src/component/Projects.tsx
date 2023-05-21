
import Card from './Card';
import projectsData from '../data/projects.json';

function Projects() {
  return (
    <div>
      <section id="portfolios" className="portfolio-section section-padding bd-bottom px-4 px-md-5 w-screen">
        <div className="container">
          <div className="section-heading text-center mb-20 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
            <h1 className="text-3xl font-bold mb-6 md:text-4xl mt-10 lg:w-screen">Work Portfolios</h1>
          </div>

          <div className="@container xl:w-screen xl:pr-10">
            <div className="row portfolio-items">
              <main className="grid xl:grid-cols-2 justify-center content-center gap-5">
                {projectsData.map((project) => (
                  <Card
                    key={project.pro_id}
                    pro_id={project.pro_id}
                    pro_title={project.pro_title}
                    code_link={project.code_link}
                    pro_link={project.pro_link}
                    pro_thumb={project.pro_thumb}
                    summary={project.summary}
                    languages={project.languages}
                    features={project.features}
                  />
                ))}
              </main>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
