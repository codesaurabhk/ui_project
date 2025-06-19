import React from "react";
import "./StockTransfer.css";

const stockOutData = [
  { quantity: "85 Kg", warehouse: "WH-01", towarehouse: "AB Industries",  date: "Today", by: "Ramesh", remarks: "--" },
  { quantity: "22 Kg", warehouse: "WH-01", towarehouse: "AB Traders", date: "Yesterday", by: "Suresh", remarks: "--" },
  { quantity: "567 Boxes", warehouse: "WH-04", towarehouse: "AB Traders",  date: "13/06/2025", by: "Rakesh", remarks: "53 Boxes are Damaged" },
  { quantity: "654 Bundle", warehouse: "WH-02", towarehouse: "AB Traders",  date: "13/06/2025", by: "Ram", remarks: "--" },
  { quantity: "654 Bundle", warehouse: "WH-02", towarehouse: "AB Traders",  date: "13/06/2025", by: "Ram", remarks: "--" },
  { quantity: "654 Bundle", warehouse: "WH-02", towarehouse: "AB Traders",  date: "13/06/2025", by: "Ram", remarks: "Need more 1000 Ltr" },
  { quantity: "654 Bundle", warehouse: "WH-02", towarehouse: "AB Traders",  date: "13/06/2025", by: "Ram", remarks: "--" },
  { quantity: "654 Bundle", warehouse: "WH-02", towarehouse: "AB Traders",  date: "13/06/2025", by: "Ram", remarks: "--" },
  { quantity: "889 Ltr", warehouse: "WH-06", towarehouse : "AB Traders",  date: "12/06/2025", by: "Shayam", remarks: "Need more 1000 Ltr" },
];

const StockTransfer = () => {
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
        <button >Stock In</button>
        <button >Stock Out</button>
        <button className="active">Stock Transfer</button>
      </div>
       <table className="stock-table">
       <thead>
          <tr>
            
            <th>Product Name</th>
            <th>Quantity</th>
            <th>From Warehouse</th>
            <th>To Warehouse</th>
            <th>Date Of Transfer</th>
            {/* <th>Stock In By</th> */}
            <th>Initiated By</th>
            <th>Remarks / Notes</th>
          </tr>
        </thead>
        <tbody>
          {stockOutData.map((item, idx) => (
            <tr key={idx}>
              <td className="product-name"><span  className="checkbox"><input type="checkbox"/></span><span>Product 01<br /><span className="sku">(SKU)</span></span></td>
      
              <td>{item.quantity}</td>
              <td>{item.warehouse}</td>
              <td>{item.towarehouse}</td>
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

export default StockTransfer;
