import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Trainning({ title, info, details, button, link }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section className='training'>
        <div className='container text-center py-3'>
          <h3 className='my-5 ' data-aos='fade-down'>
            {title}
          </h3>
          <p className='my-4' data-aos='fade-up'>
            <span className='d-block'>{info ? info : null}</span>
            {details ? details : null}
          </p>

          <Link
            to={`/${link}`}
            data-aos='fade-up'
            className='btn1 btn-d px-5   my-2 '
          >
            {button}
          </Link>
        </div>
      </section>
    </>
  );
}

export default Trainning;
