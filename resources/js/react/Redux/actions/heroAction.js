import { Hero } from '../constant';
import axios from '../helper/axios';

const heroRequest = () => ({
  type: Hero.HERO_REQUEST,
});

const heroSuccess = (payload) => ({
  type: Hero.HERO_SUCCESS,
  payload,
});

const heroFailed = (payload) => ({
  type: Hero.HERO_FAILED,
  payload,
});

export const HeroAction = () => {
  return async (dispatch) => {
    try {
      dispatch(heroRequest());
      //console.log('working');
      const res = await axios.get('galleries');
      // console.log(res);
      if (res.status === 200) {
        //console.log(res.data);
        dispatch(heroSuccess(res.data.data));
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
            // console.log(error);
            dispatch(heroFailed(error));
            //   return error;
          })
          .catch(() => {
            // console.log('INTERNET CONNECTIVITY ISSUE');
            // console.log(err.response.data);
            const error = err.response
              ? err.response.data
              : 'oops, something went wrong';
            // console.log(error);
            dispatch(heroFailed(error));
            //   return error;
          });
      } else {
        dispatch(
          heroFailed('Ooops something went wrong, Check your connection')
        );
      }
    }
  };
};
