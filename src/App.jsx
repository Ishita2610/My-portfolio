// OLD CODE
// import React, { useEffect }  from 'react'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Experience from './components/Experience'
// import Skills from './components/Skills'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
// import Aos from 'aos'
// import "aos/dist/aos.css"


// function App() {
//   useEffect(()=>{
//   Aos.init();
//   },[])
  

//   return (
//     <>
//     <Navbar/>
//     <div className="container">
//       <Home/>
//       <Experience/>
//       <Skills/>
//       <Projects/>
//       <Contact/>
//     </div>
//     </>
//   )
// }

// export default App



// NEW CODE


import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing necessary components from React Router
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
    <Router>
      <Navbar />
      <div className="container">
        <Routes> {/* Wrap Route components within Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

    

    </div>
  );
}

export default App;




