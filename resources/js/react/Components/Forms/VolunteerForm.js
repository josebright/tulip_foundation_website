import React, { useState } from 'react';
import { useFormik } from 'formik';
import { VolunteersAction } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Form, FormControl, InputGroup } from 'react-bootstrap';

export default function VolunteerForm() {
  const dispatch = useDispatch();
  const Volunteer = useSelector((state) => state.Volunteer);
  const Countries = useSelector((state) => state.Countries);
  const [alertShow, setAlertShow] = useState(false);
  const [callingId, setCallingId] = useState('');
  const [error, setError] = useState('');
  const [message, setMesssage] = useState('');
  //console.log(Volunteer);
  const validate = (values) => {
    const errors = {};
    //console.log(values);
    //function to get calling id
    const callingid = Countries.Countries.find(
      (country) => country.name === values.country
    );
    setCallingId(callingid && callingid.callingCodes[0]);
    console.log(values);
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
    if (!values.country) {
      errors.lastname = '*Required';
    }

    if (!values.email) {
      errors.email = '*Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.state) {
      errors.state = '*Required';
    }
    if (!values.number) {
      errors.number = '*Required';
    } else if (values.number.length > 5) {
      errors.number = 'Must be 5 characters or more';
    } else if (/[^0-9]/.test(values.number)) {
      errors.number = 'Invaild Phone number';
    }

    if (!values.country) {
      errors.country = '*Required';
    }
    if (!values.experience) {
      errors.experience = '*Required';
    } else if (values.experience.length < 20) {
      errors.experience = 'Must be 20 characters or more';
    }
    if (!values.skills) {
      errors.skills = '*Required';
    }
    if (!values.travel) {
      errors.travel = '*Required';
    }
    return errors;
  };
  //   name
  // email
  // phone
  // state
  // country
  // experience
  // skills
  // travel_availability
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      company: '',
      number: '',
      country: '',
      experience: '',
      state: '',
      skills: '',
      travel: '',
    },
    validate,
    onSubmit: (values) => {
      // setToggle(true);
      //console.log('values');
      const formdata = new FormData();
      formdata.append('name', `${values.firstname} ${values.lastname}`);
      formdata.append('email', values.email);
      formdata.append('phone', '+' + callingId + values.number);
      formdata.append('state', values.state);
      formdata.append('experience', values.experience);
      formdata.append('skills', values.skills);
      formdata.append('country', values.country);
      formdata.append('travel_availability', values.travel);
      dispatch(VolunteersAction(formdata)).then((data) => {
        if (data.type === 'error') {
          //console.log();
          setError(data.error);
          setTimeout(() => {
            setError('');
          }, 10000);
        } else if (data.type === 'message') {
          setMesssage(data.message);
          // console.log(data.message);
          setTimeout(() => {
            setMesssage('');
          }, 10000);
        }
      });
      setAlertShow(true);
      values.firstname = '';
      values.lastname = '';
      values.email = '';
      values.number = '';
      values.state = '';
      values.experience = '';
      values.skills = '';
      values.country = '';
      values.travel_availability = '';
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
              <label htmlFor='inputEmail4'>Name</label>
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
              <label className=''> </label>
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
              <label htmlFor='inputPassword4'>Email Address</label>
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
                {formik.errors.email ||
                  (Volunteer.message && (
                    <div>{formik.errors.email || Volunteer.message.email}</div>
                  ))}
              </div>
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group col-md-6 flex-column align-items-start'>
              <label htmlFor='inputAddress'>Country</label>
              <select
                className='form-control'
                onChange={formik.handleChange}
                // defaultValue={formik.values.country}
                name='country'
              >
                <option>Select Country </option>
                {Countries.Countries.map((cat, index) => (
                  <option value={cat.name} key={index}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <div className='validation'>
                {formik.errors.country && <div>{formik.errors.country}</div>}
              </div>
            </div>
            <div className='form-group col-md-6 flex-column align-items-start'>
              <label htmlFor='inputAddress'>State</label>
              <input
                type='text'
                className='form-control'
                name='state'
                onChange={formik.handleChange}
                value={formik.values.state}
              />
              <div className='validation'>
                {formik.errors.state && <div>{formik.errors.state}</div>}
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-12 flex-column align-items-start'>
              <label htmlFor='inputAddress'>Phone Number</label>
              <Form.Label
                htmlFor='inlineFormInputGroupUsername'
                srOnly
              ></Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    +{callingId ? callingId : '...'}
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id='inlineFormInputGroupUsername'
                  // placeholder='Username'
                  type='number'
                  min='0'
                  className='form-control'
                  name='number'
                  onChange={formik.handleChange}
                  value={formik.values.number}
                />
              </InputGroup>

              <div className='validation'>
                {formik.errors.number && <div>{formik.errors.number}</div>}
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-12'>
              <label htmlFor='inputCity'>Experience</label>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                name='experience'
                onChange={formik.handleChange}
                value={formik.values.experience}
              ></textarea>
              <div className='validation'>
                {formik.errors.experience && (
                  <div>{formik.errors.experience}</div>
                )}
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-6 flex-column align-items-start'>
              <label htmlFor='inputCity'>Skills</label>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                name='skills'
                onChange={formik.handleChange}
                value={formik.values.skills}
              ></textarea>
              <div className='validation'>
                {formik.errors.skills && <div>{formik.errors.skills}</div>}
              </div>
            </div>
            <div className='form-group col-md-6 flex-column align-items-start'>
              <label>Available for travel?</label>
              <select
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.travel}
                name='travel'
              >
                <option></option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </select>
              <div className='validation'>
                {formik.errors.travel && <div>{formik.errors.travel}</div>}
              </div>
            </div>
          </div>

          <button
            onClick={formik.handleSubmit}
            type='submit'
            className='btn1 btn-d form-btn'
            disabled={Volunteer.loading ? 1 : 0}
          >
            {Volunteer.loading ? 'Please Wait...' : 'Submit'}
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
