import * as React from 'react';
import { AlertModel } from './SearchieSidebarAlert';
import SearchieSidebarAlert from './SearchieSidebarAlert';
import { Link } from 'react-router-dom';

interface SearchieConfigProps {
  createAlert(): void;
  yourAlerts: AlertModel[];
  teamAlerts: AlertModel[];
  // handleChange(event: any): void;
}

export default class SearchieConfig extends React.Component <SearchieConfigProps> {
  public render() {
    const { createAlert, yourAlerts, teamAlerts } = this.props;

    const renderAlerts = (alerts: AlertModel[]) => {
      return alerts.map((alert: AlertModel) => <SearchieSidebarAlert alert={alert} key={alert.id} />);
    };

    return (
      <div className="SearchieConfig">
        <div className="SearchieActions">
        <Link to="/alert/new" onClick={createAlert} className="actionButton createAlert">Create Alert</Link>
        </div>
        <div className="ManageAlerts">
          <div className="alertListContainer visible">
            <div className="heading">Manage Alerts</div>
            <div className="subheading visible">Your Alerts</div>
            <div>{renderAlerts(yourAlerts)}</div>
            <div className="subheading visible">Team Alerts</div>
            <div>{renderAlerts(teamAlerts)}</div>
          </div>
        </div>
      </div>
    );
  }
}
