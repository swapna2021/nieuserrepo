import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCustomerById,updateCustomer } from "../service/api";

function UpdateCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cid: "",
    cname: "",
    mobile: "",
    email: "",
    address: "",
  });

 
  useEffect(() => {
    const customer=getCustomerById(id)
   .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.error("Failed to load customer", err);
      });
  }, [id]);
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleUpdate = () => {
    updateCustomer(id, formData)
      .then(() => {
        alert("Customer updated successfully");
        navigate("/home");
      })
      .catch((err) => {
        console.error("Update failed", err);
        alert("Update failed");
      });
  };

  return (
    <div className="container">
      <h2>Update Customer ID: {id}</h2>
      <input
        name="cname"
        value={formData.cname}
        onChange={handleChange}
        placeholder="Customer Name"
        className="form-control mb-2"
      />
      <input
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile"
        className="form-control mb-2"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="form-control mb-2"
      />
      <input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="form-control mb-2"
      />
      <button onClick={handleUpdate} className="btn btn-primary">
        Update
      </button>
    </div>
  );
}

export default UpdateCustomer;