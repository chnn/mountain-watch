import {connect} from 'react-redux'
import LocationList from '../components/LocationList'
import {addNewLocations, setAddingLocation} from '../actions'

function mapStateToProps({locations, isAddingNewLocation}) {
  return {locations, isAddingNewLocation}
}

function mapDispatchToProps(dispatch) {
  return {
    onShowLocationCreator: () => dispatch(setAddingLocation(true)),
    onHideLocationCreator: () => dispatch(setAddingLocation(false)),
    onLocationCreate: location => {
      dispatch(addNewLocations([location]))
      dispatch(setAddingLocation(false))
    },
    onLocationLoadError: e => {
      throw new Error(e)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationList)
