import { Countries } from '../constant';

const initialState = {
  loading: false,
  message: '',
  Countries: [],
  error: null,
};

const CountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Countries.COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Countries.COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        Countries: action.payload,
        error: '',
      };
    case Countries.COUNTRIES_FAILED:
      // console.log(action);
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CountriesReducer;
