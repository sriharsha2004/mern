import React from 'react';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register'
import Login from './Components/Login';
import Userlist from './Components/Userlist';
// import { Route } from 'router';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Explore from './Components/Explore'
import Otp from './Components/otp';
import Golden from './Components/golden';
import Somnath from './Components/somanath';
import Kashi from './Components/kashi';
import Tirupati from './Components/tirupati';
import Padmanabaswamy from './Components/padmanabaswamy';
import Konark from './Components/konark';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path = "/Login" element={<Login/>}/>
        <Route exact path = "/Register" element = {<Register/>}></Route>
        <Route exact path = "/Explore" element = {<Explore/>}></Route>
        <Route exact path = "/otp" element={<Otp/>}></Route>
        <Route exact path = "/golden_temple_panorama" element={<Golden/>}></Route>
        <Route exact path = "/Somnath_panorama" element={<Somnath/>}></Route>
        <Route exact path = "/Konark_panorama" element={<Konark/>}></Route>
        <Route exact path = "/kashi_panorama" element={<Kashi/>}></Route>
        <Route exact path = "/tirupati_panorama" element={<Tirupati/>}></Route>
        <Route exact path = "/Padmanabaswamy_panorama" element={<Padmanabaswamy/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
