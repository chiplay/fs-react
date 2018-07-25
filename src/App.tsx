import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import './App.scss';
import SearchieConfig from './components/SearchieConfig';
import AlertConfig from './components/AlertConfig';
import Vis from './components/Vis';
import { BrowserRouter as Router, Route } from 'react-router-dom';

interface AppProps {
  name?: string;
  // handleChange(event: any): void;
}

interface AppState {
  threshold: string;
  createAlert: boolean;
  items: any[];
}

class App extends React.Component <AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      createAlert: false,
      items: [],
      threshold: ''
    };
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/butanian/utils/alerts')
      .then(response => response.json())
      .then(data => this.setState({items: data }));
  }

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
    const { items, threshold } = this.state;

    const Searchie = () => {
      return <SearchieConfig createAlert={this.createAlert} yourAlerts={items} teamAlerts={items}/>;
    };

    const AlertC = () => {
      return <AlertConfig
      saveAlert={this.saveAlert}
      threshold={threshold}
      handleInputChange={this.handleInputChange}
    />
    };

    return (
      <Router>
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
              <Route path="/config" component={Searchie} />
              <Route path="/alert" component={AlertC} />
            </Box>
          </Flex>
        </Flex>
      </Router>
    );
  }
}

export default App;
