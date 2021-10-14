import { Media } from '../constant';
import axios from '../helper/axios';

const getMediaRequest = () => ({
  type: Media.GET_MEDIA_REQUEST,
});

const getMediaSuccess = (payload) => ({
  type: Media.GET_MEDIA_SUCCESS,
  payload,
});

const getMediaFailed = (payload) => ({
  type: Media.GET_MEDIA_FAILED,
  payload,
});

export const MediaAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getMediaRequest());
      const res = await axios.get('blogs');
      //console.log(res);
      if (res.status === 200) {
        //console.log(res.data);
        dispatch(getMediaSuccess(res.data.data));
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
            dispatch(getMediaFailed(error));
          })
          .catch(() => {
            //console.log('INTERNET CONNECTIVITY ISSUE');
            const error = 'oops, something went wrong';
            dispatch(getMediaFailed(error));
          });
      } else {
        const error = 'oops, something went wrong';
        dispatch(getMediaFailed(error));
      }
    }
  };
};
