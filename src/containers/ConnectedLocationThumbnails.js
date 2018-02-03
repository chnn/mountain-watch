import {connect} from 'react-redux'
import LocationThumbnails from '../components/LocationThumbnails'
import {setSelectedImageId} from '../actions'

const mapStateToProps = state => {
  return {images: state.selectedLocationImages}
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectImage: image => dispatch(setSelectedImageId(image.id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationThumbnails)
