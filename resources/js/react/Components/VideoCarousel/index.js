import React from 'react';
import Slider from 'react-slick';
// import Carousel from './carousel';
import { connect } from 'react-redux';
import { VideoAction } from '../../Redux/actions';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CenterMode({ Videos }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='container mb-5'>
      <h2 className='text-center h1 text-uppercase mb-5'> Event Videos</h2>
      <Slider {...settings}>
        {Videos &&
          Videos.Videos.map((video) => (
            <div style={{ border: '2px solid blue' }}>
              <iframe
                class='responsive-iframe'
                src={video.url}
                height={'400px'}
                width={'100%'}
                title={video.title}
              ></iframe>
            </div>
          ))}
      </Slider>
    </div>
  );
}

const mapStateToProps = (state) => ({
  Videos: state.Videos,
});

const mapDispatchToProps = (dispatch) => ({
  VideoAction: () => dispatch(VideoAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CenterMode);
