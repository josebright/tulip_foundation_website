import { Consultation } from '../constant';
import axios from '../helper/axios';

const ConsultationRequest = () => ({
  type: Consultation.CONSULTATION_REQUEST,
});

const ConsultationSuccess = (payload) => ({
  type: Consultation.CONSULTATION_SUCCESS,
  payload,
});

const ConsultationFailed = (payload) => ({
  type: Consultation.CONSULTATION_FAILED,
  payload,
});

export const ConsultationAction = (form) => {
  // console.log(form);
  return async (dispatch) => {
    try {
      dispatch(ConsultationRequest());
      const res = await axios.post('consultations', form);
      //console.log(res);
      if (res.status === 200) {
        const successMessage = {
          type: 'message',
          message: res.data.message,
        };
        dispatch(ConsultationSuccess(res.data.message));
        return successMessage;
      }
    } catch (err) {
      // console.log(err.response);

      var condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const error =
          err.response && err.response.data.message
            ? err.response.data.message.email[0]
            : 'oops, something went wrong';
        const errorMessage = {
          type: 'error',
          error: error,
        };
        // console.log(error);
        dispatch(ConsultationFailed(error));
        return errorMessage;
      } else {
        const error = 'oops...., something went wrong,check the network';
        const errorMessage = {
          type: 'error',
          error: error,
        };
        // console.log(error);
        dispatch(ConsultationFailed(error));
        return errorMessage;
      }
    }
  };
};
