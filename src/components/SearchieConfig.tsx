import * as React from 'react';

interface SearchieConfigProps {
  createAlert(): void;
  // handleChange(event: any): void;
}

export default class SearchieConfig extends React.Component <SearchieConfigProps> {
  public render() {
    const { createAlert } = this.props;
    return (
      <div className="SearchieConfig">
        <div className="SearchieActions">
            <button onClick={createAlert} className="actionButton createAlert">Create Alert</button>
        </div>
        <div className="ManageAlerts">
          <div className="alertListContainer visible">
            <div className="heading">Manage Alerts</div>
            <div className="subheading visible">Your Alerts</div>
            <div>
              <div className="SearchieSidebarAlert">
                <div className="headline">
                  <span className="primary">Weekly active</span>
                  <span className="secondary"> users is Above 700</span>
                </div>
                <div className="content">
                  <span className="desc">Testing out weekly actives for pricing page.</span>
                  <span className="separator" style={{ display: 'none' }}> · </span>
                  <span className="email" style={{ display: 'none' }}>chip@fullstory.com</span>
                </div>
              </div>
            </div>
            <div className="subheading visible">Team Alerts</div>
            <div>
              <div className="SearchieSidebarAlert">
                <div className="headline">
                  <span className="primary">Daily active</span>
                  <span className="secondary"> users is Above 150</span>
                </div>
                <div className="content">
                  <span className="desc">Keeping an eye out for spikes in engagement for our pricing page.</span>
                  <span className="separator"> · </span>
                  <span className="email">dilley@fullstory.com</span>
                </div>
              </div>
              <div className="SearchieSidebarAlert">
                <div className="headline">
                  <span className="primary">Daily active</span>
                  <span className="secondary"> users is Below 10</span>
                </div>
                <div className="content">
                  <span className="desc"/>
                  <span className="separator" style={{ display: 'none' }}> · </span>
                  <span className="email">dilley@fullstory.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
