import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Alert } from 'react-bootstrap';
import { OrganizeAction } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';

export default function OrganizationForm() {
  const dispatch = useDispatch();
  const Organize = useSelector((state) => state.Organize);
  const [alertShow, setAlertShow] = useState(false);
  const [error, setError] = useState('');
  const [message, setMesssage] = useState('');

  console.log(Organize);
  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = '*Required';
    } else if (values.firstname.length < 2) {
      errors.firstname = 'Must be 2 characters or more';
    }

    if (!values.lastname) {
      errors.lastname = '*Required';
    } else if (values.lastname.length < 2) {
      errors.lastname = 'Must be 2 characters or more';
    }

    if (!values.email) {
      errors.email = '*Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.number) {
      errors.number = '*Required';
    } else if (values.number.length > 5) {
      errors.number = 'Must be 5 characters or more';
    } else if (/[^0-9]/.test(values.number)) {
      errors.number = 'Invaild Phone number';
    }

    if (!values.company) {
      errors.company = '*Required';
    }

    if (!values.about) {
      errors.about = '*Required';
    }
    if (!values.interest) {
      errors.interest = '*Required';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      company: '',
      number: '',
      about: '',
      interest: '',
    },
    validate,
    onSubmit: (values) => {
      // setToggle(true);
      //console.log('values');
      const formdata = new FormData();
      formdata.append('first_name', values.firstname);
      formdata.append('last_name', values.lastname);
      formdata.append('email', values.email);
      formdata.append('phone', values.number);
      formdata.append('company', values.company);
      formdata.append('about_us', values.about);
      formdata.append('ur_interest', values.interest);
      //formdata.append('travel_availability', values.travel_availability);
      setAlertShow(true);
      dispatch(OrganizeAction(formdata)).then((data) => {
        if (data.type === 'error') {
          setError(data.error);
          setTimeout(() => {
            setError('');
          }, 10000);
        } else if (data.type === 'message') {
          setMesssage(data.message);
          setTimeout(() => {
            setMesssage('');
          }, 10000);
        }
      });
      values.firstname = '';
      values.lastname = '';
      values.email = '';
      values.number = '';
      values.company = '';
      values.about = '';
      values.interest = '';

      //   console.log('hello');
      //   alert(JSON.stringify(values, null, 2));
      //
    },
  });
  return (
    <div className='orgainzationform'>
      <div className='container'>
        <form>
          <div className='form-row'>
            <div className='form-group col-md-4'>
              <label for='inputEmail4'>Name</label>
              <input
                type='text'
                name='firstname'
                className='form-control'
                id='inputEmail4'
                placeholder='First Name'
                onChange={formik.handleChange}
                value={formik.values.firstname}
              />
              <div className='validation'>
                {formik.errors.firstname && (
                  <div>{formik.errors.firstname}</div>
                )}
              </div>
            </div>
            <div className='form-group col-md-4'>
              <label> </label>
              <input
                type='text'
                name='lastname'
                className='form-control mt-2'
                placeholder='Last Name'
                onChange={formik.handleChange}
                value={formik.values.lastname}
              />
              <div className='validation'>
                {formik.errors.lastname && <div>{formik.errors.lastname}</div>}
              </div>
            </div>
            <div className='form-group col-md-4'>
              <label for='inputPassword4'>Email Address</label>
              <input
                type='email'
                name='email'
                className='form-control'
                id='inputPassword4'
                placeholder='Email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className='validation'>
                {formik.errors.email && <div>{formik.errors.email}</div>}
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-6  flex-column align-items-start'>
              <label for='inputAddress'>Company</label>
              <input
                type='text'
                className='form-control'
                name='company'
                placeholder='Company Name'
                onChange={formik.handleChange}
                value={formik.values.company}
              />
              <div className='validation'>
                {formik.errors.company && <div>{formik.errors.company}</div>}
              </div>
            </div>
            <div className='form-group col-md-6  flex-column align-items-start'>
              <label for='inputAddress'>Phone Number</label>
              <input
                type='number'
                min='0'
                className='form-control'
                name='number'
                onChange={formik.handleChange}
                value={formik.values.number}
              />
              <div className='validation'>
                {formik.errors.number && <div>{formik.errors.number}</div>}
              </div>
            </div>
          </div>
          <div className='form-group'>
            <label for='inputAddress2'>Where did you hear about us:</label>
            <input
              type='text'
              className='form-control'
              name='about'
              id='inputAddress2'
              //   placeholder='Apartment, studio, or floor'
              onChange={formik.handleChange}
              value={formik.values.about}
            />
            <div className='validation'>
              {formik.errors.about && <div>{formik.errors.about}</div>}
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-12'>
              <label for='inputCity'>
                Please explain your interest in TULIP Foundation
              </label>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='5'
                name='interest'
                onChange={formik.handleChange}
                value={formik.values.interest}
              ></textarea>
              <div className='validation'>
                {formik.errors.interest && <div>{formik.errors.interest}</div>}
              </div>
            </div>
          </div>
          {/* <div className='form-group'>
            <div className='form-check'>
              <input className='form-check-input' type='checkbox' id='gridCheck' />
              <label className='form-check-label' for='gridCheck'>
                Check me out
              </label>
            </div>
          </div> */}
          <button
            type='submit'
            className='btn1 btn-d form-btn'
            onClick={formik.handleSubmit}
            disabled={Organize.loading ? 1 : 0}
          >
            {Organize.loading ? 'Please Wait...' : 'Submit'}
          </button>
        </form>
        {alertShow ? (
          <div>
            {message || error ? (
              <Alert
                variant={error ? 'danger' : message ? 'success' : 'null'}
                onClose={() => {
                  setAlertShow(false);
                  setMesssage('');
                  setError('');
                }}
                dismissible
              >
                <Alert.Heading>{error || message}</Alert.Heading>
              </Alert>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
