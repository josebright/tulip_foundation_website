import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { connect } from 'react-redux';
import { HeroAction } from '../../Redux/actions';
import { imageApi } from '../../urlconfig';
import 'animate.css/animate.min.css';
//
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

import { Carousel } from 'react-bootstrap';
// import Image1 from '../Image/carousel1.png';
// import Image2 from '../Image/carousel2.png';
// import Image3 from '../Image/carousel3.png';
// import Image4 from '../Image/carousel4.png';
// A Home for Everyone
function Index({ HeroAction, Hero }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    HeroAction();
  }, [HeroAction]);

  //console.log(Hero);
  return (
    <Carousel
      autoPlay={true}
      interval={9000}
      // controls={false}
      indicators={false}
    >
      {Hero &&
        Hero.hero.map((hero) => (
          <Carousel.Item className='heroNew ' key={hero.id}>
            <img
              className='d-block w-100 '
              src={imageApi + hero.picture}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3 className='animate__animated animate__backInDown animate__slow '>
                {hero.title}
              </h3>
              {/* <p>{hero.title}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

const mapStateToProps = (state) => ({
  Hero: state.Hero,
});

const mapDispatchToProps = (dispatch) => ({
  HeroAction: () => dispatch(HeroAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
