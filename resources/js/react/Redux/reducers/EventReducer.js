import { Event } from '../constant';

const initialState = {
  loading: false,
  message: null,
  Event: [],
  error: [],
};

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case Event.EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Event.EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: '',
        Event: action.payload,
        error: '',
      };
    // case Video.VIDEO_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     message: '',
    //     Videos: replaceWatchWithEmbed(action.payload),
    //   };
    case Event.EVENT_FAILED:
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

export default EventReducer;
