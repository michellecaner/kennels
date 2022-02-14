import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./components/animal/AnimalList"
import { LocationList } from "./components/location/LocationList"
import { CustomerList } from './components/customer/CustomerList'
import { EmployeeList } from './components/employee/EmployeeList'
import {AnimalDetail} from "./components/animal/AnimalDetail"
import {LocationDetail} from "./components/location/LocationDetail"
import { AnimalForm } from "./components/animal/AnimalForm"
import { CustomerForm } from "./components/customer/CustomerForm"


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />
                
                <Route exact path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />
                <Route path="/customers/create" element={<CustomerForm />} />  
                
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={<AnimalList />} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} />


                <Route path="/customers" element={<CustomerList />} />
                
                <Route path="/employees" element={<EmployeeList />} />
            </Routes>
        </>
    )
}

{/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}