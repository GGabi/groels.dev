import React from 'react'

const Experience = ({ experienceData }) => {
  return (
    <section className='resume-section p-3 p-lg-5 d-flex justify-content-left' id='experience'>
      <div className='w-100'>
        <h2 className='mb-5'>Work Experience</h2>
        {
          experienceData && experienceData.map((exp, i) => (
            <div key={i} className='resume-item d-flex flex-column flex-md-row justify-content-between mb-0'>
              <div className='resume-content'>
                <h3 className='mb-0'>{exp.company}</h3>
                <h4>{exp.position}</h4>
                <div className='text-primary mb-1'>{exp.skills}</div>
                <div className='subheading'>Roles and Responsibilities</div>
                <ul>
                {
                  exp.description.map((aspect, i) => (
                    <li key={i} className='text-primary'>{aspect}</li>
                  ))
                }
                </ul>
              </div>
              <div className='resume-date text-md-right mb-3'>
                <span className='text-primary'>{exp.fromDate} - {exp.toDate}</span>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Experience