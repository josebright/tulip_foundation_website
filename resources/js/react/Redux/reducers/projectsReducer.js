import { Project } from '../constant';

const initialState = {
  loading: false,
  Projects: [],
  message: null,
  error: null,
};
// date

const removeOldDate = (data) => {
  const converDate = [...data];
  const newDate = [];

  const tomorrow = new Date(new Date());
  // const oneDayAfter = tomorrow.setDate(tomorrow.getDate() - 1);
  //console.log(Date.now() + 1);
  // new Date(
  // console.log(
  //   new Date(
  //     converDate[1].programDate
  //       .replace('rd', '')
  //       .replace('th', '')
  //       .replace('st', '')
  //       .replace('nd', '')
  //   ) > Date.now()
  // );
  converDate.map((getDate) =>
    new Date(
      getDate.programDate
        .replace('rd', '')
        .replace('th', '')
        .replace('st', '')
        .replace('nd', '')
    ) > tomorrow
      ? newDate.push(getDate)
      : null
  );
  return newDate;
  // )
  // date.filter((date) => {
  //   if (
  //     new Date(
  //       date.programdate
  //         .replace('rd', '')
  //         .replace('th', '')
  //         .replace('st', '')
  //         .replace('nd', '')
  //     ) > Date.now()
  //   ) {
  //     // console.log(date);
  //   }
  // });
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case Project.GET_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Project.GET_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        Projects: removeOldDate(action.payload),
        message: '',
      };
    case Project.GET_PROJECT_FAILED:
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

export default projectReducer;
