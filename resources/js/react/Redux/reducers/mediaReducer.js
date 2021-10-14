import { Media } from '../constant';

const initialState = {
  loading: false,
  Medias: [],
  message: null,
  error: null,
};

const MediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case Media.GET_MEDIA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Media.GET_MEDIA_SUCCESS:
      //   console.log(action);
      return {
        ...state,
        loading: false,
        Medias: action.payload,

        // randomMedia: RemoveFirstThree(action.payload),
      };
    case Media.GET_MEDIA_FAILED:
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

export default MediaReducer;
