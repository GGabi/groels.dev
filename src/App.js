import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar'
import Experience from './components/Experience'
import Landing from './components/Landing'
import Education from './components/Education'
import Portfolio from './components/Portfolio'

import educationData from './content/educationData'
import experienceData from './content/experienceData'
import portfolioData from './content/portfolioData'

const App = () => {
  const [appData, setAppData] = useState({})
  useEffect(() => {
    //TODO
  }, [])

  return (
    <div className='App'>
      <Sidebar sidebarData={{ name: 'Gabriel Roels' }}/>
      <div id='mainContent' className='container-fluid p-0'>
        <Landing />
        <hr className='m-0'/>
        <Experience experienceData={experienceData}/>
        <hr className='m-0'/>
        <Education educationData={educationData}/>
        <hr className='m-0'/>
        <Portfolio portfolioData={portfolioData}/>
        <hr className='m-0'/>
      </div>
    </div>    
  )
}

export default App;
