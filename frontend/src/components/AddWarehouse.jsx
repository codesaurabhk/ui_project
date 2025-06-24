import React, { useState } from "react";
import "./AddWarehouse.css";

const AddWarehouse = () => {
  const [formData, setFormData] = useState({
    warehouse: "",
    contactPerson: "",
    email: "",
    phone: "",
    phoneWork: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    status: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Add Warehouse</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Warehouse *</label>
          <input type="text" name="warehouse" value={formData.warehouse} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Contact Person *</label>
          <select name="contactPerson" value={formData.contactPerson} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Ajay Mehta">Ajay Mehta</option>
            <option value="Saurabh Kumar">Saurabh Kumar</option>
          </select>
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone *</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone (Work)</label>
            <input type="text" name="phoneWork" value={formData.phoneWork} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Address *</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <select name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Noida">Noida</option>
              <option value="Pune">Pune</option>
            </select>
          </div>
          <div className="form-group">
            <label>State *</label>
            <select name="state" value={formData.state} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="UP">UP</option>
              <option value="MH">MH</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Country *</label>
            <select name="country" value={formData.country} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="India">India</option>
            </select>
          </div>
          <div className="form-group">
            <label>Postal Code *</label>
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group status-toggle">
          <label>Status</label>
          <input type="checkbox" name="status" checked={formData.status} onChange={handleChange} />
        </div>

        <div className="form-buttons">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="submit-btn">Add Warehouse</button>
        </div>
      </form>
    </div>
  );
};

export default AddWarehouse;
