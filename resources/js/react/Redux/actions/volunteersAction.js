import { Volunteers } from '../constant';
import axios from '../helper/axios';

const VolunteersRequest = () => ({
  type: Volunteers.VOLUNTEERS_REQUEST,
});

const VolunteersSuccess = (payload) => ({
  type: Volunteers.VOLUNTEERS_SUCCESS,
  payload,
});

const VolunteersFailed = (payload) => ({
  type: Volunteers.VOLUNTEERS_FAILED,
  payload,
});

export const VolunteersAction = (form) => {
  //console.log(form);
  return async (dispatch) => {
    try {
      dispatch(VolunteersRequest());
      const res = await axios.post('volunteers', form);
      // console.log(res.status);
      if (res.status === 200) {
        // console.log(res.data);
        const data = {
          type: 'message',
          message: res.data.message,
        };
        dispatch(VolunteersSuccess(res.data.message));
        console.log(res.data.message);
        return data;
      }
    } catch (err) {
      var condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const error = err.response
          ? err.response.data.message.email[0]
          : 'oops, something went wrong';
        // console.log(error);
        const errorMessage = {
          type: 'error',
          error: error,
        };
        dispatch(VolunteersFailed(errorMessage));
        console.log(err.response.data.message);
        return errorMessage;
      } else {
        const error = 'Ooops something went wrong, Check your connection';
        const errorMessage = {
          type: 'error',
          error: error,
        };
        dispatch(VolunteersFailed(errorMessage));
      }

      //   return error;
    }
  };
};
