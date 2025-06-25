import React, { useEffect, useState } from "react";
import "./SlideOut.css";
import { Link } from "react-router-dom";

// const stockOutData = [
//   { quantity: "85 Kg", warehouse: "WH-01", customer: "AB Industries", purpose: "Replace", date: "Today", by: "Ramesh", remarks: "--" },
//   { quantity: "22 Kg", warehouse: "WH-01", customer: "AB Traders", purpose: "Return", date: "Yesterday", by: "Suresh", remarks: "--" },
//   { quantity: "567 Boxes", warehouse: "WH-04", customer: "AB Traders", purpose: "Sale", date: "13/06/2025", by: "Rakesh", remarks: "53 Boxes are Damaged" },
//   { quantity: "654 Bundle", warehouse: "WH-02", customer: "AB Traders", purpose: "Sale", date: "13/06/2025", by: "Ram", remarks: "--" },
//   { quantity: "654 Bundle", warehouse: "WH-02", customer: "AB Traders", purpose: "Sale", date: "13/06/2025", by: "Ram", remarks: "--" },
//   { quantity: "654 Bundle", warehouse: "WH-02", customer: "AB Traders", purpose: "Sale", date: "13/06/2025", by: "Ram", remarks: "--" },
//   { quantity: "654 Bundle", warehouse: "WH-02", customer: "AB Traders", purpose: "Sale", date: "13/06/2025", by: "Ram", remarks: "--" },
//   { quantity: "889 Ltr", warehouse: "WH-06", customer: "AB Traders", purpose: "Sale", date: "12/06/2025", by: "Shayam", remarks: "Need more 1000 Ltr" },
// ];



const SlideOut = () => {

  const [StockOutData, setStockOutData] = useState([]);
   const [Error, setError] = useState(null);
  useEffect(() => {
    const fetchStockInData = async ()=>{
      try {
        const response = await fetch("http://localhost:5000/api/stockout/");
        if (!response.ok) {
          throw new Error ("Failed to fetch stock in data");
        }
        const data = await response.json();
        setStockOutData(data);
      } catch (err) {
        setError(err.message);
      }
    };
  fetchStockInData();
    
  }, []);
  return (
    <div className="container">
      {/* <div className="filters">
        <div className="input-search-wrapper">
          <input
            className="input-serch"
            type="text"
            placeholder="Search Product or Category"
          />
          <i className="fa fa-search search-icon"></i>
        </div>
        <select>
          <option>Warehouse 01 (Noida)</option>
        </select>
        <select>
          <option>Last 7 Days</option>
        </select>
        <select disabled>
          <option>Select by status</option>
        </select>
      </div> */}
      {/* <div className="tabs">
        <button > <Link to="/stockin" >Stock In</Link></button>
        <button className="active">Stock Out</button>
        <button><Link to="/stocktransfer" >Stock Transfer </Link></button>
      </div> */}
      
       <table className="stock-table">
       <thead>
          <tr>
            
            <th>Product Name</th>
            <th>Quantity Dispatched</th>
            <th>Warehouse</th>
            <th>Customer</th>
            <th>Purpose</th>
            <th>Date of Dispatch</th>
            <th>Stock Out By</th>
            <th>Remarks / Notes</th>
          </tr>
        </thead>
        <tbody>
          {StockOutData.map((item, idx) => (
            <tr key={idx}>
              <td className="product-name"><input type="checkbox" />Product 01<br /><span className="sku">(SKU)</span></td>
      
              <td>{item.quantity}</td>
              <td>{item.warehouse}</td>
              <td>{item.customer}</td>
              <td><span className={`badge ${item.purpose.toLowerCase()}`}>{item.purpose}</span></td>
              <td>{item.date}</td>
              <td>{item.by}</td>
              <td>{item.remarks}</td>
            </tr>
          ))}
        </tbody>
        </table>
     </div>
     
    
  );
};

export default SlideOut;
