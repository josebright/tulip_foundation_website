import { Subscribe } from '../constant';
import axios from '../helper/axios';

const subscribeRequest = () => ({
  type: Subscribe.SUBSCRIBE_REQUEST,
});

const subscribeSuccess = (payload) => ({
  type: Subscribe.SUBSCRIBE_SUCCESS,
  payload,
});

const subscribeFailed = (payload) => ({
  type: Subscribe.SUBSCRIBE_FAILED,
  payload,
});

export const SubcribeAction = (form) => {
  //console.log(email);
  return async (dispatch) => {
    try {
      dispatch(subscribeRequest());
      const res = await axios.post('subscribe', form);
      // console.log(res.status);
      if (res.status === 200) {
        console.log(res.data);
        dispatch(subscribeSuccess(res.data.message));
        return { type: 'message', message: res.data.message };
      }
    } catch (err) {
      // console.log(err, 'ppp');
      // console.log('kkkk');
      // // var condition = navigator.onLine ? 'online' : 'offline';
      // console.log(err.response);
      //  if (condition === 'online') {
      const error =
        err?.response && err?.response?.data?.message.email[0]
          ? err.response?.data?.message.email[0]
          : 'oops, something went wrong';
      const errorMessage = { type: 'error', error: error };
      dispatch(subscribeFailed(error));
      if (error) {
        return errorMessage;
      }
      // } else {
      //   const error = 'Ooops something went wrong, Check your connection';
      //   const data = { type: 'error', error: error };
      //   dispatch(subscribeFailed(error));
      //   return data;
      // }
    }
  };
};
