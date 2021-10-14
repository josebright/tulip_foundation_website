import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Loading from '../Loading';

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaPhoneAlt,
  FaLinkedinIn,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { SubcribeAction } from '../../Redux/actions';
import FounderFooter from './footer';
import { Link } from 'react-router-dom';

function Footer() {
  const dispatch = new useDispatch();
  const Subscribe = useSelector((state) => state.Subscribe);
  const [alertShow, setAlertShow] = useState(false);
  //console.log(Subscribe);
  //states
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  // const [toggle, setToggle] = useState(false);
  // const [show, setShow] = useState(false);

  //Handle error and responses
  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log('clicked');
    if (!email) {
      // console.log('Enter something damn it');
      // setError('Enter your email to subscribe');
      setMessage('Enter your email to subscribe');
      // setTimeout(() => {
      //   setMessage('');
      // }, 10000);
    } else {
      const form = new FormData();
      form.append('email', email);
      dispatch(SubcribeAction(form)).then((data) => {
        if (data && data.type === 'error') {
          setAlertShow(true);
          setError(data.error);
          setTimeout(() => {
            setAlertShow(false);
            setMessage('');
            setError('');
          }, 10000);
        } else if (data && data.type === 'message') {
          setAlertShow(true);
          setMessage(data.message);
          setTimeout(() => {
            setAlertShow(false);
            setMessage('');
            setError('');
          }, 10000);
        }
      });
      setAlertShow(true);
      setEmail('');
    }
  };

  const AlertShow = () => {
    if (alertShow && (error || message)) {
      return (
        <Alert
          variant={
            Subscribe.error || error
              ? 'danger pl-3'
              : message
              ? 'success pl-3'
              : null
          }
          onClose={() => {
            setAlertShow(false);
            setMessage('');
            setError('');
          }}
          dismissible
        >
          {/* <Alert.Heading>Oh snap! You got an error!</Alert.Heading> */}
          <p>{error || message}</p>
        </Alert>
      );
    }
  };
  return (
    <>
      <footer>
        <div className='container'>
          <div className='top-footer'>
            <div className='content'>
              <div className='row'>
                <div className='col-md-12 col-lg-4'>
                  <div>
                    <h2 className='mb-4'>Sign up for the newsletter</h2>
                  </div>
                  <div>
                    <form action='' className='footer-form2'>
                      <input
                        type='text'
                        name='email'
                        placeholder='E-mail Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button className='footerform2Btn' onClick={handleSubmit}>
                        {Subscribe.loading ? (
                          <Loading />
                        ) : (
                          <FaTelegramPlane style={{ fontSize: 25 }} />
                        )}
                      </button>
                    </form>
                    <div className='mt-4'>
                      <div>
                        <div className='contact-info'>
                          <MdEmail />
                          <a
                            href='mailto:info@tulipfoundation.com'
                            rel='noreferrer'
                          >
                            info@tulipfoundation.org
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className='contact-info'>
                          <FaPhoneAlt />
                          <div>
                            <a href='tel:+447305084306' rel='noreferrer'>
                              (+44)1375400895
                            </a>
                            <a href='tel:+447305084306' rel='noreferrer'>
                              (+44)7305084306
                            </a>
                          </div>
                        </div>
                        {/* <div className='contact-info'>
                          <FaPhoneAlt />
                          <a href='tel:+447305084306' rel='noreferrer'>
                            01375400895/07305084306
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-12  col-lg-4'>
                  <div>
                    <h2 className='text-center mb-4'>Follow us</h2>
                  </div>
                  <div className='follow-us'>
                    <ul>
                      <li>
                        <a
                          href='https://web.facebook.com/Tulip-Foundation-102056708661287'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <FaFacebook style={{ fontSize: 25 }} />
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://twitter.com/tulipFoundati0n'
                          rel='noreferrer'
                          target='_blank'
                        >
                          <FaTwitter style={{ fontSize: 25 }} />
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.instagram.com/thetulipfoundation'
                          rel='noreferrer'
                          target='_blank'
                        >
                          <FaInstagram style={{ fontSize: 25 }} />
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.linkedin.com/in/tulip-foundation-11085520a'
                          rel='noreferrer'
                          target='_blank'
                        >
                          <FaLinkedinIn style={{ fontSize: 25 }} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-md-12 col-lg-4'>
                  <div>
                    <h2 className='text-center mb-4'>Support Us</h2>
                  </div>
                  <div className='support-us text-center'>
                    <div className='row'>
                      <div className='col text-center'>
                        <Link to='/donation' className=''>
                          Donate Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='my-5'>
            <hr />
          </div>
          <div className='bottom-footer'>
            <div className='content'>
              <ul>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/involve'>Get Involved</Link>
                </li>
                <li>
                  <Link to='/event'>Media</Link>
                </li>
                <li>
                  <Link to='/training'>Contact Us</Link>
                </li>
              </ul>
              {/* <a href='/' className='tulip mb-4'> */}
              <p>&copy; The Tulip Foundation {new Date().getFullYear()}</p>
              {/* </a> */}
            </div>
          </div>
        </div>
        {AlertShow()}
        {/* {alertShow ? (
          <div>
            {true || error ? (
              <Alert
                variant={
                  Subscribe.error || error
                    ? 'danger'
                    : message
                    ? 'success'
                    : 'null'
                }
                onClose={() => {
                  setAlertShow(false);
                  setMessage('');
                  setError('');
                }}
                dismissible
              >
                <Alert.Heading>{error || message} </Alert.Heading>
              </Alert>
            ) : null}
          </div>
        ) : null} */}
      </footer>
      <FounderFooter />
    </>
  );
}

export default Footer;
