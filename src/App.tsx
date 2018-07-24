import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import './App.scss';

interface AppProps {
  name?: string;
  // handleChange(event: any): void;
}

interface AppState {
  threshold: string;
  createAlert: boolean;
}

class App extends React.Component <AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      createAlert: false,
      threshold: ''
    };
  }

  // componentDidMount() {
  //
  // }

  // handleSubmit = (event) => {
  //
  // }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event,
          { value } = target;
    this.setState({ threshold: value });
  }

  createAlert = () => {
    this.setState({ createAlert: true });
  }

  saveAlert = () => {
    this.setState({ createAlert: false });
  }

  public render() {
    const { createAlert, threshold } = this.state;

    return (
      <Flex className="App" style={{ textAlign: "left", lineHeight: 1.5, fontSize: 12 }}>
        <Flex className="SearchieDetails">
          <Box width={2/3} className="Searchie">
            <div className="title-group">
              <div className="searchie-icon" />
              <div className="title">User Trends</div>
            </div>
            <div className="vis">
              <img style={{ maxWidth: '100%' }} src="https://files.slack.com/files-pri/T02FE3LFK-FBX81FG95/image.png" alt="graph" />
            </div>
          </Box>
          <Box width={1/3} className="SearchieSidebar">
            {!createAlert ?
              <div className="SearchieConfig">
                <div className="SearchieActions">
                    <button onClick={this.createAlert} className="actionButton createAlert">Create Alert</button>
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
              </div> :
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
                      <input value={threshold} onChange={this.handleInputChange} className="value"/>
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
                  <span className="save" onClick={this.saveAlert}>Save</span>
                  <span className="cancel">Cancel</span><span className="delete">Remove Alert</span>
                </div>
              </div>
            }
          </Box>
        </Flex>
      </Flex>
    );
  }
}

export default App;
