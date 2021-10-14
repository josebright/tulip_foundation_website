import React from 'react';
import styled from 'styled-components';

function Subheader({ Image, height, desc }) {
  const Header = styled.section`
    position: relative;
    border: 2px solid beige;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.3) 2.23%,
        rgba(230, 57, 74, 0.5) 82.96%
      ),
      url(${Image});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;

    // padding: 10rem 0;
  `;

  const Center = styled.div`
    /* border: 5px solid #ffff00; */
    display: flex;
    padding: 7rem 0;
    // height: 400px;
    align-items: center;
    color: #fff;
    // height: ${height};
    @media (max-width: 360px) {
      padding: 4rem 0;
    }
  `;
  return (
    <>
      <Header className='subheader'>
        <div className='container'>
          <Center>
            <p>{desc}</p>
          </Center>
        </div>
      </Header>
    </>
  );
}

export default Subheader;
