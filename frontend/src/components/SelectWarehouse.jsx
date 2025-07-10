import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import "./SelectWarehouse.css"
import { FaCircle } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GiHomeGarage } from "react-icons/gi";

const warehouseData = [
  {
    id: 1,
    name: "Warehouse Noida",
    location: "Noida, Sec-32",
    manager: "Ajay Mehta",
    items: 232,
    valuation: "$73,569",
    capacity: 80
  },
  {
    id: 2,
    name: "Warehouse Mumbai",
    location: "Mumbai, BKC",
    manager: "Sneha Patil",
    items: 190,
    valuation: "$65,420",
    capacity: 75
  },
  {
    id: 3,
    name: "Warehouse Delhi",
    location: "Delhi, Okhla",
    manager: "Ravi Kumar",
    items: 210,
    valuation: "$70,300",
    capacity: 68
  }
];


const SelectWarehouse = () => {
  return (
    <>
    <div className='container'>
    <div >SelectWarehouse</div>

   <table class="table">
    
  <thead>
    <tr>
      <th  className='col' scope="col"> <span style={{ color: "#007AFF", height:"25px", width:"25px" }}><MdOutlineWatchLater /></span> Recently added</th>
      <th className='col' scope="col">out of Items</th>
      <th className='col' scope="col">Warehouse Valution</th>
      <th className='col' scope="col">Capacity Used</th>
    </tr>
  </thead>
  <tbody>
    {warehouseData.map((warehouse, index)=> (
    <tr key={warehouse.id}>
      <td scope="row">
       <div className='name'>{index + 1}. {warehouse.name} </div>  <div className='recentd'>{warehouse.location} • {warehouse.manager}</div> </td>
      <td>{warehouse.items}</td>
      <td>{warehouse.valuation}</td>
      <td className='progressbar'>
        <div className="progressbar-wrapper">
          <CircularProgressbar value={warehouse.capacity} text={`${warehouse.capacity}%`} />
        </div>
      </td>
    </tr>   
))}
  </tbody>
  <thead>
    <tr>
      <th className='col' scope="col"><span style={{ color: "#007AFF" }} ><GiHomeGarage /></span> Owned Warehouse</th>
      {/* <th className='col' scope="col">out of Items</th>
      <th className='col' scope="col">Warehouse Valution</th>
      <th className='col' scope="col">Capacity Used</th> */}
    </tr>
  </thead>
  <tbody>
    {warehouseData.map((warehouse, index)=> (
    <tr key={warehouse.id}>
      <td scope="row">
       <div className='name'>{index + 1}. {warehouse.name} </div>  <div className='recentd'>{warehouse.location} • {warehouse.manager}</div> </td>
      <td>{warehouse.items}</td>
      <td>{warehouse.valuation}</td>
      <td className='progressbar'>
        <div className="progressbar-wrapper">
          <CircularProgressbar value={warehouse.capacity} text={`${warehouse.capacity}%`} />
        </div>
      </td>
    </tr>   
))}
  </tbody>
  <thead>
    <tr>
      <th className='col' scope="col"> <span style={{ color: "#007AFF" }} ><SiHomeassistantcommunitystore /></span> Third Party Warehouses</th>
      {/* <th className='col' scope="col">out of Items</th>
      <th className='col' scope="col">Warehouse Valution</th>
      <th className='col' scope="col">Capacity Used</th> */}
    </tr>
  </thead>
  <tbody>
    {warehouseData.map((warehouse, index)=> (
    <tr key={warehouse.id}>
      <td scope="row">
       <div className='name'>{index + 1}. {warehouse.name} </div>  <div className='recentd'>{warehouse.location} • {warehouse.manager}</div> </td>
      <td>{warehouse.items}</td>
      <td>{warehouse.valuation}</td>
      <td className='progressbar'>
        <div className="progressbar-wrapper">
          <CircularProgressbar value={warehouse.capacity} text={`${warehouse.capacity}%`} />
        </div>
      </td>
    </tr>   
))}
  </tbody>
  <thead>
    <tr>
      <th className='col' scope="col"> <span style={{ color: "red" }}><FaCircle  /></span>  Inactive warehouse</th>
     
    </tr>
  </thead>
  <tbody>
    {warehouseData.map((warehouse, index)=> (
    <tr key={warehouse.id}>
      <td scope="row">
       <div className='name'>{index + 1}. {warehouse.name} </div>  <div className='recentd'>{warehouse.location} • {warehouse.manager}</div> </td>
      <td>{warehouse.items}</td>
      <td>{warehouse.valuation}</td>
      <td className='progressbar'>
        <div className="progressbar-wrapper">
          <CircularProgressbar value={warehouse.capacity} text={`${warehouse.capacity}%`} />
        </div>
      </td>
    </tr>   
))}
  </tbody>
</table>

    </div>
    </>
    
  )
}

export default SelectWarehouse