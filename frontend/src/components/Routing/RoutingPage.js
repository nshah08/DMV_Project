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
import Navbar from '../Routing/Navbar'
import VehicleUpdate from '../OnlineServices/VehicleUpdate';
import AddressUpdate from '../OnlineServices/AddressUpdate';
import DLUpate from '../OnlineServices/DLUpdate';
import ReportUpdate from '../OnlineServices/ReportUpdate';
import UserInfo from '../OnlineServices/UserInfo';
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
                    <Route path="/VehicleUpdate" element={<VehicleUpdate/>} />
                    <Route path="/AddressUpdate" element={<AddressUpdate/>} />
                    <Route path="/DLUpdate" element={<DLUpate/>} />
                    <Route path="/ReportUpdate" element={<ReportUpdate/>} />
                    <Route path="/UserInfo" element={<UserInfo/>} />
                </Routes>
            </Router>
        </div>
    
    )
}