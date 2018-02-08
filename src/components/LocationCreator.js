import React, {Component} from 'react'
import './LocationCreator.css'

class LocationCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {name: '', gps: ''}
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleGPSChange = this.handleGPSChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value.trim()})
  }

  handleGPSChange(event) {
    this.setState({gps: event.target.value.trim()})
  }

  handleSubmit(event) {
    event.preventDefault()

    if (!this.inputIsValid()) {
      return
    }

    const {name, gps} = this.state

    this.props.onCreate({name, gps})
  }

  inputIsValid() {
    const {name, gps} = this.state

    return name.trim() !== '' && gps.trim() !== ''
  }

  render() {
    return (
      <form className="location-creator" onSubmit={this.handleSubmit}>
        <div className="form-group name">
          <label>Name</label>
          <input
            type="text"
            onChange={this.handleNameChange}
            value={this.state.name}
            placeholder="e.g. Mount Hood"
          />
        </div>
        <div className="form-group gps">
          <label>GPS Coordinates</label>
          <input
            type="text"
            onChange={this.handleGPSChange}
            value={this.state.gps}
            placeholder="e.g. 45.3736219, -121.7003285"
          />
        </div>
        <button type="submit" disabled={!this.inputIsValid()}>
          Add Location
        </button>
      </form>
    )
  }
}

export default LocationCreator
