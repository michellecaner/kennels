import React from "react"
import { Link } from "react-router-dom";
import "./Customer.css"

export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={'/images/dog.svg'} alt="Customer Icon" />
        </picture>
        <h3>Name: <span className="card-customername">
          {customer.name}
        </span></h3>
        {/* <p>Address: {customer.address}</p>
        <p>Phone Number: {customer.phone}</p>
        <p>Email: {customer.email}</p> */}
         <Link to={`/customers/${customer.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to={`/customers/${customer.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Remove Customer</button>
      </div>
    </div>
  );
}
    