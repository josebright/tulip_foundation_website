import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const FirstFounderFooter = styled.div`
  background: #e6394a;
  color: #fff;
  div a {
    color: #fff !important;
    transition: 0.3s;
  }
  div a:hover {
    transform: scale(1.2);
    display: inline-block;
    width: -5px;
    margin-left: 18px;
    color: #f7931e !important;
  }
`;
function footer() {
  return (
    <>
      <FirstFounderFooter>
        <div className='text-center p-3 ff'>
          Built with <FaHeart style={{ color: 'red' }} /> by
          <a rel='noreferrer' href='https://www.thefirstfounders.com/'>
            FirstFounders Inc
          </a>
        </div>
      </FirstFounderFooter>
    </>
  );
}

export default footer;
