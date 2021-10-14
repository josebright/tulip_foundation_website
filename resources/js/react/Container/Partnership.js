import React, { useEffect } from 'react';
import { ProjectAction } from '../Redux/actions';
import { connect, useSelector } from 'react-redux';
import { imageApi } from '../urlconfig';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
// import Welcome from '../Components/Welcome';

// import Volunteer from '../Components/Volunteer';
// import Mission from '../Components/Mission';
// //import Donation from '../Components/Donation.js';
// import Trainning from '../Components/Trainning';
//import Donate from '../Components/Donate';
import Footer from '../Components/Footer';

//import DonationImage from '../Components/Image/donation2.png';

import header from '../Components/Image/partnership1.jpg';
// import Image from '../Components/Image/background.png';
// import MissionImage from '../Components/Image/mission2.png';
import Project from '../Components/Projects';
import upcomingevent from '../Components/Image/soon.jpg';
// import projectImage from '../Components/Image/project1.png';
// import projectImage1 from '../Components/Image/project2.png';
function Get_Involved({ ProjectAction }) {
  useEffect(() => {
    ProjectAction();
  }, [ProjectAction]);

  const Partnershiproject = useSelector((state) => state.Partnership);
  console.log(Partnershiproject);
  return (
    <>
      <Navbar />
      {/* <Welcome
        title='Get Involved, Make a Lasting Difference'
        desc='Many of us are more capable than some of us, but none of us is as capable as all of us'
      /> */}
      <Header Image={header} title='Partnership blog' height='450' />
      {Partnershiproject &&
        Partnershiproject.Partnership.map((project) => (
          <div key={project.id}>
            <Project
              title={project.title}
              image={imageApi + project.picture}
              link={project.brandLink && project.brandLink['url']}
              companyname={project.brandLink && project.brandLink['company']}
              order={(project.id + 1) % 2 === 0 ? 'order-24' : null}
              // date={project.programDate}
              desc={`${
                project.article && project.article.length > 150
                  ? project.article.substring(0, 150) + '...'
                  : project.article
              }`}
              modal={project}
            />
          </div>
        ))}

      {Partnershiproject &&
      Partnershiproject.Partnership.length === 0 &&
      !Partnershiproject.Partnership.loading ? (
        <section className='my-5'>
          <div className='upcoming container'>
            <div className='row'>
              <div className='col-md-6 d-flex justify-content-center'>
                <h1 className='upcoming-content text-center h1'>Coming Soon</h1>
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

      {/* <Trainning
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
      /> */}
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
