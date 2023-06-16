import './App.scss';
import Home from './components/Home/Home';
import PropertyManagement from './components/PropertyManagement/PropertyManagement';
import PropertyMaintenance from './components/PropertyMaintenance/PropertyMaintenance';
import LegalDocumentationSupport from './components/LegalDocumentationSupport/LegalDocumentationSupport';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/property-management' element={<PropertyManagement />} />
        <Route path='/property-maintenance' element={<PropertyMaintenance />} />
        <Route path='/legal-documentation-support' element={<LegalDocumentationSupport />} />
      </Routes>
    </div>
  );
}

export default App;
