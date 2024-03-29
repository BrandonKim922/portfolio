import React from 'react';
import ProjectBox from './ProjectBox';
import cattinder from '../images/cattinder.png';
import apartment1 from '../images/apartment1.png';
import klk from '../images/klk.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={cattinder} projectName="CatTinder" />
        <ProjectBox projectPhoto={apartment1} projectName="ApartmentApp" />
        <ProjectBox projectPhoto={klk} projectName="KanyeLovesKanye" />
      </div>

    </div>
  )
}

export default Projects