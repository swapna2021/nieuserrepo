import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { getCustomers,deleteCustomer } from '../service/api.js';


function Home(){
    const[customers,setCustomers]=useState([])

useEffect(() => {
  getCustomers()
    .then(res => {
      setCustomers(res.data);
    })
    .catch(err => {
      console.error('Error fetching customers:', err);
    });
}, []);
    
const deleteCustomerById = async (id) => {
  try {
    await deleteCustomer(id); 
    const updatedCustomers = customers.filter(c => c._id !== id);
    setCustomers(updatedCustomers); 
  } catch (error) {
    console.error("Error deleting customer:", error);
  }
};
    return(<div>
        <h1>Customer List</h1>
        <table className="table table-bordered table-striped ">
            <thead>
            <tr>
                <th>Customer Id</th>
                <th>CustomerName</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {customers.map((c)=>(
                <tr key={c._id}>
                    <td>{c._id}</td>
                    <td>{c.cname}</td>
                    <td>
                        <Link to={`/info/${c._id}`} className="btn btn-info">Info</Link>&nbsp;&nbsp;&nbsp;
                        <Link to={`/update/${c._id}`} className="btn btn-success">Update</Link>&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-danger" onClick={()=>deleteCustomerById(c._id)}>Delete</button>
                    </td>
                </tr>))}

            </tbody>
            </table>
    </div>)
}
export default Home