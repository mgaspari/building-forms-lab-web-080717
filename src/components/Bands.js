import React, { Component } from 'react';

class Bands extends Component {
  render(){
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
};

export default Bands;
