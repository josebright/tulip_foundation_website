import { Team } from '../constant';

const initialState = {
  loading: false,
  Team: [],
  message: null,
  error: null,
};

const TeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case Team.GET_TEAM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Team.GET_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        Team: action.payload,
        // message: 'no here',
      };
    case Team.GET_TEAM_FAILED:
      // console.log(action);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default TeamReducer;
