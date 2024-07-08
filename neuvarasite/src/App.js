import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/home';
import About from './components/About';
import ProjectShowcase from './components/ProjectShowcase';
import Footer from './components/Footer';

function App() {
  return (
        <div className="App">
          <NavBar />
          <Home />
          <About />
          <ProjectShowcase />
          <Footer />
        </div>
  //   <Router>
  //     <div className="App">
  //       <NavBar />
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/projects" element={<ProjectShowcase />} />
  //       </Routes>
  //       <Footer />
  //     </div>
  //   </Router>
   
   );
}

export default App;