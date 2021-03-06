import AppConstant from "../constants/AppConstant";

const initState = {
  overviewIndex: {
    reSale: {}
  }
};

const AppReducer = (state = initState, action) => {
  if (action.type === AppConstant.GET_OVER_VIEW_INDEX) {
    return {
      ...state,
      overviewIndex: action.payload
    };
  }
  return state;
};

export default AppReducer;