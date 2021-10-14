import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const H2 = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
const H4 = styled.p`
  font-size: 15px;
  opacity: 0.5;
`;
const P = styled.p`
  font-size: 14px;
`;

const Button = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 23px;
  color: #e6394a;
  background: transparent;
  transition: 0.4s;

  &:hover {
    opacity: 0.3;
  }
`;
function Blog({ image, title, date, info, onClick }) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 500,
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <>
      <section className='blog mb-4'>
        <div className='content'>
          <div className='blogImage text-center' data-aos='fade-down'>
            <img className='img-fluid' src={image} alt='blogimage' />
          </div>
          <div className='info pt-3'>
            <div data-aos='fade-up'>
              <div className='blog-title'>
                <H2>{title}</H2>
              </div>
              <div className='blog-date'>
                <H4>{date}</H4>
              </div>
              <div className='blog-info'>
                <P>
                  {info.length > 150 ? info.substring(0, 150) + '...' : info}
                </P>
              </div>
              <div>
                <Button onClick={onClick}>Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
