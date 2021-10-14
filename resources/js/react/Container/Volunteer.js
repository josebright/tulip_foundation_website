import React from 'react';
import Navbar from '../Components/Navbar';
import Subheader from '../Components/SubHeader';
import Welcome from '../Components/Welcome';
import Image1 from '../Components/Image/volunteerImage.png';
import VolunteerForm from '../Components/Forms/VolunteerForm';
import Mission2 from '../Components/Mission/mission2';
import MissionImage from '../Components/Image/missionImage2.png';
import Footer from '../Components/Footer';
//import OrganizationForm from '../Components/Forms/organizationForm';
function Volunteer() {
  return (
    <>
      <Navbar />
      <Welcome
        title='Partake in our Program'
        desc='TULIP Foundation partners with like-minded socially conscious businesses who can help us 
        in every way imaginable to actualize our mission to foster inclusive communities and Create Social Change'
      />
      <Subheader
        desc='Together we can continue to work tirelessly to ensure that people have safe homes and that residents 
        receive the resources they need to move forward in life.'
        Image={Image1}
      />

      <VolunteerForm />
      <Mission2 Image={MissionImage} />
      <Footer />
    </>
  );
}

export default Volunteer;
