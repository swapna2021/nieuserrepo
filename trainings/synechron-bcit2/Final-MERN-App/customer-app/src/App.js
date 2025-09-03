import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import InfoCustomer from './components/InfoCustomer';

function App() {

  //  const [customers,setCustomers]=useState(
  //     [{cname:"swapna",cid:123,mobile:"6281614948",email:"swapna@gmail.com",address:"Hyderabad"},
  //     {cname:"Amit",cid:1111,mobile:"9090909090",email:"amit@gmail.com",address:"Bangalore"},
  //     {cname:"swathi",cid:1231,mobile:"80808080",email:"swathi@gmail.com",address:"Chennai"},
  //     {cname:"swetha",cid:323,mobile:"7070707070",email:"swetha@gmail.com",address:"Pune"}])     
  
  return (
    <div className='container-fluid'>
      <div className='row bg-warning'>
          <Header></Header>
      </div>
      <div className='row'>
          <div className='col-4 bg-info'>
              <Sidebar></Sidebar>
          </div>
          <div className='col-8 bg-light'>
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/add" element={<AddCustomer/>}/>
                <Route path="/update/:id" element={<UpdateCustomer/>}/>
                <Route path="/info/:id" element={<InfoCustomer/>}/>
             </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;
