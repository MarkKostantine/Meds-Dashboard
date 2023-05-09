import React from 'react';
// import './App.css';
// import Navigation from './Components/Navigation';
// import Card from './Components/Card';
import Header from './Components/Header';
// import Home from './Components/Home';
import { Outlet } from "react-router-dom";
import 'tachyons';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
      <Outlet/>      
      {/*<Footer />*/}
    </div>
  );
}

export default App;
