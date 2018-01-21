import React from 'react';
import './App.css';
import VisibleLocationList from '../containers/VisibleLocationList';
import LocationThumbnails from './LocationThumbnails';

export default function App() {
    return (
      <div>
        <VisibleLocationList />
        <LocationThumbnails />
      </div>
    );
}
