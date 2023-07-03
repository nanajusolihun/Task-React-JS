import * as counter from "./constants";

export const incerment = (value) => {
  return {
    type: counter.INC,
    value: value,
  };
};

export const decerment = (value) => {
  return {
    type: counter.DEC,
    value: value,
  };
};

export const decermentWithCheckingAction = (value) => {
  return (dispatch, gesState) => {
    if (gesState().counter.count > 0) {
      dispatch(decerment(value));
    }
  };
};
