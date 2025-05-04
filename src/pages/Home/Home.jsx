import React, { useState } from 'react';
import calculatorImage from '../../assets/calculator.jpg';
import chartImage from '../../assets/financial-chart.jpg';
import officeImage from '../../assets/office.jpg';
import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';
import './Home.css'
import { slides } from '../../data/couroselData.json'
import Courosel from '../../components/Courosel/Courosel';
import ExperienceSection from '../ExperienceSection/ExperienceSection';
import WhyChooseUsSection from '../../components/WhyChooseUs/WhyChooseUsSection';
import IndustrySection from '../../components/IndustrySection/IndustrySection';
import GallerySection from '../../components/GallerySection/GallerySection';
import TeamDetails from '../../components/TeamDetails/TeamDetails';
import ServiceProvide from '../../components/ServiceProvide/ServiceProvide'
import SolutionsOffer from '../../components/SolutionsOffer/SolutionsOffer';
import AboutSection from '../../components/About/AboutSection';

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredGalleryImage, setHoveredGalleryImage] = useState(null);
  const data = [
    {
      src:"https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D",
      alt:"This is image1",
      text:"Welcome to Agrawal Bhaiya & Company",
      subText:"Your trusted partner in accounting, taxation, and financial advisory."
  },
  {
      src:"https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWNjb3VudGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      alt:"This is image2",
      text: "Welcome to Agrawal Bhaiya & Company",
      subText:"Your trusted partner in accounting, taxation, and financial advisory."

  },
  {
      src:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFjY291bnRpbmd8ZW58MHx8MHx8fDA%3D",
      alt:"This is image3",
      text: "Welcome to Agrawal Bhaiya & Company",
      subText:"Your trusted partner in accounting, taxation, and financial advisory."

  }
  ];
  return (
    <div style={styles.container}>
      <Courosel data={data} autoPlay={true} interval={3000} />
  
      <div className="block"><AboutSection /></div>
      <div className="block"><GallerySection /></div>
      <div className="block"><SolutionsOffer /></div>
      {/* <div className="block"><ExperienceSection /></div> */}
      <div className="block"><ServiceProvide /></div>
      <div className="block"><IndustrySection /></div>
      <div className="block"><TeamDetails /></div>
      <div className="block"><WhyChooseUsSection /></div>
    </div>
  );
  
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '5%',
    background: 'linear-gradient(to bottom, #f7f9fc, #e8eff7)', // Gradient background
    color: '#333',
  },
  title: {
    fontSize: 'clamp(1.8rem, 5vw, 3rem)', // Adjusts size dynamically between 1.8rem and 3rem
    color: 'white',
    marginBottom: '10px',
    position:"relative",
    top:"10rem",
    zIndex:'20'
  },
  subtitle: {
    fontSize: '3rem', // Adjusts dynamically for responsiveness
    marginBottom: '20px',
    color: 'white',
    position:"relative",
    top:"10.5rem",
    zIndex:'20'
  },
  callToAction: {
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#2b6777',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonSecondary: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#2b6777',
    backgroundColor: '#f7f9fc',
    border: '2px solid #2b6777',
    borderRadius: '5px',
    marginLeft: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },

  gallerySection: {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  galleryTitle: {
    fontSize: '1.8em',
    color: '#2b6777',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
};

export default Home;