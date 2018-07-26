import { connect } from 'react-redux';
import { createAlert, updateAlertSettings } from '../../actions';
import { AlertModel } from '../../components/SearchieSidebarAlert';

const itemsSelector = (state: any) => state.alerts.items;
const settingsSelector = (state: any) => state.alerts.settings;

const getItemById = (state: any, props: any) => {
  return itemsSelector(state).find((alert: AlertModel) => alert.id === props.id);
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    selectedItem: getItemById(state, ownProps),
    settings: settingsSelector(state)
  }
}

const mapDispatchToProps = { createAlert, updateAlertSettings };

export default connect(mapStateToProps, mapDispatchToProps);
