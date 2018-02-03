import React from 'react'
import './App.css'
import ConnectedLocationList from '../containers/ConnectedLocationList'
import ConnectedLocationThumbnails from '../containers/ConnectedLocationThumbnails'
import ImageViewer from './ImageViewer'
import Modal from './Modal'

export default function App({selectedImage, onCloseSelectedImageModal}) {
  return (
    <div className="app">
      <ConnectedLocationList />
      <ConnectedLocationThumbnails />
      {selectedImage && (
        <Modal>
          <ImageViewer
            onDismiss={onCloseSelectedImageModal}
            image={selectedImage}
          />
        </Modal>
      )}
    </div>
  )
}
