import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExcercisesList from "./components/excercises-list.component";
import EditExcercise from "./components/edit-excercise.component";
import CreateExcercise from "./components/create-excercise.component";
import CreateUser from "./components/create-user.component";
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
      <Navbar/>
      <br/>
        <Routes>
          <Route path="/" element={<ExcercisesList />} />
          <Route path="/edit/:id" element={<EditExcercise />} />
          <Route path="/create" element={<CreateExcercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
 