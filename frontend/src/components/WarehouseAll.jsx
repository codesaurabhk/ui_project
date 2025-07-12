import React from "react";
import "./WarehouseAll.css";

const rows = [
    {
        quantity: "85 Kg",
        movement: "Stock In",
        from: "WH‑01",
        to: "AB Industries",
        reason: "New Purchase",
        handledBy: "Ramesh",
        status: "Completed",
    },
    {
        quantity: "22 Kg",
        movement: "Stock Out",
        from: "WH‑01",
        to: "AB Traders",
        reason: "Client Delivery",
        handledBy: "Suresh",
        status: "Completed",
    },
    {
        quantity: "567 Boxes",
        movement: "Transfer",
        from: "WH‑04",
        to: "AB Traders",
        reason: "Transfer",
        handledBy: "Rakesh",
        status: "Pending",
    },
    // …add the rest
];

export default function WarehouseAll() {
    return (
        <div className="warehouse‑container">
            {/* Filter row */}
            <div className="filters">
                <div className="search-wrapper">
                    <input placeholder="Search Product or Category" />
                    <i className="fa fa-search"></i>
                </div>

                <div className="filter-selects">
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
            </div>


            {/* Data table */}
            <div className="table‑wrapper">
                <table className="stock‑table">
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Quantity</th>
                            <th>Movement type</th>
                            <th>From location</th>
                            <th>To location</th>
                            <th>Movement Reason</th>
                            <th>Handled By</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r, i) => (
                            <tr key={i}>
                                <td className="product‑cell">
                                    <input type="checkbox" />
                                    <span>
                                        Product 01
                                        <br />
                                        <span className="sku">(SKU)</span>
                                    </span>
                                </td>
                                <td>{r.quantity}</td>
                                <td>
                                    <span className={`badge movement ${slug(r.movement)}`}>
                                        {r.movement}
                                    </span>
                                </td>
                                <td>{r.from}</td>
                                <td>{r.to}</td>
                                <td>{r.reason}</td>
                                <td>{r.handledBy}</td>
                                <td>
                                    <span className={`badge status ${slug(r.status)}`}>
                                        {r.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function slug(str) {
    return str.toLowerCase().replace(/\s+/g, "-");
}