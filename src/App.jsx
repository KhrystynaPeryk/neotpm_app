import './App.scss';
import Home from './components/Home/Home';
import PropertyManagement from './components/PropertyManagement/PropertyManagement';
import PropertyMaintenance from './components/PropertyMaintenance/PropertyMaintenance';
import OwnerSupport from './components/OwnerSupport/OwnerSupport';
import Cart from './components/Cart/Cart';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/property-management' element={<PropertyManagement />} />
        <Route path='/property-maintenance' element={<PropertyMaintenance />} />
        <Route path='/owner-support' element={<OwnerSupport />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
