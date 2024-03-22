import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const ContactMe = () => {
  return (
    <div>
        <a href="https://github.com/BrandonKim922" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/brandon-hw-kim/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:hwbrandonkim@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
  )
}

export default ContactMe