import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../Landing/Home';
import VehicleRegistration from '../OnlineServices/VehicleRegistration';
export default function RouterPage(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/VehicleRegistration" element={<VehicleRegistration/>} />
                </Routes>
            </Router>
        </div>
    
    )
}