import { Partner } from '../constant';

const initialState = {
  loading: false,
  Partners: [],
  message: null,
  error: null,
};

const partnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Partner.GET_PARTNER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Partner.GET_PARTNER_SUCCESS:
      // console.log(action);
      return {
        ...state,
        loading: false,
        Partners: action.payload,
      };
    case Partner.GET_PARTNER_FAILED:
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

export default partnerReducer;
