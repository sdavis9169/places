import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';

class LatandLong extends Component {
    constructor(props){
        super(props)

        this.state = {
            lat: null,
            long: null,
            latAndLongLoaded: false,
            stored: false
        }
    }

    render() {
        setInterval( async () => {
            if (!this.props.coords) {
                this.setState({
                    latAndLongLoaded: false,
                    stored: false
                })
            } else if (!this.state.latAndLongLoaded){
                this.setState({
                    lat: this.props.coords.latitude,
                    long: this.props.coords.longitude,
                    latAndLongLoaded: true,
                    stored: true
                })
            }
            if (this.state.stored){
                console.log(`Latitude: ${ this.props.coords.latitude }`)
                console.log(`Longitude: ${ this.props.coords.longitude }`)
                this.setState({
                    stored: null
                })
            }
        }, 500)

        return (
            <div>
                
            </div>
        )
    }
}



export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(LatandLong);