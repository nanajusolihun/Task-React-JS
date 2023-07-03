import * as counter from "./constants";

let initialState = {
  count: 0,
  name: "Jusolihun",
};

const counterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case counter.INC:
      return {
        ...state,
        count: state.count + actions.value,
      };

    case counter.DEC:
      return {
        ...state,
        count: state.count - actions.value,
      };

    default:
      return state;
  }
};

export default counterReducer;
