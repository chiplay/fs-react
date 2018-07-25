import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import './App.scss';
import SearchieConfig from './components/SearchieConfig';
import AlertConfig from './components/AlertConfig';

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
        return <SearchieConfig createAlert={this.createAlert} />;
      }
    };

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
            {renderSidebar()}
          </Box>
        </Flex>
      </Flex>
    );
  }
}

export default App;
