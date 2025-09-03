import * as CustomerModel from '../model/CustomerModel.js';

export async function createCustomer(req, res) {
  try {
    const result = await CustomerModel.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function getAllCustomers(req, res) {
  try {
    const customers = await CustomerModel.findAll();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getCustomerById(req, res) {
  try {
    const customer = await CustomerModel.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function updateCustomer(req, res) {
  try {
    const result = await CustomerModel.updateById(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function deleteCustomer(req, res) {
  try {
    const result = await CustomerModel.deleteById(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}