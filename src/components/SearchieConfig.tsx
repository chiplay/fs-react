import * as React from 'react';

export interface Alert {
  id: string;
  type: string;
  isAbove: boolean;
  threshold: number;
  desc: string;
  creator: string;
}

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
      const items = alerts.map((alert: Alert) => {
        return (
          <div className="SearchieSidebarAlert" key={alert.id}>
            <div className="headline">
              <span className="primary">{alert.type}</span>
              <span className="secondary"> users is {alert.isAbove ? "Above" : "Below"} {alert.threshold}</span>
            </div>
            <div className="content">
              <span className="desc">{alert.desc}</span>
              <span className="separator"> · </span>
              <span className="email">{alert.creator}</span>
            </div>
          </div>
        )
      });
      return (
        <div>{items}</div>
      );
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
            {renderAlerts(yourAlerts)}
            <div className="subheading visible">Team Alerts</div>
            {renderAlerts(teamAlerts)}
          </div>
        </div>
      </div>
    );
  }
}
