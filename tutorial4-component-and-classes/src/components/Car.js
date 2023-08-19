import React from 'react';

class Car extends React.Component {

    constructor() {
        super();
        this.state = { color: "red" };
    }


    render() {
        return <h2>I am a {this.props.typecar} {this.state.color} Car!</h2>;
    }
}

class Garage extends React.Component {
    render() {
      return (
        <div>
        <h1>Who lives in my Garage?</h1>
        <Car typecar="BMW"/>
        </div>
      );
    }
  }

export default Garage;