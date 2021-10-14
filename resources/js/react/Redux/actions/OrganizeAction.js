import { Organize } from '../constant';
import axios from '../helper/axios';

const OrganizeRequest = () => ({
  type: Organize.ORGANIZE_REQUEST,
});

const OrganizeSuccess = (payload) => ({
  type: Organize.ORGANIZE_SUCCESS,
  payload,
});

const OrganizeFailed = (payload) => ({
  type: Organize.ORGANIZE_FAILED,
  payload,
});

export const OrganizeAction = (form) => {
  // console.log(form);
  return async (dispatch) => {
    try {
      dispatch(OrganizeRequest());
      const res = await axios.post('partnerForm', form);
      //.log(res);
      if (res.status === 200) {
        //console.log(res.data);
        // console.log(res.data.message);
        const data = {
          type: 'message',
          message: res.data.message,
        };
        dispatch(OrganizeSuccess(res.data.message));
        return data;
      }
    } catch (err) {
      //console.log(err.response);

      var condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const error =
          err.response && err.response.data.message
            ? err.response.data.message
            : 'oops, something went wrong';

        const data = {
          type: 'error',
          error: error,
        };
        //console.log(error);
        dispatch(OrganizeFailed(error));
        return data;
      } else {
        // console.log(error);
        const error = 'oops...., something went wrong,check the network';
        const data = {
          type: 'error',
          error: error,
        };
        dispatch(OrganizeFailed(error));
        return data;
      }
    }
  };
};
