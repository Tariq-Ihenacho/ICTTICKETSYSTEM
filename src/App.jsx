import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Add from './pages/Add/Add';
//import Account from './pages/Account/Account';
//import Footer from './components/Footer/Footer';
import Status from './pages/Status/Status';
import History from './pages/History/History';
import Track from './pages/Track/Track';
//import Sidebar from './components/SideBar/SideBar';
//import Header from './components/Header/Header';

const App = () => {
  return (
    <Router>
      <NavBar />
  
      <Routes>
        <Route path="/" element={<Status />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/History" element={<History />} />
        <Route path="/Track" element={<Track />} />
        
      </Routes>
      
    </Router>
  )
}

export default App

//   <Header />
//   <Footer />
//   <Sidebar />
//   <Route path="/Account" element={<Account />} />