import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./components/animal/AnimalList"
import { LocationList } from "./components/location/LocationList"
import { CustomerList } from './components/customer/CustomerList'
import { EmployeeList } from './components/employee/EmployeeList'


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />
                <Route path="/locations" element={<LocationList />} />
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalList />} />
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/employees" element={<EmployeeList />} />
            </Routes>
        </>
    )
}