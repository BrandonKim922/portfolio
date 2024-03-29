import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    CatTinderDesc : "This website is a landing page of Tinder but for cats. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    CatTinderGithub : "https://github.com/learn-academy-2023-india/cat-tinder-frontend-frazzled-felines",
    

    ApartmentAppDesc : "A website that shows you list of available apartment for rent. This was a group project made in a team of four with sign up and in function along with mock data.",
    ApartmentAppGithub : "https://github.com/learn-academy-2023-india/apartment-app-frontend-full-stack-realtors",
    
    KanyeLovesKanyeDesc:"A Kanye Fan page where you can experience variety of exciting features. This project was made to understand API integration, environment variables and vercel deployment.",
    KanyeLovesKanyeGithub:"https://github.com/kanye-loves-kanye",
   
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            
        </div>
    </div>
  )
}

export default  ProjectBox