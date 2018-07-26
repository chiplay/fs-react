import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchieConfig from './components/SearchieConfig';
import AlertConfig from './containers/AlertConfig';
import Vis from './components/Vis';
import { AlertModel } from './components/SearchieSidebarAlert';
import connect from './connect';
import './App.scss';

interface AppProps {
  fetchAlerts(): void;
  updateAlertSettings(settings: AlertModel): void;
  items: AlertModel[];
  settings: AlertModel;
}

class App extends React.Component <AppProps> {
  componentDidMount() {
    this.props.fetchAlerts();
  }

  public render() {
    const { items, settings } = this.props,
          { threshold } = settings;

    const yourAlerts = items.filter(item => item.isTeam === false);
    const teamAlerts = items.filter(item => item.isTeam === true);

    const Searchie = () => {
      return <SearchieConfig yourAlerts={yourAlerts} teamAlerts={teamAlerts}/>;
    };

    const Alert = ({ match }: any) => {
      const { id } = match && match.params;
      return <AlertConfig
        settings={settings}
        updateAlertSettings={this.props.updateAlertSettings}
        id={id}
      />
    };

    return (
      <Flex width={1} p={50} className="App">
        <Flex width={1} className="SearchieDetails">
          <Box width={2/3} mr={50} className="Searchie">
            <div className="title-group">
              <div className="title">User Trends</div>
            </div>
            <Vis threshold={threshold} />
          </Box>
          <Box width={1/3} className="SearchieSidebar">
            <Switch>
              <Route exact={true} path="/" component={Searchie} />
              <Route path="/alert/:id" component={Alert} />
            </Switch>
          </Box>
        </Flex>
      </Flex>
    );
  }
}

export default connect(App);
