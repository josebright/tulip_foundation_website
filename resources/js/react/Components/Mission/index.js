import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MissionStyled = styled.section`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 2.23%,
      rgba(230, 57, 74, 0.5) 82.96%
    ),
    url(${(prop) => prop.Image});
  background-size: cover;
  background-position: center;
  padding: 80px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;

  color: #fff;
`;
const P = styled.p`
  padding: 6em 0 1em 0;
  line-height: 30px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 39px;
  @media (max-width: 360px) {
    padding: 1rem 0;
  }
`;
function Mission({ Image, text }) {
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
      <MissionStyled Image={Image} data-aos='fade-down'>
        <div className='container'>
          <P data-aos='fade-up'>{text}</P>
        </div>
      </MissionStyled>
    </>
  );
}

export default Mission;
