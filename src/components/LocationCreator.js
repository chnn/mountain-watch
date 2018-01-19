import React, { Component } from 'react';

class LocationCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', gps: ''}; 
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleGPSChange = this.handleGPSChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value.trim()});
  }

  handleGPSChange(event) {
    this.setState({gps: event.target.value.trim()});
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.inputIsValid()) {
      return;
    }

    const {name, gps} = this.state;

    this.props.onCreate({name, gps});
  }

  inputIsValid() {
    const {name, gps} = this.state;

    return name.trim() !== '' && gps.trim() !== '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="name">
          <label>Name</label>
          <input type="text" onChange={this.handleNameChange} value={this.state.name} />
        </div>
        <div className="gps">
          <label>GPS Coordinates</label>
          <input type="text" onChange={this.handleGPSChange} value={this.state.gps} />
        </div>
        <button type="submit" disabled={!this.inputIsValid()}>Add Location</button>
      </form>
    )
  }
}

export default LocationCreator;
