import './App.css';
import React from 'react';
import AppRoutes from './components/appRoutes/AppRoutes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
const App = () => {

  
  return (
    <div>
      <Header />
      <div>
        <AppRoutes></AppRoutes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
