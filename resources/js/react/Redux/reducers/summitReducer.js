import { Summit } from '../constant';
// import { withRouter } from "react-router-dom"

const initialState = {
  loading: false,
  message: null,
  error: [],
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

const SummitReducer = (state = initialState, action) => {
  switch (action.type) {
    case Summit.SUMMIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Summit.SUMMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case Summit.SUMMIT_FAILED:
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

export default SummitReducer;
