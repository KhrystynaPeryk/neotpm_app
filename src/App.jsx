import './App.scss';
import Home from './components/Home/Home';
import PropertyManagement from './components/PropertyManagement/PropertyManagement';
import PropertyMaintenance from './components/PropertyMaintenance/PropertyMaintenance';
import PropertyAdministrativeSupport from './components/PropertyAdministrativeSupport/PropertyAdministrativeSupport';
import Cart from './components/Cart/Cart';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/property-management' element={<PropertyManagement />} />
        <Route path='/property-maintenance' element={<PropertyMaintenance />} />
        <Route path='/property-administrative-support' element={<PropertyAdministrativeSupport />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
