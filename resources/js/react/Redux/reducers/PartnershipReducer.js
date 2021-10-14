import { Partnership } from '../constant';

const initialState = {
  loading: false,
  message: null,
  Partnership: [],
  error: null,
};

const PartnershipReducer = (state = initialState, action) => {
  switch (action.type) {
    case Partnership.PARTNERSHIP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Partnership.PARTNERSHIP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: '',
        Partnership: action.payload,
        error: '',
      };

    case Partnership.PARTNERSHIP_FAILED:
      //   console.log(action);
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

export default PartnershipReducer;
