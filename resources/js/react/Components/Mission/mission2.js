import React from 'react';
import styled from 'styled-components';

const Mission = styled.section`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 2.23%,
      rgba(230, 57, 74, 0.5) 82.96%
    ),
    url(${(prop) => prop.Image});
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  @media (max-width: 360px) {
    height: 300px;
  }
`;

const Pstyled = styled.p`
  width: 217px;
  position: absolute;
  right: 190px;
  display: flex;
  align-items: center;
  justify-content: right;
  // transform: translateY(-50%);
  @media (max-width: 360px) {
    width: 100% !important;
    position: relative !important;
    transform: none !important;
    right: 0 !important;
    text-align: center;
  }
  @media (max-width: 360px) {
  }
`;
function Mission2({ Image }) {
  return (
    <>
      <Mission Image={Image} className='mission2'>
        <div className='container'>
          <Pstyled>
            Our Mission is to create inclusive communities and create social
            change. Home os where vibrant, stable families and communities
            begin.
          </Pstyled>
        </div>
      </Mission>
    </>
  );
}

export default Mission2;
