import React from 'react'
import './App.css'
import ConnectedLocationList from '../containers/ConnectedLocationList'
import ConnectedLocationThumbnails from '../containers/ConnectedLocationThumbnails'

export default function App() {
  return (
    <div className="app">
      <ConnectedLocationList />
      <ConnectedLocationThumbnails />
    </div>
  )
}
