import { SummitEvent, Video } from '../constant';
import axios from '../helper/axios';

// const Event = [
//   {
//     id: 1,
//     title: 'Oyo Women Summit and Nice',
//     description: 'Lorm Najs jah ajhs jahjha hajajh ahjhaj',
//     picture: Image1,
//   },
//   {
//     id: 2,
//     title: 'Oyo Women Summit and Nice2',
//     description: 'Lorm Najs jah ajhs jahjha hajajh ahjhaj2',
//     picture: Image2,
//   },
// ];

const SummitEventRequest = () => ({
  type: SummitEvent.SUMMITEVENT_REQUEST,
});

const SummitEventSuccess = (payload) => ({
  type: SummitEvent.SUMMITEVENT_SUCCESS,
  payload,
});

const SummitEventFailed = (payload) => ({
  type: SummitEvent.SUMMITEVENT_FAILED,
  payload,
});

//gETING yoUTUBE aCTION
// const VideoRequest = () => ({
//   type: Video.VIDEO_REQUEST,
// });

const VideoSuccess = (payload) => ({
  type: Video.VIDEO_SUCCESS,
  payload,
});

// const VideoFailed = (payload) => ({
//   type: Video.VIDEO_FAILED,
//   payload,
// });

export const SummitEventAction = (form) => {
  // <Offline>You're offline right now. Check your connection.</Offline>;
  // <Online>You're online right now.</Online>;
  //console.log(email);
  return async (dispatch) => {
    try {
      dispatch(SummitEventRequest());

      const res = await axios.get('summits');
      // console.log(res.status);
      if (res.status === 200) {
        //console.log(res.data);
        dispatch(SummitEventSuccess(res.data.data));
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
            dispatch(SummitEventFailed(error));
            //   return error;
          })
          .catch(() => {
            // console.log('INTERNET CONNECTIVITY ISSUE');
            // console.log(err.response.data);
            const error = err.response
              ? err.response.data
              : 'oops, something went wrong';
            // console.log(error);
            dispatch(SummitEventFailed(error));
            //   return error;
          });
      } else {
        dispatch(
          SummitEventFailed('Ooops something went wrong, Check your connection')
        );
      }
    }
  };
};

export const VideoAction = () => {
  //console.log(email);
  return async (dispatch) => {
    try {
      dispatch(SummitEventRequest());
      const res = await axios.get('videos');
      //console.log(res);
      if (res.status === 200) {
        //console.log(res.data);
        // window.location.href = 'http://www.w3schools.com';
        dispatch(VideoSuccess(res.data.data));
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
            dispatch(SummitEventFailed(error));
            //   return error;
          })
          .catch(() => {
            // console.log('INTERNET CONNECTIVITY ISSUE');
            // console.log(err.response.data);
            const error = err.response
              ? err.response.data
              : 'oops, something went wrong';
            // console.log(error);
            dispatch(SummitEventFailed(error));
            //   return error;
          });
      } else {
        const error = err.response
          ? err.response.data
          : 'oops, something went wrong';
        // console.log(error);
        dispatch(SummitEventFailed(error));
      }
    }
  };
};
