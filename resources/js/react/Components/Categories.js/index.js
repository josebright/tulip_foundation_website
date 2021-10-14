import React from 'react';
import styled from 'styled-components';

import { GiStairsGoal, GiCash, GiRelationshipBounds } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { RiCommunityLine } from 'react-icons/ri';
import { FaServicestack } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';
const Icons = [
  <GiStairsGoal size={30} />,
  <GiCash size={30} />,
  <GiRelationshipBounds size={30} />,
  <BiSupport size={30} />,
  <RiCommunityLine size={30} />,
  <FaServicestack size={30} />,
];
const counter = 1;
const CategoriesStyled = styled.div`
  overflow: hidden;

  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding-left: 1.3em;
    font-weight: 500;
  }
  li:before {
    content: '\f00c';

    font-family: FontAwesome;
    display: inline-block;
    margin-left: -1.3em; /* same as padding-left set on li */
    width: 1.3em; /* same as padding-left set on li */
  }
  .item:hover ul li:before {
    color: green;
  }
  .item {
    position: relative;
    margin-top: 30px;
  }

  .item::before {
    content: '${counter}';
    position: absolute;
    left: 50%;
    top: -50px;
    background: white;
    transform: translateX(-50%);
    z-index: 1000 !important;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #f7931e;
  }
  .itemsss {
    position: absolute;
    left: 50%;
    top: -50px;
    background: white;
    color: #f7931e;
    transform: translateX(-50%);
    z-index: 1000 !important;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #f7931e;
  }

  .col-md-4 {
    margin-bottom: 50px;
    flex: auto;
  }
  .d-flex {
    display: flex !important;
    flex: auto;
  }
  .card {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 100;
    border: none;
    padding: 0px 1rem;
    background: white !important;
    margin-bottom: 40px;
    cursor: pointer;
    box-shadow: 0 5px 7px 1px rgb(128 128 128 / 30%);
    transition: 0.3s;
  }
  .item:hover .card {
    transform: scale(1.1);
  }
  .item:hover .itemsss {
    background: black;
    color: #fff;
    border: black;
  }

  .item:hover div .categories-icon {
    color: black;
  }
  .item::after {
    position: absolute;
    content: '';
    width: 100%;
    display: flex;
    /* border: px solid; */
    height: 2px;
    background: #f7931e;
    top: -35px;
    z-index: 1 !important;
  }

  .categories-icon {
    background: rgb(247, 147, 30);
    color: #fff;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 50%;
    border: 1px solid rgb(247, 147, 30);
  }
  /* This css for the first card */
  .col-md-4:first-child .item::after {
    /* border: 2px solid red !important; */
    width: 60%;
    right: -35px;
  }
  .col-md-4:first-child .item .card::before,
  .col-md-4:nth-child(3) .item .card::before,
  .col-md-4:last-child .item .card::before {
    content: '';
    position: absolute;
    background-color: #f7931e;
    width: 2px;
    height: 22px;
    left: 50%;
    top: -23px;
    z-index: 1;
  }

  .col-md-4:last-child .item .card::before {
    border: 2px solid red !important;
    // content: '';
    // position: absolute;
    // background-color: black;
    // width: 2px;
    // height: 26px;
    // left: 50%;
    // top: -77px;
    // z-index: 1;
  }

  .col-md-4:nth-child(3) .item::after,
  .col-md-4:nth-child(6) .item::after {
    /* border: 2px solid red !important; */
    width: 60%;
    left: -35px;
  }

  /* For general Card epect the first and the last on the same line */
  .col-md-4 .item::after {
    position: absolute;
    content: '';
    width: 114%;
    height: 2px;
    top: -35px;
  }
  // .col-md-4:first-child .item::after,
  // .ijdGGT .col-md-4:nth-child(4) .item::after {
  //   width: 48%;
  //   right: 22px;
  // }

  @media only screen and (max-width: 763px) {
    .card {
      // height: 400px !important;
    }
  }
  @media only screen and (max-width: 991px) {
    .card {
      // height: 655px;
    }
  }
  @media only screen and (max-width: 768px) {
    .col-md-4:first-child .item::after,
    .col-md-4:nth-child(4) .item::after {
      /* border: 2px solid red !important; */
      width: 50%;
      right: 15px;
    }
    .col-md-4 .item::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      top: -35px;
    }
    .col-md-4 .item::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      top: -35px;
    }
    .col-md-4:nth-child(3) .item::after,
    .col-md-4:nth-child(6) .item::after {
      /* border: 2px solid red !important; */
      width: 50%;
      left: 15px;
    }
  }
  @media (max-width: 360px) {
    .card {
      // min-height: 420px;
    }
  }
`;

export default function index({ Categories }) {
  return (
    <CategoriesStyled icon={<FcCheckmark />}>
      <div className='container my-5'>
        <div>
          <h1 className='text-center mb-5 service-title'>Our Services</h1>
        </div>
        <div className='row'>
          {Categories.Categories.map((cat, idex) => (
            <div className='col-md-4 d-flex' key={idex}>
              <div className='item d-flex justify-content-center'>
                <div className='itemsss'>{idex + 1}</div>
                <div
                  className='card  border-success mb-5 text-center '
                  style={{ Width: '18rem' }}
                >
                  {/*.item:hover .itemsss div .categories-icon */}
                  <div className=' my-5'>
                    <div className='categories-icon'>
                      {Icons[idex]}
                      {/* <FaMagic/> */}
                    </div>
                  </div>
                  <h4 className='mb-2'>{cat.title}</h4>
                  <ul>
                    {cat.description.map((des, index) => (
                      <li className='my-2 mx-4 text-left' key={index}>
                        {des}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          <hr />
        </div>
      </div>
    </CategoriesStyled>
  );
}
