import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import EventNews from '../Components/Event';
import { connect } from 'react-redux';
import { EventAction, VideoAction } from '../Redux/actions';
import { imageApi } from '../urlconfig';
import moment from 'moment';
// import Event1 from '../Components/Image/event1.png';
// import Event2 from '../Components/Image/event2.png';
import Footer from '../Components/Footer';
import VideoCarousel from '../Components/VideoCarousel';

//styled component
const EventStyle = styled.div`
  padding-top: 150px !important;
  padding-bottom: 150px;
`;

function Event({ EventAction, Event, Videos, VideoAction }) {
  useEffect(() => {
    EventAction();
    VideoAction();
  }, [EventAction, VideoAction]);
  //Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5); //setPostPerPage
  const pageNumbers = [];

  const indexofLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexofLastPost - postPerPage;
  const currentPosts = Event.Event.slice(indexofFirstPost, indexofLastPost);
  for (let i = 1; i <= Math.ceil(Event.Event.length / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <EventStyle>
        <div className='my-5'>
          {Event &&
            currentPosts.map((event) => (
              <>
                {/* {console.log(event)} */}
                <EventNews
                  key={event.id}
                  Image={`${imageApi + event.picture[0]}`}
                  title={event.title}
                  date={`${moment(event.created_at).format('MMM YYYY')}`}
                  info={event.article}
                  pictures={event.picture}
                />
              </>
            ))}
        </div>
        {Event.Event.length > 1 ? (
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
        ) : null}
      </EventStyle>

      <VideoCarousel />
      <Footer />
    </>
  );
}
const mapStateToProps = (state) => ({
  Event: state.Event,
  Videos: state.Videos,
});

const mapDispatchToProps = (dispatch) => ({
  EventAction: () => dispatch(EventAction()),
  VideoAction: () => dispatch(VideoAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
