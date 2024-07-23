import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Contact = () => {
  return (
    <>
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      <div className="contact-icon">
      <a href="https://www.instagram.com/" target="_blank" className="items">
          <FaInstagramSquare className='icons'/>
        </a>
        <a href="https://www.linkedin.com/in/ishita-dubey-301b7720b/" target="_blank" className="items">
          <FaLinkedin className='icons'/>
        </a>
        <a href="https://twitter.com/Ishita__2310" target="_blank" className="items">
        <FaSquareXTwitter className='icons' />
        </a>
        <a href="https://github.com/Ishita2610?tab=repositories" target="_blank" className="items">
        <FaGithubSquare className='icons' />
        </a>
        <a href="mailto:work,ishitadubey@gmail.com" target="_blank" className="items">
        <SiGmail className='icons' />
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact