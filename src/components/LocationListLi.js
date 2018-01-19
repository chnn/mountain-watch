import React from 'react';

export default function LocationListLi(props) {
  return (
    <li>
      <div className="name">{props.location.name}</div>
      <div className="gps">{props.location.gps}</div>
    </li>
  )
}
