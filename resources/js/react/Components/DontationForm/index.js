import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Alert } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { DonationAction } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';

function DonatationForm() {
  const dispatch = useDispatch();
  const Donate = useSelector((state) => state.Donation);
  const Countries = useSelector((state) => state.Countries);
  //console.log(Donate);
  const [alertShow, setAlertShow] = useState(false);
  const [amount, setAmount] = useState(null);
  const [otherAmount, setOtherAmount] = useState(0);
  const [anonymous, setAnonymous] = useState(false);
  const [setAmountError] = useState(null);
  const [error, setError] = useState('');
  const [message, setMesssage] = useState('');
  // const Donation = {};
  const amountList = ['1000', '500', '250', '100', '50'];

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
    if (!values.country) {
      errors.country = '*Required';
    }
    if (!values.city) {
      errors.city = '*Required';
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
    if (!values.state) {
      errors.state = '*Required';
    }
    if (!values.zip) {
      errors.zip = '*Required';
    }

    if (!values.country) {
      errors.country = '*Required';
    }
    if (!values.address) {
      errors.address = '*Required';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      country: '',
      city: '',
      address: '',
      state: '',
      zip: '',
    },
    validate,
    onSubmit: (values) => {
      if (!amount) {
        setAlertShow(true);
        setError('Select Amount');
        setTimeout(() => {
          setError('');
        }, 10000);
      } else {
        // setToggle(true);
        const formdata = new FormData();
        formdata.append('first_name', values.firstname);
        formdata.append('last_name', values.lastname);
        formdata.append('address', values.address);
        formdata.append('amount', amount);
        formdata.append('anonymous', anonymous ? 'Yes' : 'No');
        formdata.append('city', values.city);
        formdata.append('email', values.email);
        formdata.append('state', values.state);
        formdata.append('zip', values.zip);
        formdata.append('country', values.country);
        // formdata.append('address', values.address);
        dispatch(DonationAction(formdata)).then((data) => {
          console.log(data);
          setAlertShow(true);
          if (data.type === 'error') {
            //console.log();
            setError(data.error);
            setTimeout(() => {
              setError('');
            }, 10000);
          } else if (data.type === 'message') {
            setMesssage(data.message);
            console.log(data.message);
            setTimeout(() => {
              setMesssage('');
            }, 10000);
            window.open(`${data.url}`, '_blank');
            values.firstname = '';
            values.lastname = '';
            values.email = '';
            values.country = '';
            values.city = '';
            values.address = '';
            values.state = '';
            values.zip = '';
          }
        });
        setAmountError('');
        setAnonymous(false);
        setAmount(null);
        //   console.log('hello');
        //   alert(JSON.stringify(values, null, 2));

        //
      }
    },
  });
  return (
    <>
      <section className='donation-form py-5'>
        <div className='container'>
          <div className='donatation_content py-5'>
            <div className='donatation-cost my-5'>
              <div className='row'>
                <div className='col-12 '>
                  {/* <h2>
                    Amount Selected :
                    <span className='w-25'>
                      <input />
                    </span>
                  </h2> */}
                </div>

                {amountList.map((amounts, index) => (
                  <div className='col-6 text-center' key={index}>
                    <button
                      className={`btn-donatation ${
                        amount === amounts ? 'activeBtn' : ''
                      }`}
                      onClick={() => {
                        setAmount(amounts);
                        setOtherAmount('');
                      }}
                    >
                      ${amounts}
                    </button>
                  </div>
                ))}

                <div className=' col-6 text-center '>
                  {/* <button className='btn-donatation'>Others</button> */}
                  <input
                    type='number'
                    min='0'
                    className='othersamount text-center'
                    placeholder='other Amount here'
                    value={otherAmount ? otherAmount : ''}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setOtherAmount(
                        e.target.value.replace('-', '').replace('+', '')
                      );
                    }}
                  />
                </div>
              </div>
              <div
                className={
                  amount
                    ? 'col-md-12 text-center my-4 Donationamount'
                    : 'col-md-12 text-center my-4 '
                }
              >
                {amount ? `Amount: $ ${amount}` : null}
              </div>
            </div>
            {/*  */}
            <div className='form container'>
              <div className='mb-5'>
                <h2 className='text-left'>Personal Info</h2>
                <hr />
              </div>
              <div>
                <form>
                  <div className='form-row'>
                    <div className='form-group col-md-4'>
                      <label htmlFor='inputEmail4'>Name</label>
                      <input
                        type='text'
                        name='firstname'
                        className='form-control'
                        placeholder='First Name'
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                      />
                      <div className='validation'>
                        {formik.errors.firstname ||
                          (Donate.error.firstname && (
                            <div>
                              {formik.errors.firstname ||
                                Donate.error.firstname}
                            </div>
                          ))}
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
                        {formik.errors.lastname ||
                          (Donate.error.lastname && (
                            <div>
                              {formik.errors.lastname || Donate.error.lastname}
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className='form-group col-md-4'>
                      <label htmlFor='inputPassword4'>Email Address</label>
                      <input
                        type='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      <div className='validation'>
                        {formik.errors.email ||
                          (Donate.error && (
                            <div>
                              {formik.errors.email || Donate.error.email}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='form-group col-md-6 flex-column align-items-start'>
                      <label>Country</label>
                      <select
                        className='form-control'
                        onChange={formik.handleChange}
                        // value={formik.values.country}
                        name='country'
                      >
                        <option>
                          {Countries.loading
                            ? 'loading.....'
                            : 'Select Country '}
                        </option>
                        {Countries.Countries.map((cat, index) => (
                          <option value={cat.name} key={index}>
                            {cat.name}
                          </option>
                        ))}
                      </select>

                      <div className='validation'>
                        {formik.errors.country ||
                          (Donate.error.country && (
                            <div>
                              {formik.errors.country || Donate.error.country}
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className='form-group col-md-6  flex-column align-items-start'>
                      <label>City</label>
                      <input
                        type='text'
                        className='form-control'
                        name='city'
                        // placeholder='Company Name'
                        onChange={formik.handleChange}
                        value={formik.values.city}
                      />
                      <div className='validation'>
                        {formik.errors.city ||
                          (Donate.error.city && (
                            <div>{formik.errors.city || Donate.error.city}</div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='inputAddress2'>Address</label>
                    <input
                      type='text'
                      className='form-control'
                      name='address'
                      id='inputAddress2'
                      //   placeholder='Apartment, studio, or floor'
                      onChange={formik.handleChange}
                      value={formik.values.address}
                    />
                    <div className='validation'>
                      {formik.errors.address ||
                        (Donate.error.address && (
                          <div>
                            {formik.errors.address || Donate.error.address}
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='form-group col-md-6  flex-column align-items-start'>
                      <label>State</label>
                      <input
                        type='text'
                        className='form-control'
                        name='state'
                        placeholder='United States'
                        onChange={formik.handleChange}
                        value={formik.values.state}
                      />
                      <div className='validation'>
                        {formik.errors.state ||
                          (Donate.error.state && (
                            <div>
                              {formik.errors.state || Donate.error.state}
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className='form-group col-md-6  flex-column align-items-start'>
                      <label>Zip</label>
                      <input
                        type='text'
                        className='form-control'
                        name='zip'
                        // placeholder='Company Name'
                        onChange={formik.handleChange}
                        value={formik.values.zip}
                      />
                      <div className='validation'>
                        {formik.errors.zip ||
                          (Donate.error.zip && (
                            <div>{formik.errors.zip || Donate.error.zip}</div>
                          ))}
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className='form-group col-md-12 '>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customCheck1'
                            onChange={() => setAnonymous(!anonymous)}
                            value={anonymous}
                          />

                          <label
                            className='custom-control-label'
                            htmlFor='customCheck1'
                          >
                            I would like the gift to remain anonymous
                          </label>
                          {Donate.error.anonymous && (
                            <div>{Donate.error.anonymous}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={formik.handleSubmit}
                    type='submit'
                    className='btn1 btn-d form-btn'
                    disabled={Donate.loading ? 1 : 0}
                  >
                    {Donate.loading ? 'Please Wait...' : 'Donate'}
                  </button>
                </form>
              </div>
            </div>
            <div></div>
          </div>
          <div className='mt-5'>
            <p>
              <span className='d-block donate-link'>
                For any questions about online donations, please email
                <a
                  href='mailto:gifts@tulipfoundation.org'
                  rel='noreferrer'
                  className='font-weight-bold'
                >
                  gifts@tulipfoundation.com
                </a>
              </span>
            </p>
          </div>
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
      </section>
    </>
  );
}

export default DonatationForm;
