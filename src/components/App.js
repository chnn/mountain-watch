import React from 'react'
import './App.css'
import VisibleLocationList from '../containers/VisibleLocationList'
import VisibleLocationThumbnails from '../containers/VisibleLocationThumbnails'

export default function App() {
  return (
    <div className="app">
      <VisibleLocationList />
      <VisibleLocationThumbnails />
    </div>
  )
}
