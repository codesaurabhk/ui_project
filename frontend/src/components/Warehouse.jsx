import React from "react";
import "./Warehouse.css"; 

const WarehouseData = [
  { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "87%", stock: "Out of Stock item", no: "13 items" },
  { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "57%", stock: "Out of Stock item", no: "13 items" },
  { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "71%", stock: "Out of Stock item", no: "13 items" },
  { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "18%", stock: "Out of Stock item", no: "13 items" },
  { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "97%", stock: "Out of Stock item", no: "13 items" },
  { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "87%", stock: "Out of Stock item", no: "13 items" },
  { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "87%", stock: "Out of Stock item", no: "13 items" },
  { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "87%", stock: "Out of Stock item", no: "13 items" },
  { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "87%", stock: "Out of Stock item", no: "13 items" },
  { head: "Warehouse Noida", desc: "Noida, Sec-32 • Ajay Mehta", stored: "Total items Stored", items: "55485 Items",capacity:"Capacity Utilization" ,progess: "87%", stock: "Out of Stock item", no: "13 items" },
  
];

const Warehouse = () => {
  return (
    <div className="fst">
    <div className="main-div">
      <h2 className="selectw">Select Warehouse</h2> 
    {WarehouseData.map((itm)=>(
      <div className="container-main">
        <h5 className="heading">{itm.head}</h5>

        <span className="desc">{itm.desc}</span>
        <div className="hero-sec">
          <div>
            <div className="first">
              <span>{itm.stored}</span>
              <h3>{itm.items}</h3>
              <br />
            </div>
          </div>
          <div className="progress-br">
          <span>{itm.capacity}</span>
          <br />
          <div
            className="progress"
            role="progressbar"
            aria-label="Info example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar gradient-bar" style={{ width: itm.progess }}>
              {itm.progess}
            </div>
          </div></div>

          <div className="last">
            <span>{itm.stock}</span>
            <br /> <h3>{itm.no}</h3>
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
