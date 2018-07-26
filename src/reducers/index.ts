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

  default: return state;
  }
}

const rootReducer = combineReducers({
  alerts
});

export default rootReducer;
