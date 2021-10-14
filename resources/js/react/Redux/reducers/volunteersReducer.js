import { Volunteers } from '../constant';

const initialState = {
  loading: false,
  message: null,
  error: {},
};

// const convertErrorToArray = (errors) => {
//   const error = errors.message;
//   const list = [];
//   for (let k in error) {
//     list.push(k);
//   }

//   console.log(list);
//   const errorlist = list.map((err) =>
//     error[err] && error[err][0] ? error[err][0] : ''
//   );

//   return errorlist;
// };

const VolunteersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Volunteers.VOLUNTEERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Volunteers.VOLUNTEERS_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case Volunteers.VOLUNTEERS_FAILED:
      // console.log(action);
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default VolunteersReducer;
