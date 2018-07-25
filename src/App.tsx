import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import SearchieConfig from './components/SearchieConfig';
import AlertConfig from './components/AlertConfig';
import Vis from './components/Vis';
import { fetchAlerts } from './actions';
import './App.scss';

interface AppProps {
  store?: string;
  searchieId: string;
  fetchAlerts(searchieId: string): void;
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
    this.props.fetchAlerts();
  }

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

    const yourAlerts = items.filter(item => item.isTeam === false);
    const teamAlerts = items.filter(item => item.isTeam === true);

    const Searchie = () => {
      return <SearchieConfig createAlert={this.createAlert} yourAlerts={yourAlerts} teamAlerts={teamAlerts}/>;
    };

    const Alert = () => {
      return <AlertConfig
        saveAlert={this.saveAlert}
        threshold={threshold}
        handleInputChange={this.handleInputChange}
      />
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
            <Route exact={true} path="/" component={Searchie} />
            <Route path="/alert" component={Alert} />
          </Box>
        </Flex>
      </Flex>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    name: state.name
  }
}

export default withRouter(connect(mapStateToProps, { fetchAlerts })(App));
