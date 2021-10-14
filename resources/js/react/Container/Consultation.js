import React from 'react';
import Navbar from '../Components/Navbar';
import Subheader from '../Components/SubHeader';
import Welcome from '../Components/Welcome';
import Image1 from '../Components/Image/trainningImage.png';
import ConsultationForm from '../Components/Forms/ConsultationForm';
import Footer from '../Components/Footer';
function Consultation() {
  return (
    <>
      <Navbar />
      <Welcome
        title='What would you like to know?'
        desc='TULIP Foundation partners with like-minded socially conscious businesses who can help us in every way 
        imaginable to actualize our mission to foster inclusive communities and Create Social Change'
      />
      <Subheader
        desc='Together we can continue to work tirelessly to ensure that people have safe homes and that residents 
        receive the resources they need to move forward in life.'
        Image={Image1}
      />
      <ConsultationForm />
      <Footer />
    </>
  );
}

export default Consultation;
