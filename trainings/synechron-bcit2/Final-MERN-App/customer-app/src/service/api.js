// src/services/api.js
import axios from 'axios';

const API_BASE = 'http://localhost:3002/api/customers';

// Get all customers
export async function getCustomers() {
  const customers=await axios.get(API_BASE);
  console.log(customers);
  return customers
}

export async function getCustomerById(id) {
  return await axios.get(`${API_BASE}/${id}`);
}

// Add a new customer
export async function addCustomer(data) {
  return await axios.post(API_BASE, data);
}

// Delete a customer
export  async function deleteCustomer(id) {
  return await axios.delete(`${API_BASE}/${id}`);
}

// Update customer by ID
export async function updateCustomer(id, data) {
  return await axios.put(`${API_BASE}/${id}`, data);
}