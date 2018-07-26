import * as React from 'react';
import { Link } from 'react-router-dom';

export interface AlertModel {
  id: string;
  type: string;
  isTeam: boolean;
  isAbove: boolean;
  threshold: string;
  desc: string;
  creator: string;
}

interface SearchSidebarAlertProps {
  alert: AlertModel;
}

export default class SearchSidebarAlert extends React.PureComponent <SearchSidebarAlertProps> {
  public render() {
    const { alert } = this.props;
    const route = `/alert/${alert.id}`;

    return (
      <Link to={route} className="SearchieSidebarAlert">
        <div className="headline">
          <span className="primary">{alert.type}</span>
          <span className="secondary"> users is {alert.isAbove ? "Above" : "Below"} {alert.threshold}</span>
        </div>
        <div className="content">
          <span className="desc">{alert.desc}</span>
          <span className="separator"> · </span>
          <span className="email">{alert.creator}</span>
        </div>
      </Link>
    );
  }
}
