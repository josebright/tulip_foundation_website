import { Donation } from '../constant';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const DonationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Donation.DONATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Donation.DONATION_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case Donation.DONATION_FAILED:
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

export default DonationReducer;
