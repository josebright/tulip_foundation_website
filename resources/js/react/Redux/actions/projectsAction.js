import { Project } from '../constant';
import axios from '../helper/axios';

const getProjectRequest = () => ({
  type: Project.GET_PROJECT_REQUEST,
});

const getProjectSuccess = (payload) => ({
  type: Project.GET_PROJECT_SUCCESS,
  payload,
});

const getProjectFailed = (payload) => ({
  type: Project.GET_PROJECT_FAILED,
  payload,
});

export const ProjectAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getProjectRequest());
      const res = await axios.get('getInvolved');
      // console.log(res.status);
      if (res.status === 200) {
        // console.log(res.data.data);
        dispatch(getProjectSuccess(res.data.data));
      }
    } catch (err) {
      const error = 'oops, something went wrong';
      dispatch(getProjectFailed(error));
    }
  };
};
