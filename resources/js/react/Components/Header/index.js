import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.section`
  position: relative;
  // border: 2px solid beige;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 2.23%,
      rgba(230, 57, 74, 0.5) 82.96%
    ),
    url(${(prop) => prop.Image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: ${(prop) => prop.height};
  max-width: 100vw;

  @media (max-width: 360px) {
    height: 400px;
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 62px;
  width: calc(40% - 10%);
  left: 5%;
  font-size: 20px;

  h1 {
    font-size: 22px !important;
    text-transform: uppercase;
    line-height: 29px;
    letter-spacing: 1px;
  }
  @media (max-width: 360px) {
    width: calc(50%);
  }
`;
function Header({ Image, height, title, titleTop, titleBottom }) {
  // const Content = styled.div`
  //   position: absolute;

  // `;
  return (
    <>
      <HeaderStyle Image={Image} height={height} className='header'>
        <div className='container'>
          <Content>
            <div className='header-main'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='content'>
                    <h1>
                      {title ? title : null} {titleTop ? titleTop : null}
                    </h1>
                  </div>
                  {titleBottom ? <br /> : null}
                  {titleBottom ? titleBottom : null}
                </div>
              </div>
            </div>
          </Content>
        </div>
      </HeaderStyle>
    </>
  );
}

export default Header;
