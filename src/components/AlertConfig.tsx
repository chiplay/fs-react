import * as React from 'react';
import { Link } from 'react-router-dom';

interface AlertConfigProps {
  saveAlert(): void;
  handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
  threshold: string;
}

export default class AlertConfig extends React.Component <AlertConfigProps> {  
  public render() {
    const { handleInputChange, threshold } = this.props;
    return (
      <div className="AlertConfig showSave">
        <div className="subheading">
          <button className="backArrow">Back</button><span>Create Trendline Alert</span>
        </div>
        <div className="historyContainer">
          <div className="AlertHistory">
            <div className="headlineContainer closed visible">
              <div className="text" />
              <div className="button">History</div>
            </div>
            <div className="headlineContainer opened">
              <div className="text">Alert History</div>
              <div className="button">Close</div>
            </div>
            <div className="items" />
          </div>
        </div>
        <div className="settings">
          <div className="groupLabel">Purpose</div>
          <div className="description">
            <textarea placeholder="e.g. Tracks customer engagement of our new onboarding flow." maxLength={250} />
          </div>
          <hr/>
          <div className="groupLabel">Alert When</div>
          <div>
            <div className="DailyActivesTrendlineConfig"><span className="bold"><span>Daily</span> active</span> users is <button className="modifier">Above</button>
              <input value={threshold} onChange={handleInputChange} className="value"/>
              <div className="explanation">Uses a rolling 24 hour window that is checked every half hour.</div>
            </div>
          </div>
          <hr/>
          <div className="yourNotificationsHeader">
            <div className="groupLabel your">Your notifications</div>
            <div className="unsubscribe visible">Unsubscribe</div>
          </div>
          <div className="yourNotifications">
            <div className="subscribe">Subscribe to this Alert</div>
            <div className="channels visible">
              <div className="checkbox">
                <label className="label"><input type="checkbox" />Email</label>
                <div className="value active"><span className="email">chip@fullstory.com</span></div>
              </div>
            </div>
          </div>
          <div className="groupLabel team">Team notifications</div>
          <div className="teamNotifications">
            <div className="connectSlack hidden">
              <div className="container">
                <div className="icon"/>
                <div className="text">Slack</div>
              </div>
              <div className="button">Connect</div>
            </div>
            <div className="channels">
              <div className="checkbox"><label className="label"><input type="checkbox"/>Slack</label>
                <div className="value"><select><option value="C6Q3XH1LY" label="zapdaddy-test">zapdaddy-test</option></select></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <span className="save"><Link to="/config">Save</Link></span>
          <span className="cancel">Cancel</span><span className="delete">Remove Alert</span>
        </div>
      </div>
    );
  }
}
