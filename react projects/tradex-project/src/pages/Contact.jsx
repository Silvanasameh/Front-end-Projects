import React from 'react';
import CarouselComponent from '../Components/CarouselComponent';
import "../assets/css/css.css";
import "../assets/css/style.css";
import ContactHeader from '../Components/ContactHeader';
import ContactInfo from '../Components/ContactInfo';
import ContactForm from '../Components/ContactForm';
import SectionComponent from "../Components/SectionComponent";
import Footer from "../Components/Footer";
import ScrollToTopButton from "../Components/ScrollToTopButton";
function Contact() {
    return (
        <> 
      <ContactHeader />
      <ContactInfo /><br></br><br></br><br></br><br></br><br></br>
      <ContactForm /><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <SectionComponent/>
        </>
    );
  };
  
     
  
  export default Contact;