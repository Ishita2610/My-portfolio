import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/Ishita_Dubey_Resume.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  const typedRef= useRef(null)
  useEffect(() =>{
    const options = {
      strings:[
        "Welcome to my profile", 
        "My name is Ishita Dubey",
        " I'm a Web Developer(React js)"
      ],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    };
    const typed = new Typed(typedRef.current, options)

    return()=>{
      typed.destroy()
    }
  },[])
  return (
    <>
    <div className="container home" >
      <div className="left"
      data-aos="fade-up-right"
      data-aos-duration="1000"
      >
        <h1 ref = {typedRef}></h1>
        <a href={pdf} download="Ishita_Dubey_Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a> 
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left"
    data-aos-duration="1000">
          <img src= {`/assests/${hero.imgSrc}`} alt="hero" />
        </div>
      </div>
    </div>

   
    <Experience />
    <Skills />
    <Projects />
    <Contact />
    
    </>
  )
}

export default Home




