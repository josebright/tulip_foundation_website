import React from 'react';

function Overview() {
  return (
    <>
      <section className='overview'>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-12 col-lg-5 '>
              <div>
                <h1 className='mb-3 overview-title'>Overview</h1>
              </div>
              <div>
                <p>
                  TULIP FOUNDATION is a Non-Government Organization that
                  facilitates alliances between Public, Private, Academic,
                  Foundational, Community, and Government organizations focused
                  on developing programs that would be of benefit to residents
                  of vulnerable communities
                </p>
              </div>
            </div>
            <div className='col-lg-2'></div>
            <div className='col-md-12 col-lg-5'>
              <div>
                <h1 className='mb-3 overview-title'>Mission</h1>
              </div>
              <div>
                <p>
                  Our mission is to foster inclusion amongst residents of
                  communities irrespective of sex, sexual orientation, race or
                  politics, religion, or other opinions with the bigger picture
                  of keeping the residents out of criminal activities through
                  creating sustainable living conditions in neighborhoods
                </p>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <div className='d-flex  justify-content-center'>
              <div className='objective-w-75'>
                <div>
                  <h1 className='mb-3 overview-title text-center'>
                    Objectives
                  </h1>
                </div>
                <ul className='objective'>
                  <li>
                    <p>
                      Promote the benefit of the people, and the neighbourhood
                      together confined by resident (hereinafter called @The
                      area of benefitS) without distinction of sex, sexual
                      orientation, race or of political, religious or other
                      opinions by associating together the said inhabitants and
                      the local authorities, voluntary and other organizations
                      in a common effort to advance support services that will
                      improve access to housing and by community intervention
                      designed to reduce exclusion from housing and all other
                      relation issues, to ascertain resources are used
                      constructively, fairly and effectively to reduce crime and
                      repairs the fabric of society, to enhanced education,
                      training and to provide facilities in the interest of
                      social welfare for recreation and leisure time occupation
                      with the object of improving the conditions of life for
                      the said inhabitants most likely to reduce crime and any
                      further offending repair relationships and encourage
                      re-integration.
                    </p>
                  </li>
                  <li>
                    <p>
                      To promote the relieve of poverty and sickness, advance
                      education and protect, preserve health, particularly, but
                      without prejudice to the generality of the foregoing, of
                      the disadvantage young vulnerable adult that includes the
                      homeless, refugees, isolation or distress by reason of
                      their sOcial and economic circumstance or as a result of
                      local, national or international disaster and problems.
                    </p>
                  </li>
                  <li>
                    <p>
                      To promote other charitable purpose as may from time to
                      time be determined.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              {/* <div className='row'>
                <div className='col-6'>
                  Our mission is to foster inclusion amongst residents of
                  communities irrespective of sex, sexual orientation, race or
                  politics, religion, or other opinions with the bigger picture
                  of keeping the residents out of criminal activities through
                  creating sustainable living conditions in neighborhoods
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
