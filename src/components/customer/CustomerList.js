import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomerCard } from './CustomerCard';
import { getAllCustomers, getCustomerById, deleteCustomer } from '../../modules/CustomerManager';

export const CustomerList = () => {
  // The initial state is an empty array
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();

  const getCustomers = () => {
    // After the data comes back from the API, we
    //  use the setCustomers function to update state
    return getAllCustomers().then(customersFromAPI => {
      setCustomers(customersFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getCustomers();
  }, []);

  const handleDeleteCustomer = id => {
    deleteCustomer(id)
    .then(() => getAllCustomers().then(setCustomers));
};

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
      <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {navigate("/customers/create")}}>
            Create Customer
        </button>
      </section>
      <div className="container-cards">
        {customers.map(customer =>
          <CustomerCard
            key={customer.id}
            customer={customer}
            handleDeleteCustomer={handleDeleteCustomer} />)}
      </div>
    </>
  );
};