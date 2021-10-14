import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

//https://restcountries.eu/rest/v2/all

const DonationImage = styled.img`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 2.23%,
      rgba(230, 57, 74, 0.5) 82.96%
    ),
    url(${(prop) => prop.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 70vh;
  min-width: 100%;

  @media (max-width: 991px) {
    background-size: cover;
    height: 60vh;
    width: 100%;
  }
`;
function Donation({ title, info, about, image }) {
  useEffect(() => {
    Aos.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <>
      <section className='donation'>
        <div className='container my-4 px-5'>
          <div className='row '>
            <div className='col-md-6 pb-md-2 '>
              <DonationImage
                image={image}
                className='donation-image'
                data-aos='zoom-in-up'
              ></DonationImage>
            </div>
            <div className='col-md-6 center  '>
              <div className=''>
                <h3 className='text-center my-3' data-aos='fade-down'>
                  {title}
                </h3>
                <p
                  className='text-center my-4'
                  data-aos='fade-up'
                  data-aos-easing='linear'
                  data-aos-duration='1500'
                >
                  <span className='d-block'>
                    {info}
                    <span className='d-block'></span>
                  </span>
                  {about}
                </p>
                <Link
                  to='/donation'
                  className='btn1 btn-d btn-block text-center'
                  data-aos='fade-up'
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Donation;
