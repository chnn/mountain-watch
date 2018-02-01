import React from 'react'
import LocationThumbnail from './LocationThumbnail'

export default function LocationThumbnails(props) {
  const thumbnails = props.locationImages.map(image => (
    <LocationThumbnail key={image.id} image={image} />
  ))

  return <div className="location-thumbnails">{thumbnails}</div>
}
