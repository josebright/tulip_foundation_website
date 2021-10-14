import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import { connect } from 'react-redux';
import Blog from '../Components/Blog';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { imageApi } from '../urlconfig';
import moment from 'moment';
import Footer from '../Components/Footer';
import SimpleReactLightBox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

import { PressAction } from '../Redux/actions';

//Image
// import blog1 from '../Components/Image/blog1.png';
// import blog2 from '../Components/Image/blog2.png';
// import blog3 from '../Components/Image/blog3.png';
import header3 from '../Components/Image/header3.png';

//styled Component
const StyledBlog = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;

const ModalHeader = styled(Modal.Header)`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  /* backdrop-filter: inherit; */
  height: 200px;
  width: 100%;
  /* border: 2px solid blue; */
  filter: brightness(0.4);
  object-fit: cover;
`;
function Press({ Press, PressAction }) {
  const [show, setShow] = useState(false);
  //console.log(Press);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [readModal, setReadModal] = useState('');

  //Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15); //setPostPerPage
  const pageNumbers = [];

  const indexofLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexofLastPost - postPerPage;
  const currentPosts = Press.Press.slice(indexofFirstPost, indexofLastPost);
  for (let i = 1; i <= Math.ceil(Press.Press.length / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    PressAction();
  }, [PressAction]);

  const handleSubmit = (blog) => {
    setReadModal(blog);
    // console.log(blog);
    handleShow();
  };
  const ReadMoreModal = () => {
    if (setShow && readModal) {
      return (
        <Modal show={show} onHide={handleClose} size='lg' centered>
          <ModalHeader closeButton>
            <img
              src={imageApi + readModal.picture[0]}
              alt=''
              className='img-fluid'
            />
          </ModalHeader>
          <Modal.Title className='text-center'>
            {console.log(readModal)}
            <h2>{readModal.title}</h2>
          </Modal.Title>
          <Modal.Body>
            <div>{readModal.article}</div>
          </Modal.Body>
          <div className='mt-5'>
            <SimpleReactLightBox>
              <SRLWrapper>
                <div class='row'>
                  {readModal &&
                    readModal.picture.map((img, index) => (
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
        </Modal>
      );
    }
  };

  return (
    <>
      <Navbar />
      <Header Image={header3} title='Our Journey &#38; Stories' height='450' />
      <StyledBlog className='container'>
        <div className='row'>
          {Press && Press.Press.length < 1 ? null : !Press.loading ? (
            currentPosts.map((blog) => (
              <div className='col-md-4'>
                <Blog
                  className='blog-space'
                  image={imageApi + blog.picture[0]}
                  date={`  ${moment(blog.created_at).format('MMM DD, YYYY')}`}
                  title={
                    blog.title && blog.title.length > 150
                      ? blog.title.substring(0, 150) + '...'
                      : blog.title
                  }
                  info={blog.article}
                  onClick={() => handleSubmit(blog)}
                />
              </div>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
          {ReadMoreModal()}
        </div>
      </StyledBlog>
      <div className='mb-5'>
        <nav>
          <ul className='pagination py-3'>
            <li className='page-item'>
              <button
                className='page-link'
                aria-label='Previous'
                onClick={() => {
                  paginate(1);
                  window.scrollTo(0, 0);
                }}
              >
                <span aria-hidden='true'>&laquo;</span>
                <span className='sr-only'>Previous</span>
              </button>
            </li>
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={
                  currentPage === number ? 'page-item active' : 'page-item'
                }
              >
                <button
                  onClick={() => {
                    paginate(number);
                    setCurrentPage(number);
                    window.scrollTo(0, 0);
                  }}
                  className='page-link'
                >
                  {number}
                </button>
              </li>
            ))}
            {/* {console.log(currentPage)} */}
            <li className='page-item'>
              <button
                className='page-link'
                aria-label='Next'
                onClick={() => {
                  paginate(pageNumbers.length);
                  window.scrollTo(0, 0);
                }}
              >
                <span aria-hidden='true'>&raquo;</span>
                <span className='sr-only'>Next</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </>
  );
}
const mapStateToProps = (state) => ({
  Press: state.Press,
});

const mapDispatchToProps = (dispatch) => ({
  PressAction: () => dispatch(PressAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Press);
