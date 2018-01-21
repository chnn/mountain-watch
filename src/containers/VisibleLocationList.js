import { connect } from 'react-redux';
import LocationList from '../components/LocationList';
import { addNewLocation, setAddingLocation } from '../actions';

function mapStateToProps({locations, isAddingNewLocation}) {
  return {locations, isAddingNewLocation};
}

function mapDispatchToProps(dispatch) {
  return {
    onShowLocationCreator: () => dispatch(setAddingLocation(true)),
    onHideLocationCreator: () => dispatch(setAddingLocation(false)),
    onLocationCreate: location => dispatch(addNewLocation(location)),
  }
}

const VisibleLocationList = connect(mapStateToProps, mapDispatchToProps)(LocationList);

export default VisibleLocationList;
