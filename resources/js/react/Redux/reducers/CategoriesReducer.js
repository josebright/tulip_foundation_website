import { Categories } from '../constant';

const initialState = {
  loading: false,
  Categories: [],
  message: null,
  error: null,
};

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Categories.CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Categories.CATEGORIES_SUCCESS:
      //   console.log(action);
      return {
        ...state,
        loading: false,
        Categories: action.payload,

        // randomCategories: RemoveFirstThree(action.payload),
      };
    case Categories.CATEGORIES_FAILED:
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

export default CategoriesReducer;
