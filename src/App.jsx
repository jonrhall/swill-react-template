import React from 'react';
import SwillSDK from 'swill-sdk';
import CssBaseline from '@material-ui/core/CssBaseline';
import ResourceList from './ResourceList';
import config from '../config.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loadingSwill: true,
      actors: null
    };
  }

  async componentWillMount() {
    const setup = {};
    if (config.server) {
      setup.server = `http://${config.server}`;
    }

    const sdk = SwillSDK(setup);
    this.setState({
      actors: await sdk.resources.actors.getActors(),
      loadingSwill: false
    });
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {this.state.loadingSwill ?
          <div>Loading...</div> : <ResourceList list={this.state.actors} resource="Actor" />}
      </React.Fragment>
    );
  }
}

export default App;
