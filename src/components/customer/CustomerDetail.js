import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { deleteCustomer, getCustomerById } from '../../modules/CustomerManager';
import './CustomerDetail.css';

export const CustomerDetail = () => {
  const [customer, setCustomer] = useState({ name: "", address: "", phone: "", email: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {customerId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getCustomerById(id) from CustomerManager and hang on to the data; put it into state
    console.log("useEffect", customerId)
    getCustomerById(customerId)
      .then(customer => {
        setCustomer(customer);
        setIsLoading(false);
      });
  }, [customerId]);

  const handleDelete = () => {
    //invoke the delete function in CustomerManger and re-direct to the animal list.
    setIsLoading(true);
    deleteCustomer(customerId).then(() =>
      navigate("/customers")
    );
  };

  return (
    <section className="customer">
      <h3 className="customer__name">{customer.name}</h3>
      <div className="customer__address">Address: {customer.address}</div>
      <div className="customer__phone">Phone: {customer.phone}</div>
      <div className="customer__email">Email: {customer.email}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete Customer
        </button>
    </section>
  );
}

