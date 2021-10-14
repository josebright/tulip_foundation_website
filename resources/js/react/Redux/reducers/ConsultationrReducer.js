import { Consultation } from '../constant';

const initialState = {
  loading: false,
  message: '',
  message1: '',
  error: {},
};

const ConsultationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Consultation.CONSULTATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Consultation.CONSULTATION_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case Consultation.CONSULTATION_FAILED:
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

export default ConsultationReducer;
