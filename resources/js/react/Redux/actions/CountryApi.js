//https://restcountries.eu/rest/v2/all
import { Countries } from '../constant';
import axios from 'axios';

const CountriesRequest = () => ({
  type: Countries.COUNTRIES_REQUEST,
});

const CountriesSuccess = (payload) => ({
  type: Countries.COUNTRIES_SUCCESS,
  payload,
});

const CountriesFailed = (payload) => ({
  type: Countries.COUNTRIES_FAILED,
  payload,
});

export const CountriesAction = () => {
  return async (dispatch) => {
    try {
      dispatch(CountriesRequest());
      const res = await axios.get('https://restcountries.eu/rest/v2/all');
      //console.log(res.data);
      if (res.status === 200) {
        // const successMessage = {
        //   type: 'message',
        //   message: res.data.message,
        // };
        dispatch(CountriesSuccess(res.data));
        // return successMessage;
      }
    } catch (err) {
      // console.log(err.response);

      var condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const error =
          err.response && err.response.data.message
            ? err.response.data.message.email[0]
            : 'oops, something went wrong';
        // const errorMessage = {
        //   type: 'error',
        //   error: error,
        // };
        // console.log(error);
        dispatch(CountriesFailed(error));
        // return errorMessage;
      } else {
        const error = 'oops...., something went wrong,check the network';
        // const errorMessage = {
        //   type: 'error',
        //   error: error,
        // };
        // console.log(error);
        dispatch(CountriesFailed(error));
        // return errorMessage;
      }
    }
  };
};
