import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Welcome({ title, desc }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 1000,
      once: false,
      //   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      //   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      //   offset: 120, // offset (in px) from the original trigger point
      //   // delay: 0, // values from 0 to 3000, with step 50ms
      //   //duration: 400, // values from 0 to 3000, with step 50ms
      //   easing: 'ease', // default easing for AOS animations
      //   once: false, // whether animation should happen only once - while scrolling down
      //   mirror: false, // whether elements should animate out while scrolling past them
      //   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      //
    });
  }, []);

  //const animation = ['fade-down', 'fade-down'];
  return (
    <>
      <section className='welcome'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mb-sm-4' data-aos='fade-right'>
              <h1 id='title '>{title}</h1>
            </div>
            <div className='col-md-6' data-aos='fade-left'>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Welcome;
