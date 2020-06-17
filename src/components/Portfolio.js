import React from 'react';

const Portfolio = ({ portfolioData }) => {
  return  (
    <section className='portfolio-section p-3 p-lg-5 d-flex justify-content-left' id='portfolio'>
      <div className='w-100'>
        <h2 className='mb-5'>Portfolio</h2>
        <div className='portfolio-item d-flex flex-column flex-md-row justify-content-between mb-0'>
          <div className='portfolio-content'>
            <h3 className='mb-1'>Projects</h3>
            {
              portfolioData && portfolioData.projects.map((project, i) => (
                <div key={i} className='portfolio-content-project'>
                  <a href={project.link} className='subheading portfolio-content-project-title'>
                    {project.title}
                  </a>
                  <div className='text-primary portfolio-content-project-desc'>
                    {project.description}
                  </div>
                </div>
              ))
            }
            <h3 className='mt-2 mb-1'>Experiments</h3>
            {
              portfolioData && portfolioData.experiments.map((exp, i) => (
                <div key={i} className='portfolio-content-experiment'>
                  <a href={exp.link} className='subheading portfolio-content-experiment-title'>
                    {exp.title}
                  </a>
                  <div className='text-primary portfolio-content-experiment-desc'>
                    {exp.description}
                  </div>
                </div>
              ))
            }
            <h3 className='mt-2 mb-1'>Open-Source Contributions</h3>
            {
              portfolioData && portfolioData.contributions.map((cont, i) => (
                <div key={i} className='portfolio-content-cont'>
                  <a href={cont.link} className='subheading portfolio-content-cont-title'>
                    {cont.title}
                  </a>
                  <div className='text-primary portfolio-content-cont-desc'>
                    {cont.description}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio