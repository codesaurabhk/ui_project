import React, { useState } from 'react';

import { RiDashboardHorizontalFill } from "react-icons/ri";
import "./sidebar.css"
import { Link, Navigate } from 'react-router-dom';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState('Warehouse');

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? '' : menuName));
  };

  return (
    <div className="sidebar">
      <div className="menu-item"><RiDashboardHorizontalFill/> Dashboard</div>

      <div className="menu-item"><RiDashboardHorizontalFill/> Inventory</div>

      <div className={`menu-item ${openMenu === 'Warehouse' ? 'active' : ''}`} onClick={() => toggleMenu('Warehouse')}>
        <RiDashboardHorizontalFill/> Warehouse
      </div>
      {openMenu === 'Warehouse' && (
        <div className="submenu">
          <div className="submenu-item"> <Link to="/stocktransfer" >Stock Movements</Link></div>
          <div className="submenu-item"> <Link to="/warehouses">Warehouses</Link></div>
          <div className="submenu-item">Movement History Log</div>
          <div className="submenu-item"><Link to="/addwarehouse">Add warehouse</Link> </div>
          <div className="submenu-item"><Link to="/selectWarehouse">Select warehouse</Link> </div>
          
        </div>
      )}

      <div className="menu-item"><RiDashboardHorizontalFill/> Sales</div>
      <div className="menu-item"><RiDashboardHorizontalFill/> Documents</div>
      <div className="menu-item"><RiDashboardHorizontalFill/> Return & Audit</div>
      <div className="menu-item"><RiDashboardHorizontalFill/> Report</div>
    </div> 
  );
};

export default Sidebar;
