import React from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../Components/Navbar';
import Welcome from '../Components/Welcome';
import Hero from '../Components/Hero';
import Foundation from '../Components/Foundation.js';
import Support from '../Components/Support';
import Mission from '../Components/Mission';
import Donation from '../Components/Donation.js';
import Program from '../Components/Program';
import Trainning from '../Components/Trainning';
//import Donate from '../Components/Donate';
import Footer from '../Components/Footer';

//import ImageGallery from 'react-image-gallery';

import MissionImage from '../Components/Image/Rectangle8.jpg';
import DonationImage from '../Components/Image/Rectangle9.png';
import CategoriesPage from '../Components/Categories.js';
function Home() {
  // const dispatch = useDispatch();
  const Categories = useSelector((state) => state.Categories);
  //const auth = useSelector(state => state.token)
  //console.log(Categories);
  // useEffect(() => {
  //   dispatch(CategoriesAction());
  // }, [dispatch, CategoriesAction]);
  return (
    <>
      <Navbar />

      <Welcome
        title='Welcome to The Tulip Foundation'
        desc='Imagine a world without social care Disparity
        TULIP Foundation is working to bring about social change. You too can be partakers of this mission'
      />
      <Hero />
      <Foundation />
      <Support colour='#0000' />
      <Mission
        Image={MissionImage}
        text='Our Mission is to create inclusive communities and create social change.
          Home is where vibrant, stable families and communities begin. It is the beginning
           of a life with safety, security and stability as a foundation.
        TULIP FOUNDATION is working to eliminate homelessness, preserve good health, 
        relieve poverty for residents of communities.'
      />
      <Donation
        title='Send Donation'
        info=' Your donations are vital in supporting our livesaving
                    services'
        about='TULIP FOUNDATION can custom tailor a donation or sponsorship
        program according to your need.'
        image={DonationImage}
      />

      <Program />
      <CategoriesPage Categories={Categories} />
      <Trainning
        title='Training / Consultation'
        info='One of the objectives of the TULIP Foundation is to provide
        training for residents of communities.'
        details='TULIP Foundation partners with other NGOs to build programs that
      will be of benefit to residents in areas of skill acquisition,
      training, and consultation.'
        button=' Contact Us'
        link='training'
      />
      {/* <Donate
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue massa
            nulla sed ullamcorper. Amet pulvinar.'
      /> */}
      <Footer />
    </>
  );
}

export default Home;
