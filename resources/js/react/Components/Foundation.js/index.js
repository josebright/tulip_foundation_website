import React, { useEffect } from 'react';
import group from '../Image/Group.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
function Foundation() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      // delay: 1000,
    });
  }, []);
  return (
    <>
      <section className='foundation'>
        <div className='container'>
          <div className='found-image'>
            <img src={group} alt='foundation' data-aos='flip-down' />
          </div>
          <div className='row no-gutters'>
            <div className='col-md-12 col-lg-7'>
              <div className='found-img1' data-aos='zoom-in'></div>
            </div>
            <div className='col-md-12 col-lg-5 center'>
              <div className='  ml-4 mt-3'>
                <p className='' data-aos='fade-down'>
                  Over one billion people live in a slum. That is 14% of the
                  world’s population. Families living without safety, stability,
                  education and nutrition lask diginity and hope for the future.
                  TULIP FOUNDATION, we engage with residents by listening,
                  responding and supporting them in achieveing their dreams. We
                  provide them with affordable housing, relieve porverty and
                  sickness, advance education, security, and preserve good
                  health.
                </p>
                <div className=' my-1' data-aos='fade-up'>
                  <Link className='btn1 btn-d' to='/about'>
                    Discover the Foundation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Foundation;
