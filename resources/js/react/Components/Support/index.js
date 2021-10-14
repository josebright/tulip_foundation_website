import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { AudienceAction } from '../../Redux/actions';
import PersonatHome from '../Image/Person at Home.png';
import Admin from '../Image/Administrative Tools.png';
import Vector from '../Image/Vector.png';

function Support({ colour, Audience, AudienceAction, classNameName, ...rest }) {
  useEffect(() => {
    AudienceAction();
  }, [AudienceAction]);
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  //console.log(Audience.Audience[0]);
  const Aud = Audience.Audience[0];

  return (
    <>
      {Aud ? (
        <section className='supports' style={{ backgroundColor: `${colour}` }}>
          <div className='container'>
            <div className='py-5'>
              <p className='text-center mb-5  support-info' data-aos='fade-down'>
                We have helped individuals of all areas of life, offering them
                supports in areas of housing, education, health, social welfare
              </p>
              <div className='row'>
                <div className='col-md-4 mb-md-3' data-aos='fade-down'>
                  <div className='icon text-center my-2'>
                    <img src={PersonatHome} alt='' />
                  </div>
                  <div className='text-center support-info'>
                    <span className='d-block'>
                      <CountUp
                        start={1}
                        end={Number(
                          Aud && Aud.resident ? Aud.resident.figure : null
                        )}
                        redraw={true}
                      >
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </span>
                    {Aud && Aud.resident ? Aud.resident.resident : null}
                  </div>
                </div>
                <div className='col-md-4 mb-md-3' data-aos='fade-down'>
                  <div className='icon text-center my-2'>
                    <img src={Admin} alt='' />
                  </div>
                  <div className='text-center support-info'>
                    <span className='d-block'>
                      <CountUp
                        start={1}
                        end={Number(
                          Aud && Aud.service ? Aud.service.figure : null
                        )}
                        redraw={true}
                      >
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </span>
                    {Aud && Aud.service ? Aud.service.service : null}
                  </div>
                </div>
                <div className='col-md-4 mb-md-3' data-aos='fade-down'>
                  <div className='icon text-center my-2'>
                    <img src={Vector} alt='' />
                  </div>
                  <div className='text-center support-info'>
                    <span className='d-block'>
                      <CountUp
                        start={1}
                        end={Number(
                          Aud && Aud.country ? Aud.country.figure : null
                        )}
                        duration={5}
                        redraw={true}
                      >
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </span>
                    {Aud && Aud.country ? Aud.country.country : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => ({
  Audience: state.Audience,
});

const mapDispatchToProps = (dispatch) => ({
  AudienceAction: () => dispatch(AudienceAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Support);
// export default Support;
