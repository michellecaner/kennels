import React from "react"
import "./Location.css"
import { Link } from "react-router-dom";


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
         {/* <p>Address: {location.address}</p> */}
         <Link to={`/locations/${location.id}/edit`}>
          <button>Edit</button>
        </Link>
         <Link to={`/locations/${location.id}`}>
          <button>Details</button>
          </Link>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>Close Location</button>
      </div>
    </div>
  );
}

