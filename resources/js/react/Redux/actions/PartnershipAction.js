import { Partnership } from '../constant';
import axios from '../helper/axios';

const PartnershipRequest = () => ({
  type: Partnership.PARTNERSHIP_REQUEST,
});

const PartnershipSuccess = (payload) => ({
  type: Partnership.PARTNERSHIP_SUCCESS,
  payload,
});

const PartnershipFailed = (payload) => ({
  type: Partnership.PARTNERSHIP_FAILED,
  payload,
});

export const PartnershipAction = (form) => {
  //console.log(email);
  return async (dispatch) => {
    try {
      dispatch(PartnershipRequest());

      const res = await axios.get('partnership');
      // console.log(res.status);
      if (res.status === 200) {
        const data = {
          url: res.data.url,
        };
        // window.location.href = 'http://www.w3schools.com';
        dispatch(PartnershipSuccess(res.data.data));

        return data;
      }
    } catch (err) {
      var condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        // console.log('ONLINE');
        fetch('https://www.google.com/', {
          // Check for internet connectivity
          mode: 'no-cors',
        })
          .then(() => {
            // console.log('CONNECTED TO INTERNET');
            // console.log(err.response.data);
            const error = err.response
              ? err.response.data
              : 'oops, something went wrong';
            // console.log(error);
            dispatch(PartnershipFailed(error));
            //   return error;
          })
          .catch(() => {
            // console.log('INTERNET CONNECTIVITY ISSUE');
            // console.log(err.response.data);
            const error = err.response
              ? err.response.data
              : 'oops, something went wrong';
            // console.log(error);
            dispatch(PartnershipFailed(error));
            //   return error;
          });
      } else {
        dispatch(
          PartnershipFailed('Ooops something went wrong, Check your connection')
        );
      }
    }
  };
};
