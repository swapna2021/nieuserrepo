import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCustomers,addCustomer} from '../service/api.js';



function AddCustomer() {
  const navigate = useNavigate();
  const [customers,setCustomers]=useState([])
  const [newCustomer, setNewCustomer] = useState({
    _id:0,
    cname: "",
    mobile: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setNewCustomer((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    getCustomers()
      .then(res => {
        setCustomers(res.data);
        console.log('Customers:', customers);
      })
      .catch(err => {
        console.error('Error fetching customers:', err);
      });
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const customerData = {
      ...newCustomer,
      _id: parseInt(newCustomer._id), // convert to number
    };
    await addCustomer(customerData);
    navigate("/home");
  } catch (err) {
    console.error("Error adding customer:", err);
  }
};

  return (
    <div className="container mt-4">
      <h2>Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="_id"
          value={newCustomer._id}
          onChange={handleChange}
          placeholder="Customer ID"
          className="form-control my-2"
          required
        />
        <input
          name="cname"
          value={newCustomer.cname}
          onChange={handleChange}
          placeholder="Customer Name"
          className="form-control my-2"
          required
        />
        <input
          name="mobile"
          value={newCustomer.mobile}
          onChange={handleChange}
          placeholder="Mobile"
          className="form-control my-2"
        />
        <input
          name="email"
          value={newCustomer.email}
          onChange={handleChange}
          placeholder="Email"
          className="form-control my-2"
        />
        <input
          name="address"
          value={newCustomer.address}
          onChange={handleChange}
          placeholder="Address"
          className="form-control my-2"
        />
        <button className="btn btn-success">Add Customer</button>
      </form>
    </div>
  );
}

export default AddCustomer;