import { Event } from '../constant';
import axios from '../helper/axios';

const EventRequest = () => ({
  type: Event.EVENT_REQUEST,
});

const EventSuccess = (payload) => ({
  type: Event.EVENT_SUCCESS,
  payload,
});

const EventFailed = (payload) => ({
  type: Event.EVENT_FAILED,
  payload,
});

export const EventAction = () => {
  // console.log('hello');
  return async (dispatch) => {
    try {
      dispatch(EventRequest());

      const res = await axios.get('events');
      // console.log(res, 'next');
      if (res.status === 200) {
        //console.log(res.data);
        dispatch(EventSuccess(res.data.data));
        // return res.data;
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
            dispatch(EventFailed(error));
            //   return error;
          })
          .catch(() => {
            // console.log('INTERNET CONNECTIVITY ISSUE');
            // console.log(err.response.data);
            const error = err.response
              ? err.response.data
              : 'oops, something went wrong';
            // console.log(error);
            dispatch(EventFailed(error));
            //   return error;
          });
      } else {
        dispatch(
          EventFailed('Ooops something went wrong, Check your connection')
        );
      }
    }
  };
};
