import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./components/animal/AnimalList"
import { LocationList } from "./components/location/LocationList"
import { CustomerList } from './components/customer/CustomerList'
import { EmployeeList } from './components/employee/EmployeeList'
import {AnimalDetail} from "./components/animal/AnimalDetail"
import {LocationDetail} from "./components/location/LocationDetail"
import {CustomerDetail} from "./components/customer/CustomerDetail"
import { AnimalForm } from "./components/animal/AnimalForm"
import { CustomerForm } from "./components/customer/CustomerForm"
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { AnimalEditForm } from './components/animal/AnimalEditForm'
import { LocationEditForm } from './components/location/LocationEditForm'
import { CustomerEditForm } from './components/customer/CustomerEditForm'


export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("kennel_customer", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            <Routes>
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />

                <Route exact path="/register" element={<Register />} />
                
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>    
                } />
                
                <Route exact path="/locations" element={
                    <PrivateRoute>
                        <LocationList />
                    </PrivateRoute>
                        } />

                <Route exact path="/locations/:locationId" element={<LocationDetail />} /> 

                <Route path="/locations/:locationId/edit" element={
                <PrivateRoute>
                    <LocationEditForm />
                </PrivateRoute>
                } />             
                
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={
                    <PrivateRoute>
                        <AnimalList />
                    </PrivateRoute>
                } />

                <Route exact path="/animals/:animalId" element={
                    <PrivateRoute>
                        <AnimalDetail />
                    </PrivateRoute>
                    } />

                <Route path="/animals/:animalId/edit" element={
                    <PrivateRoute>
                        <AnimalEditForm />
                    </PrivateRoute>
                    } />

                <Route path="/animals/create" element={<AnimalForm />} />


                <Route path="/customers" element={
                    <PrivateRoute>
                        <CustomerList />
                    </PrivateRoute>
                } />

                <Route path="/customers/:customerId/edit" element={
                <PrivateRoute>
                    <CustomerEditForm />
                </PrivateRoute>
                } />

                <Route exact path="/customers/:customerId" element={
                <PrivateRoute>
                    <CustomerDetail />
                </PrivateRoute>
                } />

                <Route path="/customers/create" element={
                <PrivateRoute>
                    <CustomerForm />
                </PrivateRoute>   
                } />

                
                <Route path="/employees" element={
                    <PrivateRoute>
                        <EmployeeList />
                    </PrivateRoute>
                } />
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