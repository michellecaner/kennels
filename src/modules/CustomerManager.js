const remoteURL = "http://localhost:8088"

export const getCustomerById = (customerId) => {
  //be sure your customers have good data and related to a location and customer
  return fetch(`${remoteURL}/customers/${customerId}?_expand=animalId`)
  .then(res => res.json())
}

export const getAllCustomers = () => {
  return fetch(`${remoteURL}/customers`)
  .then(res => res.json())
}
