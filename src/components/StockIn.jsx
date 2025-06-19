import React from "react";
import "./StockIn.css";

const stockOutData = [
  { quantity: "85 Kg", warehouse: "WH-01", Supplier: "AB Industries",  date: "Today", by: "Ramesh", remarks: "--" },
  { quantity: "22 Kg", warehouse: "WH-01", Supplier: "AB Traders", date: "Yesterday", by: "Suresh", remarks: "--" },
  { quantity: "567 Boxes", warehouse: "WH-04", Supplier: "AB Traders",  date: "13/06/2025", by: "Rakesh", remarks: "53 Boxes are Damaged" },
  { quantity: "567 Boxes", warehouse: "WH-04", Supplier: "AB Traders",  date: "13/06/2025", by: "Rakesh", remarks: "--" },
  { quantity: "567 Boxes", warehouse: "WH-04", Supplier: "AB Traders",  date: "13/06/2025", by: "Rakesh", remarks: "Need more 1000 Ltr" },
  { quantity: "567 Boxes", warehouse: "WH-04", Supplier: "AB Traders",  date: "13/06/2025", by: "Rakesh", remarks: "53 Boxes are Damaged" },
  { quantity: "567 Boxes", warehouse: "WH-04", Supplier: "AB Traders",  date: "13/06/2025", by: "Rakesh", remarks: "--" },
  { quantity: "654 Bundle", warehouse: "WH-02", Supplier: "AB Traders",  date: "13/06/2025", by: "Ram", remarks: "--" },
  { quantity: "889 Ltr", warehouse: "WH-06", Supplier: "AB Traders",  date: "12/06/2025", by: "Shayam", remarks: "Need more 1000 Ltr" },
];

const SlideIn = () => {
  return (
    <div className="container">
      <div className="filters">
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
      </div>
      <div className="tabs">
        <button className="active">Stock In</button>
        <button >Stock Out</button>
        <button>Stock Transfer</button>
      </div>
       <table className="stock-table">
       <thead>
          <tr>
            
            <th>Product Name</th>
            <th>Quantity Received</th>
            <th>Warehouse</th>
            <th>Supplier Name</th>
            <th>Date Of Entry</th>
            {/* <th>Stock In By</th> */}
            <th>Stock Out By</th>
            <th>Remarks / Notes</th>
          </tr>
        </thead>
        <tbody>
          {stockOutData.map((item, idx) => (
            <tr key={idx}>
              <td className="product-name"><input type="checkbox" />Product 01<br /><span className="sku">(SKU)</span></td>
      
              <td>{item.quantity}</td>
              <td>{item.warehouse}</td>
              <td>{item.Supplier}</td>
              {/* <td><span className={`badge ${item.purpose.toLowerCase()}`}>{item.purpose}</span></td> */}
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

export default SlideIn;
