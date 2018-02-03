import {connect} from 'react-redux'
import App from '../components/App'
import {closeSelectedImageModal} from '../actions'

const mapStateToProps = state => {
  let selectedImage

  if (state.selectedImageId) {
    selectedImage = state.selectedLocationImages.data.find(
      i => i.id === state.selectedImageId
    )
  }

  return {selectedImage}
}

const mapDispatchToProps = dispatch => {
  return {
    onCloseSelectedImageModal: () => dispatch(closeSelectedImageModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
