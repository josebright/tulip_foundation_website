import { Donation } from '../constant';
import axios from '../helper/axios';

const donationRequest = () => ({
  type: Donation.DONATION_REQUEST,
});

const donationSuccess = (payload) => ({
  type: Donation.DONATION_SUCCESS,
  payload,
});

const donationFailed = (payload) => ({
  type: Donation.DONATION_FAILED,
  payload,
});

export const DonationAction = (form) => {
  return async (dispatch) => {
    try {
      dispatch(donationRequest());
      const res = await axios.post('donations', form);
      console.log(res.data);
      if (res.status === 200) {
        // console.log(res.data);
        const data = {
          type: 'message',
          message: res.data.message,
          url: res.data.url,
        };
        dispatch(donationSuccess(res.data.message));
        return data;
      }
    } catch (err) {
      console.log(err.response);
      var condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        // console.log(err.response);
        const error =
          err?.response && err.response?.data.message
            ? err.response?.data.message
            : 'oops, something went wrong';
        // console.log(error);
        const errorMessage = {
          type: 'error',
          error: error,
        };
        dispatch(donationFailed(error));
        return errorMessage;
      } else {
        const error = 'Ooops something went wrong, Check your connection';
        const errorMessage = {
          type: 'error',
          error: error,
        };
        dispatch(donationFailed(error));
        return errorMessage;
      }

      //   return error;
    }
  };
};
