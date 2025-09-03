import React,{useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { getCustomerById } from '../service/api.js';

function InfoCustomer(){
    const {id}=useParams()
    console.log(id)
    const[customer,setCustomer]=useState(null)
    
    useEffect(()=>{
        console.log("in useeffect")
        getCustomerById(id)
        .then((res)=>{setCustomer(res.data)
            console.log(customer)
        })
        .catch((err)=>console.log(err))
    },[id])

    if (!customer) {
    return <h3 style={{ color: 'gray' }}>Loading customer data...</h3>;
  }
    return(<div>
        <h3 style={{color:'blue'}}>Customer Details</h3>
        <table className="table table-bordered table-striped " >
            <tbody>
            <tr><td>Customer Id</td><td>{customer._id}</td></tr>
             <tr><td>Customer Name</td><td>{customer.cname}</td></tr>
              <tr><td>Mobile</td><td>{customer.mobile}</td></tr>
               <tr><td>Email</td><td>{customer.email}</td></tr>
                <tr><td>Address</td><td>{customer.address}</td></tr>
            </tbody>
        </table>
        <Link className='btu btn-primary'to='/home'>Home</Link>

    </div>)
}
export default InfoCustomer