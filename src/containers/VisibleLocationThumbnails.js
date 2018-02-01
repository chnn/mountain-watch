import {connect} from 'react-redux'
import LocationThumbnails from '../components/LocationThumbnails'

function mapStateToProps({locationImages}) {
  return {locationImages}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationThumbnails)
