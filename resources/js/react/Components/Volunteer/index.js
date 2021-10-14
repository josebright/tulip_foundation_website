import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Volunter = styled.section`
  padding: 3em 0;

  background: url(${(prop) => prop.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 254px 309px;
  opacity: 0.8;
  color: #00000;
`;
function Volunteer({ title, info, details, button, image, link }) {
  return (
    <Volunter image={image}>
      <div className='container text-center py-5'>
        {title ? <h3 className='mb-5 mb-md-3'>{title}</h3> : null}
        <p className='mb-4'>
          {info ? <span className='d-block'>{info}</span> : null}
          {details}
        </p>
        {button ? (
          <Link to={`/${link}`} className='btn1 btn-d px-5 my-2 '>
            {button}
          </Link>
        ) : null}
      </div>
    </Volunter>
  );
}

export default Volunteer;
