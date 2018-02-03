import React from 'react'

const LocationThumbnail = ({image, onClick}) => {
  const boundOnClick = () => onClick(image)

  return (
    <div className="location-thumbnail" onClick={boundOnClick}>
      <img src={image.thumbnailUrl} alt={image.description} />
    </div>
  )
}

export default LocationThumbnail
