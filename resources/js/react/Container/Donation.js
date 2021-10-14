import React from 'react';
import Navbar from '../Components/Navbar';
import Welcome from '../Components/Welcome';
import Subheader from '../Components/SubHeader';
//import Mission from '../Components/Mission';
import Footer from '../Components/Footer';
// import Hero from '../Components/Hero';
// import Foundation from '../Components/Foundation.js';
// import Support from '../Components/Support';
// import Mission from '../Components/Mission';
// // import Donation from '../Components/Donation.js';
// import Program from '../Components/Program';
// import Trainning from '../Components/Trainning';
// import Donate from '../Components/Donate';
// import Footer from './Footer';

//Image for Header
import Image1 from '../Components/Image/Header2.png';
import DonatationForm from '../Components/DontationForm';
import MissionImage from '../Components/Image/missionImage2.png';
import Mission2 from '../Components/Mission/mission2';

function Donation() {
  return (
    <>
      <Navbar />
      <Welcome
        title='Donate To The TULIP FOUNDATION'
        desc='TULIP FOUNDATION, we care, we believe that everyone, everywhere should have a healthy, affordable place to call home, and a community to be proud to identify with'
      />
      <Subheader
        Image={Image1}
        height='400px'
        desc='Together we can continue to work tirelessly to ensure that people
              have safe homes and that residents receive the resources they need
              to move forward in life.'
      />
      <DonatationForm />
      <Mission2
        Image={MissionImage}
        text='Our Mission is to create inclusive communities and create social change.
Home os where vibrant, stable families and communities begin. '
      />
      <Footer />
    </>
  );
}

export default Donation;
