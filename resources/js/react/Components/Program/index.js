import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';
function Program() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      delay: 500,
    });
  }, []);
  return (
    <>
      <section className='program'>
        <div className='container '>
          {/* <div className='program-content'>
            <div class='row justify-content-start'>
              <div class='col-md-6 col-lg-5'>
                <div class='program-image p-image1'></div>
              </div>
              <div class='col-md-6 col-lg-5 mb-2 center'>
                <div class=' pt-5 '>
                  <h3 class='pt-4'>Organization Alliance Program</h3>
                  <p class='py-2'>
                    The “Organization Partner Program” is tailored around
                    collaboration with philanthropic organizations, private
                    sector individuals, government organizations on special
                    programs designed to deliver project benefits and
                    enhancements that directly transfer into value added
                    componenets for projects.
                  </p>
                  <Link to='/organize' class='btn1 btn-d  '>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

          <div className='program-content'>
            <div className='row justify-content-start'>
              <div
                className='col-md-12 col-lg-5 center offset-md-1  order-3'
                id='order1'
              >
                <div className=' py-5'>
                  <h3 className='py-3' data-aos='fade-down'>
                    Volunteer
                  </h3>
                  <p className='py-3' data-aos='fade-down'>
                    Everyone makes a difference. Share your skills and knowledge
                    to make a difference to other people’s lives
                  </p>
                  <Link
                    to='/volunteer'
                    className='btn1 btn-d '
                    data-aos='fade-up'
                  >
                    Join Us
                  </Link>
                </div>
              </div>
              <div className='col-md-12 col-lg-5 mt-3 order-1' id='order2'>
                <div
                  className='program-image p-image2 '
                  data-aos='zoom-in'
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Program;
