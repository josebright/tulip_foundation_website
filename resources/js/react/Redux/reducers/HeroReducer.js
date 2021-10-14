import { Hero } from '../constant';

const initialState = {
  loading: false,
  message: null,
  hero: [],
  error: '',
};

const HeroReducer = (state = initialState, action) => {
  switch (action.type) {
    case Hero.Hero_REQUEST:
      //   console.log(action);
      return {
        ...state,
        loading: true,
      };
    case Hero.HERO_SUCCESS:
      //   console.log(action);
      return {
        ...state,
        loading: false,
        hero: action.payload,
        message: '',
        error: '',
      };

    case Hero.HERO_FAILED:
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

export default HeroReducer;
