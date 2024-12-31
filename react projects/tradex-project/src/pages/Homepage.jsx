import React from 'react';
import CarouselComponent from '../Components/CarouselComponent';
import "../assets/css/css.css";
import "../assets/css/style.css";
import AboutUsComponent from '../Components/AboutUsComponent';
import StatsSection from "../Components/StatsSection";
import ServicesSection from "../Components/ServicesSection";
import  OurWork from "../Components/OurWork";
import  ImageSection from"../Components/ImageSection"; 
import TeamSection from"../Components/TeamSection";
import Pricingtable from"../Components/Pricingtable";
import SubscribeSection from "../Components/SubscribeSection";
import TestimonialSection from '../Components/TestimonialSection';
import LatestBlogSection from"../Components/LatestBlogSection";
import MeetOurClients from"../Components/MeetOurClients";
import SectionComponent from "../Components/SectionComponent";
function Home() {
    return (
        <> 
        <CarouselComponent/><br></br><br></br><br></br>
        <AboutUsComponent/><br></br><br></br><br></br><br></br><br></br>
        <StatsSection/>
        <ServicesSection/>
        < OurWork/>
        <ImageSection />
        <TeamSection/>
      <Pricingtable/>
      <SubscribeSection/>
      <TestimonialSection />
      <LatestBlogSection/><br></br>
      <MeetOurClients/>
      <SectionComponent/>
        </>
    );
  };
  
     
  
  export default Home;