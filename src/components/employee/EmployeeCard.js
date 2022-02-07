import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={'images/dog.svg'} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-employeename">
            {employee.name}
          </span></h3>
        </div>
      </div>
    );
  }