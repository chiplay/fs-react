import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import './App.scss';
import SearchieConfig from './components/SearchieConfig';
import AlertConfig from './components/AlertConfig';
import Vis from './components/Vis';

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

    // TODO(sarahgrace): Temporary static alerts, replace with XHR "request"
    const yourAlerts = [
      {id: "1", type: "Weekly active", isAbove: true, threshold: 700, creator: "chip@fullstory.com", desc: "Testing out weekly actives for pricing page."}
    ];
    const teamAlerts = [
      {id: "2", type: "Daily active", isAbove: true, threshold: 150, creator: "dilley@fullstory.com", desc: "Keeping an eye out for spikes in engagement for our pricing page."},
      {id: "3", type: "Daily active", isAbove: false, threshold: 10, creator: "dilley@fullstory.com", desc: ""}
    ];

    const renderSidebar = () => {
      if (createAlert) {
        return (
          <AlertConfig
            saveAlert={this.saveAlert}
            threshold={threshold}
            handleInputChange={this.handleInputChange}
          />
        );
      } else {
        return <SearchieConfig createAlert={this.createAlert} yourAlerts={yourAlerts} teamAlerts={teamAlerts}/>;
      }
    };

    return (
      <Flex className="App" style={{ textAlign: "left", lineHeight: 1.5, fontSize: 12 }}>
        <Flex width={1} className="SearchieDetails">
          <Box width={2/3} className="Searchie">
            <div className="title-group">
              <div className="searchie-icon" />
              <div className="title">User Trends</div>
            </div>
            <Vis threshold={threshold} />
          </Box>
          <Box width={1/3} className="SearchieSidebar">
            {renderSidebar()}
          </Box>
        </Flex>
      </Flex>
    );
  }
}

export default App;
