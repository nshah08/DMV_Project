import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../Landing/Home';
import VehicleRegistration from '../OnlineServices/VehicleRegistration';
import ReportVehicle from '../OnlineServices/ReportVehicle';
import ChangeAddress from '../OnlineServices/ChangeAddress';
import RenewDL from '../OnlineServices/RenewDL';
import RealId from '../OnlineServices/RealId';
import VitalRecord from '../OnlineServices/VitalRecord';
import Selling from '../OnlineServices/Selling';
import Titling from '../OnlineServices/titling';
import Pay from '../OnlineServices/Pay';
import Navbar from '../Routing/Navbar'
export default function RouterPage(){
    return(
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/VehicleRegistration" element={<VehicleRegistration/>} />
                    <Route path="/ReportVehicle" element={<ReportVehicle/>} />
                    <Route path="/ChangeAddress" element={<ChangeAddress/>} />
                    <Route path="/RenewDL" element={<RenewDL/>} />
                    <Route path="/RealId" element={<RealId/>} />
                    <Route path="/VitalRecord" element={<VitalRecord/>} />
                    <Route path="/Selling" element={<Selling/>} />
                    <Route path="/Titling" element={<Titling/>} />
                    <Route path="/Pay" element={<Pay/>} />
                </Routes>
            </Router>
        </div>
    
    )
}