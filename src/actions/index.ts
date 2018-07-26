import { Dispatch } from 'redux';
import { AlertModel } from '../components/SearchieSidebarAlert';

export const ALERT_REQUEST = 'ALERT_REQUEST';
export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_FAILURE = 'ALERT_FAILURE';
export const UPDATE_ALERT_SETTINGS = 'UPDATE_ALERT_SETTINGS';

export const fetchAlerts = () => (dispatch: Dispatch) => {
  return fetch('https://my-json-server.typicode.com/butanian/utils/alerts')
    .then(response => response.json())
    .then((alertData: Response) => dispatch(receiveAlerts(alertData)))
    .catch(err => dispatch(alertsFetchError(err)));
};

const receiveAlerts = (alertData: Response) => ({
  payload: alertData,
  type: ALERT_SUCCESS
});

const alertsFetchError = (err: Error) => ({
  payload: err,
  type: ALERT_FAILURE
});

export const updateAlertSettings = (settings: AlertModel) => ({
  payload: settings,
  type: UPDATE_ALERT_SETTINGS
});
