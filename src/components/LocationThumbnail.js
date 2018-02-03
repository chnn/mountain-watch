import React from 'react'

const LocationThumbnail = ({image}) => {
  return (
    <div className="location-thumbnail">
      <img src={image.thumbnailUrl} alt={image.description} />
    </div>
  )
}

export default LocationThumbnail
