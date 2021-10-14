import { Press } from '../constant';

const initialState = {
  loading: false,
  Press: [],
  message: null,
  error: null,
};

const PressReducer = (state = initialState, action) => {
  switch (action.type) {
    case Press.PRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Press.PRESS_SUCCESS:
      //   console.log(action);
      return {
        ...state,
        loading: false,
        Press: action.payload,

        // randomPress: RemoveFirstThree(action.payload),
      };
    case Press.PRESS_FAILED:
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

export default PressReducer;
