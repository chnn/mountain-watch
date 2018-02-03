import {connect} from 'react-redux'
import LocationList from '../components/LocationList'
import {addNewLocations, setAddingLocation, selectLocation} from '../actions'

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
    onSelectLocation: location => dispatch(selectLocation(location)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationList)
