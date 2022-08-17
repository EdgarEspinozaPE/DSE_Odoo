import React,{useEffect,useState} from 'react'
import './App.css'
import axios  from 'axios';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Table from './Page/Table/Table';
import VistaPrincipal from './Page/VistaPrincipal/VistaPrincipal'
import BarChart from './components/BarChart'
import DataElement from './components/DataElement';
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import BubbleChart from './components/BubbleChart'
import {UserData} from './Data'

//import { assign } from 'lodash';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VistaPrincipal />} />
        <Route path="/table" element={<Table />} />
        <Route path="/bubble" element={<BubbleChart/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
