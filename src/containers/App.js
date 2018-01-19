import React, { Component } from 'react';
import './App.css';
import LocationList from '../components/LocationList';
import LocationThumbnails from './LocationThumbnails';

const LOCATIONS_FIXTURE = [
  {gps: '45.3736219,-121.7003285', name: 'Mt. Hood', id: '1'},
  {gps: '46.860203,-121.7849626', name: 'Mt. Rainer', id: '2'},
  {gps: '48.537632,-121.1386604', name: 'Eldorado Peak', id: '3'},
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentLocation: null};
  }

  render() {
    return (
      <div>
        <LocationList locations={LOCATIONS_FIXTURE} />
        <LocationThumbnails location={this.state.currentLocation} />
      </div>
    );
  }
}

export default App;
