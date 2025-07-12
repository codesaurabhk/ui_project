import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import "./StockTransfer.css";
import { Link } from "react-router-dom";
import SlideOut from "./SlideOut";
import StockIn from "./StockIn";


// const stockOutData = [
//   { quantity: "85 Kg", warehouse: "WH-01", towarehouse: "AB Industries",  date: "Today", by: "Ramesh", remarks: "--" },
//   { quantity: "22 Kg", warehouse: "WH-01", towarehouse: "AB Traders", date: "Yesterday", by: "Suresh", remarks: "--" },
//   { quantity: "567 Boxes", warehouse: "WH-04", towarehouse: "AB Traders",  date: "13/06/2025", by: "Rakesh", remarks: "53 Boxes are Damaged" },
//   { quantity: "654 Bundle", warehouse: "WH-02", towarehouse: "AB Traders",  date: "13/06/2025", by: "Ram", remarks: "--" },
//   { quantity: "654 Bundle", warehouse: "WH-02", towarehouse: "AB Traders",  date: "13/06/2025", by: "Ram", remarks: "--" },
//   { quantity: "654 Bundle", warehouse: "WH-02", towarehouse: "AB Traders",  date: "13/06/2025", by: "Ram", remarks: "Need more 1000 Ltr" },
//   { quantity: "654 Bundle", warehouse: "WH-02", towarehouse: "AB Traders",  date: "13/06/2025", by: "Ram", remarks: "--" },
//   { quantity: "654 Bundle", warehouse: "WH-02", towarehouse: "AB Traders",  date: "13/06/2025", by: "Ram", remarks: "--" },
//   { quantity: "889 Ltr", warehouse: "WH-06", towarehouse : "AB Traders",  date: "12/06/2025", by: "Shayam", remarks: "Need more 1000 Ltr" },
// ];

const StockTransfer = () => {
  const [StocktransferData, setStocktransferData] = useState([]);
  const [Error, setError] = useState(null);
  useEffect(() => {
    const fetchStockInData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/stocktransfer/");
        if (!response.ok) {
          throw new Error("Failed to fetch stock in data");
        }
        const data = await response.json();
        setStocktransferData(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchStockInData();

  }, []);
  const [open, setOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("");
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
        <Button
          onClick={() =>
            setActiveComponent((prev) => (prev === "stockin" ? "" : "stockin"))
          }
          aria-controls="stockin-collapse"
          aria-expanded={activeComponent === "stockin"}
        >
          Stock In
        </Button>

        <Button
          onClick={() =>
            setActiveComponent((prev) => (prev === "stockout" ? "" : "stockout"))
          }
          aria-controls="stockout-collapse"
          aria-expanded={activeComponent === "stockout"}
        >
          Stock Out
        </Button>
        <Button
          onClick={() =>
            setActiveComponent((prev) => (prev === "stocktransfer" ? "" : "stocktransfer"))
          }
          aria-controls="stockout-collapse"
          aria-expanded={activeComponent === "stocktransfer"}
        >
          Stock Transfer
        </Button>
      </div>

      <Collapse in={activeComponent === "stockin"}>
        <div id="stockin-collapse">
          <StockIn />
        </div>
      </Collapse>

      <Collapse in={activeComponent === "stockout"}>
        <div id="stockout-collapse">
          <SlideOut />
        </div>
      </Collapse>
      <Collapse in={activeComponent === "stocktransfer"}>
        <table id="stockout-collapse" className="stock-table">
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
            {StocktransferData.map((item, idx) => (
              <tr key={idx}>
                <td className="product-name"><span className="checkbox"><input type="checkbox" /></span><span>Product 01<br /><span className="sku">(SKU)</span></span></td>

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
      </Collapse>








    </div>


  );
};

export default StockTransfer;
