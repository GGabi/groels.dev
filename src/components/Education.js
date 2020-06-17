import React from 'react'

const Education = ({ educationData }) => {
  return (
    <section className='education-section p-3 p-lg-5 d-flex justify-content-left' id='education'>
      <div className='w-100'>
        <h2 className='mb-5'>Education</h2>
        <h3 className='university-name mb-0'>The University of Portsmouth</h3>
        <div className='degree-title d-flex flex-column flex-md-row justify-content-between mb-0'>
          <h4 className='degree-title-content mb-0'>Bsc Computer Science</h4>
          <span className='text-primary mb-0'>N/A</span>
        </div>
        <div className='education-content'>
          {
            educationData.map((year, i) => (
              <div key={i} className='education-year'>
                <div className='subheading mb-0'>{year.title}</div>
                <ul>
                  {
                    year.modules.map((module, i) => (
                      <li>
                      <div className='education-module d-flex flex-column flex-md-row justify-content-between mb-0'>
                        <div className='education-module-content'>
                          <div className='text-primary mb-0'>{module.name}</div>
                        </div>
                        <div className='education-module-grade text-md-right'>
                          <span className='text-primary mb-0'>{module.grade}</span>
                        </div>
                      </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Education


/*
  University:
  - University Name - Overall Grade
  - Yearly breakdown (dropdown)
  - - Units 
*/