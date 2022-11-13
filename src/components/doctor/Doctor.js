import React, { Component } from 'react'
// import { BrowserRouter as Router } from "react-router-dom";
import './Doctors.css';
import axios from 'axios'

export class Doctor extends Component {
    state = {
        venues: []
      }
    
      componentDidMount() {
        this.getVenues()
      }
    
      renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBsZrS5LkAXAqzgVYMJQQMYOoWgYCHHZTU&callback=initMap")
        window.initMap = this.initMap
      }
    
      getVenues = () => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?"
        const parameters = {
          client_id: "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR",
          client_secret: "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0",
          query: "doctor",
          near: "Delhi",
          v: "20182507"
        }
    
        axios.get(endPoint + new URLSearchParams(parameters))
          .then(response => {
            this.setState({
              venues: response.data.response.groups[0].items
            }, this.renderMap())
          })
          .catch(error => {
            console.log("ERROR!! " + error)
          })
    
      }
    
      initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 28.5672, lng: 77.2100},
          zoom: 12
        })
    
        var infowindow = new window.google.maps.InfoWindow()
    
        this.state.venues.map(myVenue => {
    
          var contentString = `${myVenue.venue.name}`
    
          var marker = new window.google.maps.Marker({
            position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
            map: map,
            title: myVenue.venue.name
          })
    
          marker.addListener('click', function() {
    
            infowindow.setContent(contentString)
    
            infowindow.open(map, marker)
          })
    
        })
    
      }
    render() {
        return (
            <>
      <div className="info">
<div className="card">
      <div className="card-image"></div>
      <div className="card-text">
        <h2>Dr. Kiran Dev</h2>
        <p>Physician</p>
        <a href="./details" className="btn-flip" data-back="Book" data-front="Set Appointment"></a>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">4</div>
          <div className="type">Star</div>
        </div>
        <div className="stat order">
          <div className="value">123</div>
          <div className="type">reviews</div>
        </div>
        <div className="stat">
          <div className="value">4 Year</div>
          <div className="type">Experience</div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-image card2"></div>
      <div className="card-text card2">
        <h2>Dr. Rahul Kumar</h2>
        <p>Dermatologist</p>
        <a href="./Details" className="btn-flip" data-back="Book" data-front="Set Appointment"></a>
      </div>
      <div className="card-stats card2">
      <div className="stat">
          <div className="value">4.2</div>
          <div className="type">Star</div>
        </div>
        <div className="stat order">
          <div className="value">101</div>
          <div className="type">reviews</div>
        </div>
        <div className="stat">
          <div className="value">10 Year</div>
          <div className="type">Experience</div>
        </div>
      </div>
    </div>
    <div className="card">
        <div className="card-image card3"></div>
        <div className="card-text card3">
          <h2>Dr. Emily Sharma</h2>
          <p>Psychiatrist, Neurologist</p>
        <a href="./Details" className="btn-flip" data-back="Book" data-front="Set Appointment"></a>
        </div>
        <div className="card-stats card3">
        <div className="stat">
          <div className="value">4.1</div>
          <div className="type">Star</div>
        </div>
        <div className="stat order">
          <div className="value">56</div>
          <div className="type">reviews</div>
        </div>
        <div className="stat">
          <div className="value">12 Year</div>
          <div className="type">Experience</div>
        </div>
        </div>
      </div>
      </div>
      <form className="searchbox">
             <input type="search" placeholder="Search for Doctor" />
             <button type="submit" value="search">&nbsp;</button>
         </form>
          <main>
            <div id="map"></div>
          </main>
    </>
        )
    }
}
function loadScript(url) {
    var index  = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
  }

export default Doctor
