import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CustomerData from './components/CustomerData';
import Navbar from './components/Navbar';
import ProductPrice from './components/ProductPrice';
import Home from './components/Home';
import CustomerCreate from './components/CustomerCreate';
import CustomerDetails from './components/CustomerDetails';
import CustomerEdit from './components/CustomerEdit';
import Error404 from './components/Error404';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/customer-info' Component={CustomerData} />
          <Route path='/product-price' Component={ProductPrice} />
          <Route path='/customer/create' Component={CustomerCreate} />
          <Route path='/customer/details/:cid' Component={CustomerDetails} />
          <Route path='/customer/edit/:cid' Component={CustomerEdit} />

          <Route path="*" Component={Error404} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
