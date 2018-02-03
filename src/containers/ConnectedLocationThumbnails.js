import {connect} from 'react-redux'
import LocationThumbnails from '../components/LocationThumbnails'

const mapStateToProps = state => {
  return {images: state.selectedLocationImages.data}
}

export default connect(mapStateToProps)(LocationThumbnails)
