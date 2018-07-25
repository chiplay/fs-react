import * as React from 'react';

export interface Alert {
  id: string;
  type: string;
  isTeam: boolean;
  isAbove: boolean;
  threshold: number;
  desc: string;
  creator: string;
}

interface SearchSidebarAlertProps {
  alert: Alert;
}

export default class SearchSidebarAlert extends React.Component <SearchSidebarAlertProps> {
  public render() {
    const { alert } = this.props;

    return (
      <div className="SearchieSidebarAlert">
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
    );
  }

}
