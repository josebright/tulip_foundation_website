import { Press } from '../constant';
import axios from '../helper/axios';

const getPressRequest = () => ({
  type: Press.PRESS_REQUEST,
});

const getPressSuccess = (payload) => ({
  type: Press.PRESS_SUCCESS,
  payload,
});

const getPressFailed = (payload) => ({
  type: Press.PRESS_FAILED,
  payload,
});

export const PressAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getPressRequest());
      const res = await axios.get('projects');
      //console.log(res);
      if (res.status === 200) {
        //console.log(res.data);
        dispatch(getPressSuccess(res.data.data));
      }
    } catch (err) {
      var condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        //console.log('ONLINE');
        fetch('https://www.google.com/', {
          // Check for internet connectivity
          mode: 'no-cors',
        })
          .then(() => {
            const error = 'oops, something went wrong';
            dispatch(getPressFailed(error));
          })
          .catch(() => {
            //console.log('INTERNET CONNECTIVITY ISSUE');
            const error = 'oops, something went wrong';
            dispatch(getPressFailed(error));
          });
      } else {
        const error = 'oops, something went wrong';
        dispatch(getPressFailed(error));
      }
    }
  };
};
