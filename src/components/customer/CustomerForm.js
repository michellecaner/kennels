import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../../modules/CustomerManager';
import { getAllAnimals } from '../../modules/AnimalManager';
import './CustomerForm.css'

export const CustomerForm = () => {
	// State will contain both customer data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [customer, setCustomer] = useState({
		name: "",
		address: "",
    phone: "",
		animalId: 0,
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the AnimalsManager to complete this section
	const [animals, setAnimals] = useState([]);

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newCustomer = { ...customer }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newCustomer[event.target.id] = selectedVal
		// update state
		setCustomer(newCustomer)
	}

  // const getLocations = () => {
  //   return getAllLocations().then(locationsFromAPI => {
  //       setLocations(locationsFromAPI)
  //   })
  // }; 

  // const getCustomers = () => {
  //   return getAllCustomers().then(customersFromAPI => {
  //       setCustomers(customersFromAPI)
  //   })
  // };

    useEffect(() => {
		//load location data and setState
      getAllAnimals().then(setAnimals)
	}, []);

  //    useEffect(() => {
	// 	//load customer data and setState
  //     getAllCustomers().then(setCustomers)
	// }, []);


	const handleClickSaveCustomer = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const animalId = customer.animalId

		if (animalId === 0) {
			window.alert("Please select an animal")
		} else {
			//invoke addAnimal passing animal as an argument.
			//once complete, change the url and display the animal list
			addCustomer(customer)
				.then(() => navigate("/customers"))
		}
	}

	return (
		<form className="customerForm">
			<h2 className="customerForm__title">New Customer</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Customer name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer name" value={customer.name} />
				</div>
			</fieldset>
      <fieldset>
				<div className="form-group">
					<label htmlFor="address">Customer address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer address" value={customer.address} />
				</div>
			</fieldset>
      <fieldset>
				<div className="form-group">
					<label htmlFor="phone">Customer phone:</label>
					<input type="text" id="phone" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer phone" value={customer.phone} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="animal">Assign animal to customer: </label>
					<select value={customer.animalId} name="animalId" id="animalId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select an animal</option>
						{animals.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveCustomer}>
				Save Customer
          </button>
		</form>
	)
};
