import React, { Component } from 'react';
import ReactDOM from "react-dom";
import SwillSDK from 'swill-sdk';
import ResourceList from './ResourceList.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loadingSwill: true,
      actors: null
    };
  }

  async componentWillMount() {
    const sdk = SwillSDK({server:'http://10.0.100.34'});
    this.setState({
      actors: await sdk.resources.actors.getActors(),
      loadingSwill: false
    });
  }

  render() {
    return (
      this.state.loadingSwill ? <div> Loading... </div> : 
      <ResourceList list={this.state.actors}/>
    );
  }
}

export default App;