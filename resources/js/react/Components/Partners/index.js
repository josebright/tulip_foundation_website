import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PartnerAction } from '../../Redux/actions';
import { imageApi } from '../../urlconfig';
// import partnerImg from '../Image/partner.png';
// import partnerImg1 from '../Image/partner1.png';
// import partnerImg2 from '../Image/partner2.png';
// import partnerImg3 from '../Image/partner3.png';
// import partnerImg4 from '../Image/partner4.png';
// import partnerImg5 from '../Image/partner5.png';
function Partners({ title, Partners, PartnerAction }) {
  useEffect(() => {
    PartnerAction();
  }, [PartnerAction]);
  //console.log(Partners.Partners);
  return (
    <>
      <section className='partners'>
        <div className='container text-center py-3 '>
          <h3 className='my-4 partner-title'>{title}</h3>
          <div className='our-partners'>
            <div className='row d-flex justify-content-center'>
              {Partners &&
                Partners.Partners.map((partner) => (
                  <div className='col-md-6  col-lg-3' key={partner.id}>
                    <div className='partner-logo my-4 text-center'>
                      <a href={partner.url} rel='noreferrer' target='_blank'>
                        <img src={imageApi + partner.picture} alt='' />
                      </a>
                    </div>
                  </div>
                ))}

              {/* <div className='col-md-6  col-lg-3'>
                <div className='partner-logo my-4'>
                  <img src={partnerImg1} alt='' />
                </div>
              </div>
              <div className='col-md-6  col-lg-3'>
                <div className='partner-logo my-4'>
                  <img src={partnerImg2} alt='' />
                </div>
              </div>
              <div className='col-md-6  col-lg-3'>
                <div className='partner-logo my-4'>
                  <img src={partnerImg3} alt='' />
                </div>
              </div>
              <div className='col-md-6  col-lg-3'>
                <div className='partner-logo my-4'>
                  <img src={partnerImg4} alt='' />
                </div>
              </div>
              <div className='col-md-6  col-lg-3'>
                <div className='partner-logo my-4'>
                  <img src={partnerImg5} alt='' />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  Partners: state.Partners,
});

const mapDispatchToProps = (dispatch) => ({
  PartnerAction: () => dispatch(PartnerAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Partners);
