import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { TeamAction } from '../../Redux/actions';
import { imageApi } from '../../urlconfig';
import { AiOutlineMail } from 'react-icons/ai';

// import team1 from '../Image/team1.png';
// import team2 from '../Image/team2.png';
// import team3 from '../Image/team3.png';
// import team4 from '../Image/team4.png';
// import team5 from '../Image/team5.png';
// import team6 from '../Image/team6.png';
function Team({ TeamAction, getTeam }) {
  useEffect(() => {
    TeamAction();
  }, [TeamAction]);
  // console.log(getTeam);
  if (getTeam.Team) {
    return (
      <>
        <section className='teams'>
          <div className='container'>
            <div className='teams-title mb-5'>
              <h3 className='text-center pt-5 team-title'>Meet our team</h3>
            </div>
            <div className='our_team'>
              <div className='row d-flex justify-content-center'>
                {getTeam &&
                  getTeam.Team.map((team, index) => (
                    <div
                      className='col-sm-12 col-md-6 col-lg-4 text-center'
                      key={index}
                    >
                      <div className='member'>
                        {index === 1 ? (
                          <div className='top-spacing'></div>
                        ) : null}
                        {index !== 0 &&
                        index !== 4 &&
                        index !== 1 &&
                        index !== 7 &&
                        index !== 10 &&
                        index !== 13 ? (
                          <div className='spacing'></div>
                        ) : null}

                        {index === 0 ? (
                          <div className='team-info'>
                            TULIP Foundation is a Non-Government Organization of
                            full-time workers and volunteers. Every member of
                            our team is socially focused and contribute their
                            time, talent, and energy to the organization in many
                            ways
                          </div>
                        ) : null}

                        <div className='imgNew img-fluid'>
                          <img
                            className='w-100 h-100 '
                            src={imageApi + team.picture}
                            alt=''
                          />
                          <div className=''>
                            <a
                              href={`mailto: ${team.email}`}
                              rel='noreferrer'
                              target='_blank'
                            >
                              <AiOutlineMail />
                            </a>
                          </div>
                        </div>
                        <div className='memeber-info'>
                          <h4>{team && team.name}</h4>
                          <h5> {team && team.position}</h5>
                        </div>

                        {index === 13 ||
                        index === 10 ||
                        index === 7 ||
                        index === 4 ||
                        index === 1 ? (
                          <div className='bottom-spacing'></div>
                        ) : null}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getTeam: state.getTeam,
});

const mapDispatchToProps = (dispatch) => ({
  TeamAction: () => dispatch(TeamAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
