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
import ArticleItem from './components/Articles/components/ArticleItem';
import About from './components/About/About';

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
          <Route path='/articles/:path' element={<ArticleItem />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact-form' element={<DocumentsRequestForm />} />
          <Route path='/about-us' element={<About />} />
          {/* below urls from the old site that are indexed pages */}
          <Route path='/contacts' element={<Home />} />
          <Route path='/guide-to-renting-out-property-in-abudhabi' element={<Articles />} />
          <Route path='/6-things-pm-knows-that-will-eat-into-your-roi-when-buying-a-property' element={<Articles />} />
          <Route path='/things-to-know-before-investing-in-abudhabi' element={<Articles />} />
          <Route path='/maintenance' element={<PropertyMaintenance />} />
          <Route path='/the-ultimate-guide-to-renting-in-abu-dhabi' element={<Articles/>} />
          <Route path='/careers' element={<Home />} />
          <Route path='/about-tawtheeq-in-abu-dhabi' element={<Articles />} />
          <Route path='/contacts' element={<Home />} />
          <Route path='/about-power-of-attorney-in-abu-dhabi' element={<PowerOfAttorney />} />
          <Route path='/commercial-real-estate-in-abudhabi' element={<Articles/>} />
          <Route path='/property-handover-assistance' element={<OwnerSupport />}  />
          <Route path='/power-of-attorney' element={<PowerOfAttorney />} />
          <Route path='/tawtheeq-services' element={<PowerOfAttorney />} />
          <Route path='/will-service' element={<PowerOfAttorney />} />
          <Route path='/about' element={<About />} />
          <Route path='/essential-role-of-a-property-manager' element={<Articles />} />
          <Route path='/you-should-hire-a-property-maintenance-company-as' element={<Articles/>} />
          <Route path='/do-property-management-companies-find-tenants' element={<Articles />} />
          <Route path='/fast-tenant-sourcing-in-abu-dhabi' element={<Articles />} />
          <Route path='/category/helpful-tips' element={<Home />} />
          <Route path='/blog' element={<Articles />} />
          <Route path='/category/helpful-tips' element={<Articles />} />
          <Route path='/category/real-estate' element={<Articles />} />
          <Route path='/leaving-uae-services' element={<Articles />} />

          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// Disallow: /guide-to-renting-out-property-in-abudhabi
// Disallow: /6-things-pm-knows-that-will-eat-into-your-roi-when-buying-a-property
// Disallow: /things-to-know-before-investing-in-abudhabi
// Disallow: /maintenance
// Disallow: /the-ultimate-guide-to-renting-in-abu-dhabi
// Disallow: /careers
// Disallow: /about-tawtheeq-in-abu-dhabi
// Disallow: /commercial-real-estate-in-abudhabi
// Disallow: /about-power-of-attorney-in-abu-dhabi
// Disallow: /property-handover-assistance
// Disallow: /services/
// Disallow: /power-of-attorney
// Disallow: /tawtheeq-services
// Disallow: /will-service
// Disallow: /about
// Disallow: /essential-role-of-a-property-manager
// Disallow: /blog
// Disallow: /do-property-management-companies-find-tenants
// Disallow: /you-should-hire-a-property-maintenance-company-as
// Disallow: /fast-tenant-sourcing-in-abu-dhabi
// Disallow: /category/helpful-tips
// Disallow: /category/real-estate
// Disallow: /leaving-uae-services

// Disallow: /2022/03
// Disallow: /2022/06
// Disallow: /2022/10
// Disallow: /2022/08
