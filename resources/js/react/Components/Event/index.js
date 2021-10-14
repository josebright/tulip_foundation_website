import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import styled from 'styled-components';
import { imageApi } from '../../urlconfig';
import SimpleReactLightBox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

const Section = styled.section`
  background: #fff;
  margin: 52px 0 !important;
  padding: 10px 0;

  .content p {
    font-size: 14px;
  }
`;

// const SectionImg = styled.div`
//   // background-image: linear-gradient(
//   //     180deg,
//   //     rgba(0, 0, 0, 0.3) 2.23%,
//   //     rgba(230, 57, 74, 0.5) 82.96%
//   //   ),
//   //   url(${(prop) => prop.Image});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 60vh;
//   width: 33vw;
//   // overflow: hidden;

//   @media (max-width: 991px) {
//     width: 100%;
//     margin-bottom: 0.5em;
//   }
// `;
const H1 = styled.h1`
  font-size: 20px;
`;

const H4 = styled.p`
  font-size: 15px;
  opacity: 0.5;
`;
const ProjectImg = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 360px) {
    margin: 10px 0;
  }
`;

function Event({ Image, title, date, info, pictures, pagination }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleModal = () => {
    if (show) {
      return (
        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton>
            <img src={Image} alt='' className='img-fluid' />
          </Modal.Header>
          <Modal.Title>
            <h2>{title}</h2>
          </Modal.Title>
          <Modal.Body>
            <div> {info}</div>
            <div className='mt-5'>
              <SimpleReactLightBox>
                <SRLWrapper>
                  <div class='row '>
                    {pictures.map((img, index) => (
                      <div class='col-lg-4 col-md-12 mb-4 mb-lg-0' key={index}>
                        <div className='light-img'>
                          <a href={imageApi + img}>
                            <img
                              src={imageApi + img}
                              class='w-100 shadow-1-strong rounded mb-4 img-thumbnail'
                              alt=''
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </SRLWrapper>
              </SimpleReactLightBox>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className='btn1 btn-d' onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      );
    }
  };
  return (
    <>
      <Section className='event'>
        <div className='container'>
          <div className='row justify-content-start'>
            <div className='col-md-5'>
              {/* {console.log(Image)} */}
              <ProjectImg>
                <img src={Image} alt='' />
              </ProjectImg>
              {/* <SectionImg className='event-image '>
                <img src={Image} alt='' />
              </SectionImg> */}
            </div>
            <div className='col-md-5 center offset-lg-1 offset-md-0'>
              <div className=''>
                <div className='content '>
                  <div className='content-info'>
                    <H1>{title}</H1>
                    <H4>{date}</H4>
                  </div>
                  <div>
                    <p>
                      {info && info.length > 150
                        ? info.substring(0, 150) + '...'
                        : info}
                    </p>
                  </div>
                </div>
                <button className='read-more' onClick={handleShow}>
                  Read More
                </button>
              </div>
            </div>
            {handleModal()}
          </div>
        </div>
      </Section>
    </>
  );
}

export default Event;
