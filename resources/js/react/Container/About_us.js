import React from 'react';
import Navbar from '../Components/Navbar';
import Welcome from '../Components/Welcome';
import Header from '../Components/Header';
import Overview from '../Components/Overview';
import Support from '../Components/Support';
import Team from '../Components/Team';
import Mission from '../Components/Mission';
// import Donation from '../Components/Donation.js';
// import Program from '../Components/Program';
import Trainning from '../Components/Trainning';
//import Donate from '../Components/Donate';
import Footer from '../Components/Footer';

//Adding Image for Mission
import Image from '../Components/Image/Rectangle21.jpg';
import Image1 from '../Components/Image/header.png';
import Partners from '../Components/Partners';
function About_us() {
  return (
    <>
      <Navbar />
      <Welcome
        title='Why do we do this?'
        desc='Together we can continue to work tirelessly to ensure that people have safe homes and that residents receive the resources they need to move forward in life'
      />
      <Header Image={Image1} title='GET TO KNOW US' height='550px' />
      <Overview />
      <Support colour='rgba(226, 226, 226, 0.5)' />
      <Team />
      <Trainning
        title='Organization Alliance Program'
        info='The “Organization Partner Program” is tailored around collaboration with philanthropic organizations, private sector individuals, government organizations on special programs designed to deliver project 
        benefits and enhancements that directly transfer into value added componenets for projects.'
        // details='TULIP Foundation partners with other NGOs to build programs that
        // will be of benefit to residents in areas of skill acquisition,
        // training, and consultation.'
        button='Join Us'
        link='organize'
      />
      <Partners title='Our Partners' />
      <Mission
        Image={Image}
        text='Our Mission is to create inclusive communities and create social
            change. Home is where vibrant, stable families and communities
            begin. It is the beginning of a life with safety, security and
            stability as a foundation. TULIP FOUNDATION is working to eliminate
            homelessness, preserve good health, relieve poverty for residents of
            communities.'
      />
      <Trainning
        title='Training / Consultation'
        info='One of the objectives of the TULIP Foundation is to provide training for residents of communities.
        TULIP Foundation partners with other NGOs to build programs that will be of benefit to residents in areas 
        of skill acquisition, training, and consultation.'
        // details='TULIP Foundation partners with other NGOs to build programs that
        // will be of benefit to residents in areas of skill acquisition,
        // training, and consultation.'
        button='Contact Us'
        link='training'
      />
      {/* <Donate
        text='Imagine a world without social care Disparity
          TULIP Foundation is working to bring about social change. You too can be partakers of this mission'
      /> */}
      <Footer />
    </>
  );
}

export default About_us;
