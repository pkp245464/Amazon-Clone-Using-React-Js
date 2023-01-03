import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/checkout" element={<Checkout/>} />
        {/* element={<><...><...><...><...></>}     <>: React Fragment*/}
        {/* <Route path="/checkout" element={<><Checkout/><h1>Checkout Page</h1></>} /> */}
        <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
      </Router>
  );  
}
export default App;
