import React, { Component } from 'react';
import BandInput from './components/BandInput';
import Bands from './components/Bands';

class App extends Component {
 //  allBands =
 //  this.props.store.getState().bands.map((band, index) => {
 //   return <Bands name={band} key={index} />
 // })

  render() {
    let allBands =
    this.props.store.getState().bands.map((band, index) => {
     return <Bands name={band} key={index} />
   })
    return (
      <div className="App">
        <BandInput store={this.props.store} />
        {allBands}
      </div>
    );
  }
};

export default App;
