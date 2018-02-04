import React from 'react'
import './ImageViewer.css'

const ImageViewer = ({image}) => {
  return (
    <div className="image-viewer">
      <div className="image">
        <img src={image.imgUrl} alt={image.description} />
      </div>
      <div className="description">
        <span className="user">@{image.user}</span>
        {image.description}
      </div>
    </div>
  )
}

export default ImageViewer
