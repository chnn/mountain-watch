import React from 'react'

export default function LocationListLi({location}) {
  return (
    <li>
      <div className="name">{location.name}</div>
      <div className="gps">{location.gps}</div>
    </li>
  )
}
