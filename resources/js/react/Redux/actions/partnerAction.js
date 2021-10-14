import { Partner } from '../constant';
import axios from '../helper/axios';

const getPartnerRequest = () => ({
  type: Partner.GET_PARTNER_REQUEST,
});

const getPartnerSuccess = (payload) => ({
  type: Partner.GET_PARTNER_SUCCESS,
  payload,
});

const getPartnerFailed = (payload) => ({
  type: Partner.GET_PARTNER_FAILED,
  payload,
});

export const PartnerAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getPartnerRequest());
      const res = await axios.get('partner');
      // console.log(res.status);
      if (res.status === 200) {
        // console.log(res.data.data);
        dispatch(getPartnerSuccess(res.data.data));
      }
    } catch (err) {
      const error = 'oops, something went wrong';
      dispatch(getPartnerFailed(error));
    }
  };
};
