import React, { Component } from 'react';
import LocationListLi from './LocationListLi';

export default class LocationList extends Component {
  render() {
    const listItems = this.props.locations.map(location => 
      <LocationListLi key={location.id} location={location} />
    );

    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}
