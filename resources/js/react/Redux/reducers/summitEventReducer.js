import { SummitEvent, Video } from '../constant';

const initialState = {
  loading: false,
  message: null,
  SummitEvent: {},
  Videos: [],

  error: [],
};

const getLastestSubmit = (summitEvent) => {
  //console.log(summitEvent);
  //const lastSummit = summitEvent.length - 1;
  const Data = summitEvent[0];
  return Data;
};

const replaceWatchWithEmbed = (data) => {
  //the use of this code is to change the watch in the youtube link to embed since the iframe wont work without it
  //console.log(data);
  const me = [];
  data.map((vid) =>
    me.push({ title: vid.title, url: vid.url.replace('watch?v=', 'embed/') })
  );
  console.log(me);
  return me;
};

const SummitEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SummitEvent.SUMMITEVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SummitEvent.SUMMITEVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: '',
        SummitEvent: getLastestSubmit(action.payload),
        error: '',
      };
    case Video.VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        message: '',
        Videos: replaceWatchWithEmbed(action.payload),
      };
    case SummitEvent.SUMMITEVENT_FAILED:
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

export default SummitEventReducer;
