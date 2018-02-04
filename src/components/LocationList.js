import React from 'react'
import Modal from './Modal'
import LocationListLi from './LocationListLi'
import LocationCreator from './LocationCreator'
import LoadingSpinner from './LoadingSpinner'
import './LocationList.css'

export default function LocationList(props) {
  const {locations, isAddingNewLocation} = props

  if (locations.status === 'loading') {
    return (
      <div className="location-list">
        <LoadingSpinner />
      </div>
    )
  } else if (locations.status === 'failed') {
    props.onLocationLoadError(locations.error)

    return <div className="location-list"> </div>
  } else if (locations.status === 'notStarted') {
    // We expect this branch to never be hit, since the locations fetch is
    // initiated when the app boots up
    throw new Error('Expected store.locations to be started')
  }

  const listItems = locations.data.map(location => (
    <LocationListLi
      key={location.id}
      location={location}
      onClick={props.onSelectLocation}
    />
  ))

  let maybeModal

  if (isAddingNewLocation) {
    maybeModal = (
      <Modal onDismiss={props.onHideLocationCreator}>
        <LocationCreator onCreate={props.onLocationCreate} />
      </Modal>
    )
  } else {
    maybeModal = ''
  }

  return (
    <div className="location-list">
      <button
        className="show-location-creator"
        onClick={props.onShowLocationCreator}
      >
        Add New Location
      </button>
      <ul>{listItems}</ul>
      {maybeModal}
    </div>
  )
}
