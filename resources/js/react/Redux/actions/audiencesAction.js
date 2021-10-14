import { Audience } from '../constant';
import axios from '../helper/axios';

const getAudienceRequest = () => ({
  type: Audience.AUDIENCE_REQUEST,
});

const getAudienceSuccess = (payload) => ({
  type: Audience.AUDIENCE_SUCCESS,
  payload,
});

const getAudienceFailed = (payload) => ({
  type: Audience.AUDIENCE_FAILED,
  payload,
});

export const AudienceAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getAudienceRequest());
      const res = await axios.get('audiences');
      //console.log(res);
      if (res.status === 200) {
        //console.log(res.data);
        dispatch(getAudienceSuccess(res.data.data));
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
            dispatch(getAudienceFailed(error));
          })
          .catch(() => {
            //console.log('INTERNET CONNECTIVITY ISSUE');
            const error = 'oops, something went wrong';
            dispatch(getAudienceFailed(error));
          });
      } else {
        const error = 'oops, something went wrong';
        dispatch(getAudienceFailed(error));
      }
    }
  };
};
