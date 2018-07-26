import * as ActionTypes from '../actions';
import { combineReducers } from 'redux';

const defaultState = {
  error: null,
  items: [],
  settings: {
    desc: '',
    isAbove: false,
    threshold: '100'
  }
};

const alerts = (state = defaultState, action: any) => {
  const { type, payload } = action;

  switch (type) {
  case ActionTypes.ALERT_SUCCESS:
    return { ...state, items: [ ...state.items, ...payload ]};

  case ActionTypes.ALERT_FAILURE:
    return { ...state, error: payload };

  case ActionTypes.UPDATE_ALERT_SETTINGS:
    return {
      ...state,
      settings: {
        ...state.settings,
        ...payload
      }
    };

  case ActionTypes.ALERT_SAVED: {
    // Temp hack to add new ids with saving alerts
    const newAlert = {
      id: (state.items.length + 1).toString(),
      isTeam: false,
      threshold: parseInt(payload.threshold, 10),
      type: "Daily active"
    };
    return { ...state, items: [ ...state.items, newAlert ]};
  }
  default: return state;
  }
}

const rootReducer = combineReducers({
  alerts
});

export default rootReducer;
