import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./components/animal/AnimalCard"
import { LocationCard } from "./components/location/LocationCard"
import { CustomerCard } from './components/customer/CustomerCard'
import { EmployeeCard } from './components/employee/EmployeeCard'


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />
                <Route path="/locations" element={<LocationCard />} />
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalCard />} />
                <Route path="/customers" element={<CustomerCard />} />
                <Route path="/employees" element={<EmployeeCard />} />
            </Routes>
        </>
    )
}