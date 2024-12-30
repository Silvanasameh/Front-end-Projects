import React from 'react';
import Navbar from '../Components/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/contact.css';
import ContactForm from '../Components/ContactForm';
import ContactInfoSection from "../Components/ContactInfoSection";
import PartnersSection from '../Components/PartnersSection';
import FindAgent from '../Components/FindAgent';
import Footer from '../Components/Footer';
import ScrollToTopButton from "../Components/ScrollToTopButton";

function Contact() {
    return (
        <>
        <ContactForm/>
        <div className='empty-section' ></div>
        <ContactInfoSection/><br></br><br></br>
        <PartnersSection/><br></br><br></br>
        <FindAgent/>
        <div >
      <ScrollToTopButton />
    </div>
        </>
    );
  };
  
     
  
  export default Contact;