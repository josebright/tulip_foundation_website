import React, { useEffect } from 'react';
import { ProjectAction } from '../Redux/actions';
import { connect } from 'react-redux';
import { imageApi } from '../urlconfig';
import Navbar from '../Components/Navbar';
import Welcome from '../Components/Welcome';
import Header from '../Components/Header';
import Volunteer from '../Components/Volunteer';
import Mission from '../Components/Mission';
//import Donation from '../Components/Donation.js';
import Trainning from '../Components/Trainning';
//import Donate from '../Components/Donate';
import Footer from '../Components/Footer';

//import DonationImage from '../Components/Image/donation2.png';

import header from '../Components/Image/header4.png';
import Image from '../Components/Image/background.png';
import MissionImage from '../Components/Image/mission2.png';
import Project from '../Components/Projects';
import upcomingevent from '../Components/Image/soon.jpg';
// import projectImage from '../Components/Image/project1.png';
// import projectImage1 from '../Components/Image/project2.png';
function Get_Involved({ ProjectAction, Projects }) {
  useEffect(() => {
    ProjectAction();
  }, [ProjectAction]);

  //console.log(Projects);
  return (
    <>
      <Navbar />
      <Welcome
        title='Get Involved, Make a Lasting Difference'
        desc='We believe that it takes a ‘community to build a community’ and we are proud to align with people and organizations who work with us to transform the way that communities are built.'
      />
      <Header
        Image={header}
        title='Get Involved
        Make a Difference One Family at A Time'
        height='450'
      />
      {Projects &&
        Projects.Projects.map((project) => (
          <div key={project.id}>
            <Project
              title={project.title}
              image={imageApi + project.picture}
              order={(project.id + 1) % 2 === 0 ? 'order-24' : null}
              date={project.programDate}
              desc={`${
                project.article && project.article.length > 150
                  ? project.article.substring(0, 150) + '...'
                  : project.article
              }`}
              modal={project}
            />
          </div>
        ))}
      {Projects &&
      Projects.Projects.length <= 0 &&
      Projects.Projects.loading ? (
        <section className='my-5'>
          <div className='upcoming container'>
            <div className='row'>
              <div className='col-md-6 d-flex justify-content-center'>
                <h1 className='upcoming-content text-center h1'>
                  Event Coming Soon
                </h1>
              </div>
              <div className='col-md-6'>
                <div
                  style={{
                    width: '400px',
                    height: '400px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={upcomingevent}
                    style={{ objectFit: 'cover', width: '100%' }}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <Trainning
        // title='Organization Alliance Program'
        info='Our donors are one example of our biggest support. This shows the power of community.
        You do not have to donate. That is why it is so extraordinary when you do. 100% of all donations
         will go to fund projects across all communities'
        details='
        TULIP FOUNDATION can custom tailor a donation or sponsorship program according to your need`'
        button='Donate Now'
        link='donation'
      />
      <Volunteer
        image={Image}
        title='Volunteer'
        details='Everyone makes a difference. Share your skills and knowledge to make a difference to other people’s lives'
        button='Join Us'
        link='volunteer'
      />

      <Mission
        Image={MissionImage}
        text='Our Mission is to create inclusive communities and create social change.
        Home os where vibrant, stable families and communities begin.'
      />
      <Trainning
        title='Training / Consultation'
        info='One of the objectives of the TULIP Foundation is to provide training for residents of communities.'
        details='TULIP Foundation partners with other NGOs to build programs that will be of benefit to residents in areas of skill acquisition, training, and consultation.'
        button=' Contact Us'
        link='training'
      />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  Projects: state.Projects,
});

const mapDispatchToProps = (dispatch) => ({
  ProjectAction: () => dispatch(ProjectAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Get_Involved);
