import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Brandon KIM</h4>
      <h4>Copyright &copy; 2023 BK</h4>
      <div className='footerLinks'>
        <a href="https://github.com/BrandonKim922" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/brandon-hw-kim/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:hwbrandonkim@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer