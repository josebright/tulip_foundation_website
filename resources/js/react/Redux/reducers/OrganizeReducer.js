import { Organize } from '../constant';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const OrganizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Organize.ORGANIZE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Organize.ORGANIZE_SUCCESS:
      // console.log(action);
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case Organize.ORGANIZE_FAILED:
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

export default OrganizeReducer;
