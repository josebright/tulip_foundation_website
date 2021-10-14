import { Categories } from '../constant';
import axios from '../helper/axios';

const CategoriesRequest = () => ({
  type: Categories.CATEGORIES_REQUEST,
});

const CategoriesSuccess = (payload) => ({
  type: Categories.CATEGORIES_SUCCESS,
  payload,
});

const CategoriesFailed = (payload) => ({
  type: Categories.CATEGORIES_FAILED,
  payload,
});

export const CategoriesAction = () => {
  return async (dispatch) => {
    try {
      dispatch(CategoriesRequest());
      const res = await axios.get('categories');
      //console.log(res.data);
      if (res.status === 200) {
        // const successMessage = {
        //   type: 'message',
        //   message: res.data.message,
        // };
        dispatch(CategoriesSuccess(res.data.data));
        // return successMessage;
      }
    } catch (err) {
      // console.log(err.response);

      var condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const error =
          err.response && err.response.data.message
            ? err.response.data.message.email[0]
            : 'oops, something went wrong';
        // const errorMessage = {
        //   type: 'error',
        //   error: error,
        // };
        // console.log(error);
        dispatch(CategoriesFailed(error));
        // return errorMessage;
      } else {
        const error = 'oops...., something went wrong,check the network';
        // const errorMessage = {
        //   type: 'error',
        //   error: error,
        // };
        // console.log(error);
        dispatch(CategoriesFailed(error));
        // return errorMessage;
      }
    }
  };
};
