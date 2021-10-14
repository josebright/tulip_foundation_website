import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ConsultationAction } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Form, FormControl, InputGroup } from 'react-bootstrap';

export default function ConsultationForm() {
  const Categories = useSelector((state) => state.Categories);
  const Countries = useSelector((state) => state.Countries);
  const optionList = ['Training', 'Consultation'];
  //console.log(Countries);
  //console.log(Categories);

  const dispatch = useDispatch();
  const Consultation = useSelector((state) => state.Consultation);
  const [alertShow, setAlertShow] = useState(false);
  const [callingId, setCallingId] = useState('');
  const [error, setError] = useState('');
  const [message, setMesssage] = useState('');

  //console.log(Consultation);
  const validate = (values) => {
    // console.log(values);
    //function to get calling id
    const callingid = Countries.Countries.find(
      (country) => country.name === values.country
    );
    setCallingId(callingid && callingid.callingCodes[0]);
    //
    const errors = {};
    if (!values.firstname) {
      errors.firstname = '*Required';
    } else if (values.firstname.length < 2) {
      errors.firstname = 'Must be 2 characters or more';
    }

    if (!values.programlabel) {
      errors.programlabel = '*Required';
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
    if (!values.state) {
      errors.state = '*Required';
    }

    if (!values.number) {
      errors.number = '*Required';
    } else if (values.number.length > 5) {
      errors.number = 'Must be 5 characters or more';
    } else if (/[^0-9]/.test(values.number)) {
      errors.number = 'Enter the right Phone number';
    }

    if (!values.country) {
      errors.country = '*Required';
    }
    if (!values.option1) {
      errors.option1 = '*Required';
    }
    // if (!values.company) {
    //   errors.company = '*Required';
    // }
    if (!values.message) {
      errors.message = '*Required';
    }
    //console.log(errors);
    // if (!values.option) {
    //   errors.option = '*Required';
    // }

    return errors;
  };
  //   name
  // email
  // state
  // country
  // phone
  // message
  // option
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      option1: '',
      number: '',
      country: '',
      programlabel: '',
      state: '',
      message: '',
    },
    validate,
    onSubmit: (values) => {
      // setToggle(true);

      const formdata = new FormData();
      formdata.append('name', `${values.firstname} ${values.lastname}`);
      formdata.append('email', values.email);
      formdata.append('phone', '+' + callingId + values.number);
      formdata.append('country', values.country);
      formdata.append('state', values.state);
      formdata.append('message', values.message);
      formdata.append('program', values.programlabel);
      formdata.append('option', values.option1);
      dispatch(ConsultationAction(formdata)).then((data) => {
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
          values.firstname = '';
          values.lastname = '';
          values.email = '';
          values.number = '';
          values.programlabel = '';
          values.state = '';
          values.country = '';
          values.message = '';
          values.skills = '';
        }
      });
      setAlertShow(true);
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
                {formik.errors.firstname ||
                  (Consultation.message.name && (
                    <div>
                      {formik.errors.firstname || Consultation.message.name[0]}
                    </div>
                  ))}
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
                {formik.errors.lastname ||
                  (Consultation.message.name && (
                    <div>
                      {formik.errors.lastname || Consultation.message.name[0]}
                    </div>
                  ))}
              </div>
            </div>
            <div className='form-group col-md-4'>
              <label htmlFor='inputPassword4'>Email Address</label>
              <input
                type='text'
                name='email'
                className='form-control'
                id='inputPassword4'
                placeholder='Email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className='validation'>
                {formik.errors.email ||
                  (Consultation.message.email && (
                    <div>
                      {formik.errors.email || Consultation.message.email[0]}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* <input list="browsers" name="browser" id="browser">
  <datalist id="browsers">
    <option value="Edge">
    <option value="Firefox"/>
    <option value="Chrome"/>
    <option value="Opera"/>
    <option value="Safari"/>
  </datalist> */}
          <div className='form-row'>
            <div className='form-group col-md-6 flex-column align-items-start'>
              <label htmlFor='inputAddress'>Country</label>
              <select
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.country}
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
                {formik.errors.country ||
                  (Consultation.error.country && (
                    <div>
                      {formik.errors.country || Consultation.error.country[0]}
                    </div>
                  ))}
              </div>
            </div>
            <div className='form-group col-md-6 flex-column align-items-start'>
              <label htmlFor='inputAddress'>State</label>
              <input
                type='text'
                className='form-control'
                name='state'
                // placeholder='Company Name'
                onChange={formik.handleChange}
                value={formik.values.state}
              />
              <div className='validation'>
                {formik.errors.state ||
                  (Consultation.error.state && (
                    <div>
                      {formik.errors.state || Consultation.error.state[0]}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className='form-row'>
            {/* <div className='form-group col-md-6 flex-column align-items-start'>
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
                {formik.errors.company ||
                  (Consultation.error.company && (
                    <div>
                      {formik.errors.company || Consultation.error.company[0]}
                    </div>
                  ))}
              </div> 
            </div>*/}
            <div className='form-group col-md-12 flex-column align-items-start'>
              <label htmlFor='inputAddress'>Phone Number</label>
              <Form.Label htmlFor='inlineFormInputGroupUsername' srOnly>
                Username
              </Form.Label>
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
              {/* <input
                type='number'
                min='0'
                className='form-control'
                name='number'
                // placeholder='Company Name'
                onChange={formik.handleChange}
                value={formik.values.number}
              /> */}
              <div className='validation'>
                {formik.errors.number ||
                  (Consultation.error.number && (
                    <div>
                      {formik.errors.number || Consultation.error.number[0]}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group col-md-12'>
              <label htmlFor='inputCity'>Message</label>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='6'
                name='message'
                // placeholder='Company Name'
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
              <div className='validation'>
                {formik.errors.message ||
                  (Consultation.error.message && (
                    <div className='validation'>
                      {formik.errors.message || Consultation.error.message[0]}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-6 flex-column align-items-start'>
              <label>What do you seek?</label>
              {optionList.map((option, index) => (
                <div className='form-check mb-2' key={index}>
                  <input
                    className='form-check-input '
                    type='radio'
                    name='option1'
                    id='Training'
                    //checked
                    // placeholder='Company Name'
                    onChange={formik.handleChange}
                    // value={formik.values.option1}
                    value={option}
                    // onBlur={formik.handleBlur}

                    // onChange={() => setOption('Training')}
                    // onClick={() => setOption('Training')}
                    // onClick={formik.handleBlur}
                  />
                  <label className='form-check-label' htmlFor='exampleRadios1'>
                    {option}
                  </label>
                </div>
              ))}
              <div className='validation'>
                {formik.errors.option1 ||
                  (Consultation.error.option && (
                    <div>
                      {formik.errors.option1 || Consultation.error.option[0]}
                    </div>
                  ))}
              </div>
            </div>
            {/* {Categories.Categories.length < 1 ? ( */}
            <div className='form-group col-md-6 flex-column align-items-start'>
              <label>Pick a Service</label>
              <select
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.programlabel}
                name='programlabel'
              >
                <option>SELECT PROGRAM</option>
                {Categories.Categories.map((cat) => (
                  <option value={cat.title} key={cat.id}>
                    {cat.title}
                  </option>
                ))}
                {/* <option selected></option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option> */}
              </select>
              <div className='validation'>
                {formik.errors.programlabel && (
                  <div>{formik.errors.programlabel}</div>
                )}
              </div>
            </div>

            {/* // ) : null} */}
            {/* <div className='validasettion'>
              {formik.errors.option ||
                (Consultation.error.option && (
                  <div>
                    {formik.errors.option || Consultation.error.option[0]}
                  </div>
                ))}
            </div> */}
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
          >
            {Consultation.loading ? 'Please Wait...' : 'Submit'}
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
