import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'

export class Container extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div>
      Hello from the container
      <Map
        google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (__GAPI_KEY__)
})(Container)
