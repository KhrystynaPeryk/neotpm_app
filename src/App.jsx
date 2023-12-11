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
import Article4 from './components/Articles/components/Article4';
import Article5 from './components/Articles/components/Article5';
import Article6 from './components/Articles/components/Article6';
import Article7 from './components/Articles/components/Article7';
import Article8 from './components/Articles/components/Article8';

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
          <Route path='/articles/leaving-the-uae-15-tips-to-not-have-any-headaches-after-you-are-gone-especially-for-property-owners' element={<Article4 />} />
          <Route path='/articles/avoid-these-5-common-mistakes-to-prevent-losses-on-your-investment' element={<Article5 />} />
          <Route path='/articles/how-to-get-a-poa-done-with-no-title-deed' element={<Article6 />} />
          <Route path='/articles/top-11-questions-answered-on-property-golden-visa-application-in-abu-dhabi' element={<Article7 />} />
          <Route path='/articles/discover-truth-behind-property-management-myths' element={<Article8 />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/documents-form' element={<DocumentsRequestForm />} />
          {/* below urls from the old site that are indexed pages */}
          <Route path='/contacts' element={<Home />} />
          <Route path='/guide-to-renting-out-property-in-abudhabi' element={<Article1 />} />
          <Route path='/6-things-pm-knows-that-will-eat-into-your-roi-when-buying-a-property' element={<Article1 />} />
          <Route path='/things-to-know-before-investing-in-abudhabi' element={<Article1 />} />
          <Route path='/maintenance' element={<PropertyMaintenance />} />
          <Route path='/the-ultimate-guide-to-renting-in-abu-dhabi' element={<Article2/>} />
          <Route path='/careers' element={<Home />} />
          <Route path='/about-tawtheeq-in-abu-dhabi' element={<Article1 />} />
          <Route path='/contacts' element={<Home />} />
          <Route path='/about-power-of-attorney-in-abu-dhabi' element={<PowerOfAttorney />} />
          <Route path='/commercial-real-estate-in-abudhabi' element={<Article1/>} />
          <Route path='/property-handover-assistance' element={<OwnerSupport />}  />
          <Route path='/power-of-attorney' element={<PowerOfAttorney />} />
          <Route path='/tawtheeq-services' element={<PowerOfAttorney />} />
          <Route path='/will-service' element={<PowerOfAttorney />} />
          <Route path='/about' element={<Home />} />
          <Route path='/essential-role-of-a-property-manager' element={<Article1 />} />
          <Route path='/you-should-hire-a-property-maintenance-company-as' element={<Article2/>} />
          <Route path='/do-property-management-companies-find-tenants' element={<Article1 />} />
          <Route path='/fast-tenant-sourcing-in-abu-dhabi' element={<Article1 />} />
          <Route path='/category/helpful-tips' element={<Home />} />
          <Route path='/blog' element={<Articles />} />
          <Route path='/category/helpful-tips' element={<Articles />} />
          <Route path='/category/real-estate' element={<Articles />} />
          <Route path='/leaving-uae-services' element={<Article4 />} />

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
