import React from 'react'
import Modal from './Modal'
import LocationListLi from './LocationListLi'
import LocationCreator from './LocationCreator'

export default function LocationList(props) {
  const listItems = props.locations.map(location => (
    <LocationListLi key={location.id} location={location} />
  ))

  let maybeModal

  if (props.isAddingNewLocation) {
    maybeModal = (
      <Modal>
        <button className="close-modal" onClick={props.onHideLocationCreator}>
          Close
        </button>
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
