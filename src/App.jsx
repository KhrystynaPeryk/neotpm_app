import './App.scss';
import React, { useState, useEffect } from 'react';
import Home from './components/Home/Home';
import PropertyManagement from './components/PropertyManagement/PropertyManagement';
import PropertyMaintenance from './components/PropertyMaintenance/PropertyMaintenance';
import OwnerSupport from './components/OwnerSupport/OwnerSupport';
import DocumentsRequestForm from './components/DocumentsRequestForm/DocumentsRequestForm';
import PowerOfAttorney from './components/OwnerSupport/components/PowerOfAttorney/PowerOfAttorney';
import Cart from './components/Cart/Cart';
import { Route, Routes } from 'react-router-dom';
import LeadGenerationPopUp from './components/common/LeadGenerationPopUp/LeadGenerationPopUp';

function App() {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  }

  return (
    <div className={showPopup && 'overlay-popup'}>
      {showPopup && <LeadGenerationPopUp onClose={handleClosePopup} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/property-management' element={<PropertyManagement />} />
        <Route path='/property-maintenance' element={<PropertyMaintenance />} />
        <Route path='/owner-support/power-of-attorney' element={<PowerOfAttorney />} />
        <Route path='/owner-support' element={<OwnerSupport />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/documents-form' element={<DocumentsRequestForm />} />
      </Routes>
    </div>
  );
}

export default App;
