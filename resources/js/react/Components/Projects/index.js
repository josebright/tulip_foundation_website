import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import styled from 'styled-components';
//import { Project } from '../../Redux/constant';
import { Link } from 'react-router-dom';
import CountDown from '../CountDown/EventTimer';

const ProjectStyled = styled.div`
  /* border: 2px solid blue; */
  margin: 30px 0;
  padding: 10px 0;
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

const ProjectContent = styled.div`
  .date {
    opacity: 0.5;
  }

  button {
    background: transparent;
    color: orange;
    border-bottom: 1px solid;
    transition: 0.3s;
  }
  button:hover {
    transform: scale(1.2);
  }
  @media (max-width: 360px) {
    h3 {
      font-size: 20px;
    }
  }
`;

export default function Projects({
  image,
  order,
  title,
  date,
  desc,
  modal,
  link,
  companyname,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleModal = () => {
    if (show) {
      return (
        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header image={image} closeButton>
            {/* <img src={image} alt='' /> */}
            <img src={image} alt='' className='img-fluid' />
            <Modal.Title>
              <div className='row'>
                <div className='col-md-12'>
                  <h2>{title}</h2>
                </div>
              </div>
              {date ? (
                <CountDown
                  events={date
                    .replace('rd', '')
                    .replace('th', '')
                    .replace('st', '')
                    .replace('nd', '')}
                />
              ) : null}

              {/* str.replace(/#|_/g,''); */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='row'>
              <div className='col-12'>
                <p>{modal.article}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className='row'>
              {!link ? (
                <>
                  {' '}
                  <div className='col-md-6'>
                    <Link
                      to='/volunteer'
                      className='btn1 btn-d'
                      onClick={handleClose}
                    >
                      Volunteer
                    </Link>
                  </div>
                  <div className='col-md-6'>
                    <Link
                      to='/donation'
                      className='btn1 btn-d'
                      onClick={handleClose}
                    >
                      Donate
                    </Link>
                  </div>
                </>
              ) : (
                <div className='col-md-12'>
                  <button className='btn1 btn-d' onClick={handleClose}>
                    Close
                  </button>
                </div>
              )}
            </div>
          </Modal.Footer>
        </Modal>
      );
    }
  };
  return (
    <div className='container'>
      <ProjectStyled>
        <div className='row d-flex justify-content-start'>
          {/* {console.log(date.replace('th', ''))} */}
          <div
            className={
              order ? ` col-md-6 order-md-0 order-lg-3 ${order}` : 'col-md-6 '
            }
          >
            <ProjectImg>
              <img src={image} alt='' />
            </ProjectImg>
          </div>
          <div className='col-md-6  '>
            <ProjectContent>
              <h3>{title}</h3>
              {date ? (
                <p className='date'>
                  <span>Program Date: </span>
                  {date ? date : 'Check back for the date'}
                </p>
              ) : null}

              {companyname ? (
                <p className='companyname'>
                  {/* <span>By: </span> */}
                  <a
                    href={link}
                    rel='noreferrer'
                    target='_blank'
                    onClick={handleClose}
                    style={{ color: '#000 !' }}
                  >
                    {companyname}
                  </a>
                </p>
              ) : null}
              <p>{desc}</p>
              <button className='read-more' onClick={handleShow}>
                Read More
              </button>
            </ProjectContent>
          </div>
        </div>
      </ProjectStyled>
      {handleModal()}
    </div>
  );
}
