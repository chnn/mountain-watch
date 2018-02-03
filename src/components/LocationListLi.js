import React from 'react'

export default function LocationListLi({location, onClick}) {
  const onClickWithLocation = () => onClick(location)

  return (
    <li onClick={onClickWithLocation}>
      <div className="name">{location.name}</div>
      <div className="gps">{location.gps}</div>
    </li>
  )
}
