//import React from 'react';
import React,{useState, useEffect} from 'react'
import './home.css'
const images =[
  'url(path/to/image1.jpg)',
  'url(path/to/image2,jpg)'
];

const texts =[
  'Welcome to Neuvurah',
  'Smart Energy Solutions',
  'Innovating for Cleaner Future',
]
// home component 
const Home = () => {
  const [CurrentImage, setCurrentImage] = useState(0);
  const [CurrentText, setCurrentText] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>{
      setCurrentImage((prev) => (prev + 1)% images.length);
      setCurrentText((prev) => (prev + 1)% texts.length)
    }, 5000);
    return () => clearInterval(intervalId)
  },[])


  return (
    // <div style={{ textAlign: 'center', padding: '2rem' }}>
    //   <h1 style={{ color: '#99CC33' }}>NeuvuRah</h1>
    //   <h2>Smart Energy Solutions</h2>
    //   <p>Clean solutions, innovation, affordable</p>
    // </div>
    <section id="home" className="home-container" style={{ backgroundImage: images[CurrentImage] }}>
    <div className="text-container">
      <h1 className="animated-text">{texts[CurrentText]}</h1>
    </div>
  </section>

  );
};

export default Home;