import React from 'react'
import LocationThumbnail from './LocationThumbnail'
import LoadingSpinner from './LoadingSpinner'
import './LocationThumbnails.css'

const LocationThumbnails = props => {
  const {status, data} = props.images

  if (status === 'loading') {
    return (
      <div className="location-thumbnails">
        <LoadingSpinner />
      </div>
    )
  }

  if (status === 'error') {
    throw new Error('Have not implemented error state')
  }

  return (
    <div className="location-thumbnails">
      {data.map(image => <LocationThumbnail key={image.id} image={image} />)}
    </div>
  )
}

export default LocationThumbnails
