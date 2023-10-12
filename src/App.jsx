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
import Reviews from './components/Reviews/Reviews';
import NotFound from './components/NotFound/NotFound';
import Articles from './components/Articles/Articles';
//import ArticleItem from './components/Articles/components/ArticleItem';
import Article1 from './components/Articles/components/Article1';
import Article2 from './components/Articles/components/Article2';
import Article3 from './components/Articles/components/Article3';

function App() {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  }

  return (
    <div className={showPopup ? 'overlay-popup' : ''}>
      {showPopup && <LeadGenerationPopUp onClose={handleClosePopup} />}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/property-management' element={<PropertyManagement />} />
          <Route path='/property-maintenance' element={<PropertyMaintenance />} />
          <Route path='/owner-support/power-of-attorney' element={<PowerOfAttorney />} />
          <Route path='/owner-support' element={<OwnerSupport />} />
          <Route path='/reviews' element={<Reviews />} />
          {/* <Route path='/articles/:name' element={<ArticleItem />} /> */}
          <Route path='/articles/10-reasons-why-you-really-need-a-property-manager-in-abu-dhabi' element={<Article1/>} />
          <Route path='/articles/7-tips-for-effective-maintenance-in-abu-dhabi' element={<Article2/>} />
          <Route path='/articles/solving-disputes-with-your-tenants-in-abu-dhabi-4-tips-from-a-property-manager' element={<Article3/>} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/documents-form' element={<DocumentsRequestForm />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
