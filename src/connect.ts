import { connect } from 'react-redux';
import { fetchAlerts, updateAlertSettings } from './actions';

const itemsSelector = (state: any) => state.alerts.items;
const settingsSelector = (state: any) => state.alerts.settings;

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    items: itemsSelector(state),
    settings: settingsSelector(state)
  }
}

const mapDispatchToProps = { fetchAlerts, updateAlertSettings };

export default connect(mapStateToProps, mapDispatchToProps);
