import React from 'react'
import './ImageViewer.css'

const ImageViewer = ({image, onDismiss}) => {
  return (
    <div className="image-viewer">
      <button className="dismiss" onClick={onDismiss}>
        Close
      </button>
      <img src={image.imgUrl} alt={image.description} />
      <div className="description">
        <span className="user">@{image.user}</span>
        {image.description}
      </div>
    </div>
  )
}

export default ImageViewer
