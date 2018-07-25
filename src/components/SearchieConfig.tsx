import * as React from 'react';
import { Alert } from './SearchieSidebarAlert';
import SearchieSidebarAlert from './SearchieSidebarAlert';

interface SearchieConfigProps {
  createAlert(): void;
  yourAlerts: Alert[];
  teamAlerts: Alert[];
  // handleChange(event: any): void;
}

export default class SearchieConfig extends React.Component <SearchieConfigProps> {
  public render() {
    const { createAlert, yourAlerts, teamAlerts } = this.props;

    const renderAlerts = (alerts: Alert[]) => {
      return alerts.map((alert: Alert) => <SearchieSidebarAlert alert={alert} key={alert.id} />);
    };

    return (
      <div className="SearchieConfig">
        <div className="SearchieActions">
            <button onClick={createAlert} className="actionButton createAlert">Create Alert</button>
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
