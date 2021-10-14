import { Team } from '../constant';
import axios from '../helper/axios';

const getTeamRequest = () => ({
  type: Team.GET_TEAM_REQUEST,
});

const getTeamSuccess = (payload) => ({
  type: Team.GET_TEAM_SUCCESS,
  payload,
});

const getTeamFailed = (payload) => ({
  type: Team.GET_TEAM_FAILED,
  payload,
});

export const TeamAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getTeamRequest());
      const res = await axios.get('teams');
      // console.log(res);
      if (res.status === 200) {
        // console.log(res.data);
        dispatch(getTeamSuccess(res.data.data));
      }
    } catch (err) {
      const error = 'oops, something went wrong';
      // console.log(err.response.data.message);
      dispatch(getTeamFailed(error));
    }
  };
};
