import React from 'react'

const LocationThumbnails = ({images}) => {
  return <div>{images.map(img => <li key={img.id}>{img.id}</li>)}</div>
}

export default LocationThumbnails
