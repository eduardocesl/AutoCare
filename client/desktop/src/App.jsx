import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
