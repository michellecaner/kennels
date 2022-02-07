import React from "react"
import "./Customer.css"

export const CustomerCard = ({ customer }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={'images/dog.svg'} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-customername">
            {customer.name}
          </span></h3>
          <p>Address: {customer.address}</p>
          <p>Phone: {customer.phone}</p>
        </div>
      </div>
    );
  }

    // how would i display the animal attached to this customer?? //