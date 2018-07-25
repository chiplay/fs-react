import * as ActionTypes from '../actions';
import { combineReducers } from 'redux';

const defaultState = {
  alerts: [],
  error: null
};

const alerts = (state = defaultState, action: any) => {
  const { type, payload } = action;

  switch (type) {
  case ActionTypes.ALERT_SUCCESS:
    return { ...state, alerts: [ ...state.alerts, payload ]};

  case ActionTypes.ALERT_FAILURE:
    return { ...state, error: payload }

  default: return state;
  }
}

const rootReducer = combineReducers({
  alerts
});

export default rootReducer;
