import { Summit } from '../constant';
import axios from '../helper/axios';

const SummitRequest = () => ({
  type: Summit.SUMMIT_REQUEST,
});

const SummitSuccess = (payload) => ({
  type: Summit.SUMMIT_SUCCESS,
  payload,
});

const SummitFailed = (payload) => ({
  type: Summit.SUMMIT_FAILED,
  payload,
});

export const SummitAction = (form) => {
  //console.log(email);
  return async (dispatch) => {
    try {
      dispatch(SummitRequest());
      const res = await axios.post('events', form);
      // console.log(res.status);
      if (res.status === 200) {
        // console.log(res.data);
        const data = {
          url: res.data.url,
        };
        // window.location.href = 'http://www.w3schools.com';
        dispatch(SummitSuccess(res.data.message));

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
            dispatch(SummitFailed(error));
            //   return error;
          })
          .catch(() => {
            // console.log('INTERNET CONNECTIVITY ISSUE');
            // console.log(err.response.data);
            const error = err.response
              ? err.response.data
              : 'oops, something went wrong';
            // console.log(error);
            dispatch(SummitFailed(error));
            //   return error;
          });
      } else {
        dispatch(
          SummitFailed('Ooops something went wrong, Check your connection')
        );
      }
    }
  };
};
