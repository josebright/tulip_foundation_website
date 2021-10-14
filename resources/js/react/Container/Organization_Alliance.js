import React from 'react';
import Navbar from '../Components/Navbar';
import Subheader from '../Components/SubHeader';
import Welcome from '../Components/Welcome';
import Image1 from '../Components/Image/subheader2.png';
import OrganizationForm from '../Components/Forms/organizationForm';
import Mission2 from '../Components/Mission/mission2';
import MissionImage from '../Components/Image/missionImage2.png';
import Footer from '../Components/Footer';
function Organization_Alliance() {
  return (
    <>
      <Navbar />
      <Welcome
        title='Organization Partner Program'
        desc='TULIP Foundation partners with like-minded socially conscious businesses who can help us in every 
        way imaginable to actualize our mission to foster inclusive communities and Create Social Change'
      />
      <Subheader
        desc='Together we can continue to work tirelessly to ensure that people have safe homes 
      and that residents receive the resources they need to move forward in life.'
        Image={Image1}
      />
      <OrganizationForm />
      <Mission2 Image={MissionImage} />
      <Footer />
    </>
  );
}

export default Organization_Alliance;
