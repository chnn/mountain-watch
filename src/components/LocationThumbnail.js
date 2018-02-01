import React from 'react'

export default function LocationThumbnail(props) {
  const {thumbnailUrl, description} = props.image

  return (
    <img alt={description} className="location-thumbnail" src={thumbnailUrl} />
  )
}
