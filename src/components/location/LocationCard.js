import React from "react"
import "./Location.css"

export const LocationCard = ({ location, handleDeleteLocation }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={'/images/dog.svg'} alt="Location Icon" />
        </picture>
        <h3>Name: <span className="card-locationname">
        {location.name}
        </span></h3>
         <p>Address: {location.address}</p>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>Close Location</button>
      </div>
    </div>
  );
}

