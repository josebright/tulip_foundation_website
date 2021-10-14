import { Audience } from '../constant';

const initialState = {
  loading: false,
  Audience: [],
  message: null,
  error: null,
};

const AudienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case Audience.AUDIENCE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Audience.AUDIENCE_SUCCESS:
      //   console.log(action);
      return {
        ...state,
        loading: false,
        Audience: action.payload,

        // randomAudience: RemoveFirstThree(action.payload),
      };
    case Audience.AUDIENCE_FAILED:
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

export default AudienceReducer;
