import React, { useEffect, useState } from "react";
import "./Warehouse.css"; 

// const WarehouseData = [
//   { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "87%", stock: "Out of Stock item", no: "13 items" },
//   { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "57%", stock: "Out of Stock item", no: "13 items" },
//   { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "71%", stock: "Out of Stock item", no: "13 items" },
//   { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "18%", stock: "Out of Stock item", no: "13 items" },
//   { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "97%", stock: "Out of Stock item", no: "13 items" },
//   { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "87%", stock: "Out of Stock item", no: "13 items" },
//   { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "87%", stock: "Out of Stock item", no: "13 items" },
//   { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "87%", stock: "Out of Stock item", no: "13 items" },
//   { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "87%", stock: "Out of Stock item", no: "13 items" },
//   { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "87%", stock: "Out of Stock item", no: "13 items" },
  
// ];

const Warehouse = () => {
   const [Warehouse, setWarehouse] = useState([]);
   const [Error, setError] = useState(null);
  useEffect(() => {
    const fetchWarehouseData = async ()=>{
      try {
        const response = await fetch("http://localhost:5000/api/warehouses/");
        if (!response.ok) {
          throw new Error ("Failed to fetch stock in data");
        }
        const data = await response.json();
        setWarehouse(data);
        // console.log(data);
        // let value = data.capacity;
      } catch (err) {
        setError(err.message);
      }
    };
  fetchWarehouseData();
    
  }, []);
  
  return (
    <div className="fst">
    <div className="main-div">
      <h2 className="selectw">Select Warehouse</h2> 
    {Warehouse.map((itm)=>(
      
      <div className="container-main">
        <h5 className="heading">{itm.warehouse}</h5>

        <span className="desc"> Noida, Sec-32 • {itm.person}</span>
        <div className="hero-sec">
          <div>
            <div className="first">
              <span>Total items Stored</span>
              <h3>{itm.capacity} Items</h3>
              <br />
            </div>
          </div>
          <div className="progress-br">
          <span>Capacity Utilization</span>
          <br />
          <div
            className="progress"
            role="progressbar"
            aria-label="Info example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar gradient-bar" style={{ width: `${(100-(itm.capacity/itm.items))}%` }}>
              {`${Math.round(100-((itm.items/itm.capacity)*100))}%`} 
            </div>
          </div></div>

          <div className="last">
            <span>Out of Stock item</span>
            <br /> <h3>{itm.items} items</h3>
          </div>
        </div>
        <div>
        </div>
      </div>
      ))}
    </div></div>
  );
};

export default Warehouse;
