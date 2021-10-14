import { Subscribe } from '../constant';

const initialState = {
  loading: false,
  message: null,
  error: null,
};

const SubscribeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Subscribe.SUBSCRIBE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Subscribe.SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case Subscribe.SUBSCRIBE_FAILED:
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

export default SubscribeReducer;
