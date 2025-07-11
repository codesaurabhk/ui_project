import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiSearch } from "react-icons/fi"
import "./WarehouseOverview.css"
import apple from "../assets/apple.jpeg";

const capacityUsed = 87;                           // %
const totalItemsStored = 82424;
const outOfStockItems = 11;
const categoriesServed = ["Fruits", "Vegetables", "FMCG", "Dry Fruits"];

const topProducts = [
  { id: 1, name: "Kashmiri Apple", sold: 8092, leftPct: 57 },
  { id: 2, name: "Ratnagiri ke Aam 02", sold: 5800, leftPct: 57 },
  { id: 3, name: "Strawberry 001", sold: 5300, leftPct: 57 },
  { id: 4, name: "New Pineapple", sold: 4210, leftPct: 57 },
  { id: 5, name: "New Pineapple", sold: 4120, leftPct: 57 },
];

const topCategoriesData = [
  { name: "Apple", value: 30 },
  { name: "Mango", value: 25 },
  { name: "Pineapple", value: 21 },
  { name: "Strawberry", value: 16 },
  { name: "Papaya", value: 5 },
  { name: "Others", value: 3 },
];

const stockActivityData = [
  { date: "12 Jun", in: 220, out: 290 },
  { date: "13 Jun", in: 80, out: 60 },
  { date: "14 Jun", in: 410, out: 250 },
  { date: "15 Jun", in: 350, out: 300 },
  { date: "16 Jun", in: 300, out: 380 },
  { date: "17 Jun", in: 90, out: 270 },
  { date: "18 Jun", in: 430, out: 460 },
];

/* Colours for charts */
const PIE_COLORS = ["#007AFF", "#2290FF", "#54A7FF", "#7AB8FF", "#A0C9FF", "#C6DBFF"];

const WarehouseOverview = () => {
  return (
    <div className="maincontainer">
      <div className="wh-filters-row">
        {/* after */}
        <div className="wh-search-box">
          <FiSearch className="search-icon" />
          <input
            className="wh-search"
            type="text"
            placeholder="Search product or category"
          />
        </div>

        {/* <div className="sen" > */}
        <select className="wh-drop1">
          <option>Warehouse 01 (Noida) — Ramesh Verma</option>
          {/* Add more warehouses */}
        </select>
        <select className="wh-drop2">
          <option>Select by status</option>
          {/* Active / Inactive etc. */}
        </select>
        {/* </div> */}
      </div>
      <div className="wh-overview-card">
        {/* ───────────── Top Search / Filters row ───────────── */}


        {/* ───────────── Warehouse header ───────────── */}
        <div className="headermn">
          <div className="wh-header">
            <div className="oviewtle">Warehouse Overview</div>
            <div className="wh-title">
              <span>Warehouse 01 (Noida)</span>
              <span className="wh-badge">Active</span>
            </div>
            <div className="wh-manager">Ramesh Verma</div>
          </div>

          {/* ───────────── Capacity + Categories ───────────── */}
          <div className="wh-capacity-row">
            <div className="wh-capacity">
              <span>Capacity Utilization</span>
              <span className="wh-capacity-pct">{capacityUsed}% used</span>
              <div className="wh-capacity-bar">
                <div
                  className="wh-capacity-fill"
                  style={{ width: `${capacityUsed}%` }}
                />
              </div>
            </div>

            <div className="wh-categories-served">
              <span>Category they served</span>
              <div className="wh-chips">
                {categoriesServed.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ───────────── KPI cards ───────────── */}
          <div className="wh-kpi-row">
            <div className="wh-kpi-card">
              <h4>Total Item Stored</h4>
              <span className="kpi-value">{totalItemsStored.toLocaleString()}</span>
              <div className="kpi-foot"> <span className="boldert">+ 652</span> Product added this week <span className="boldert">→</span></div>
            </div>
            <div className="wh-kpi-card">
              <h4>Out of stocks items</h4>
              <span className="kpi-value">{outOfStockItems}</span>
              <div className="kpi-foot"><span className="boldert">11</span> Items getting Out of Stocks Soon. <span className="boldert">→</span> </div>
            </div>
          </div>
        </div>

        {/* ───────────── Top products & categories ───────────── */}
        <div className="wh-top-row">
          {/* Left column: Top products */}
          <div className="wh-top-products">
            <div className="section-header">
              <span>Top Selling Products</span>
              <select>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>

            {topProducts.map((p) => (
              <div key={p.id} className="product-row">
                <div className="prod-avatar">
                  <img src={apple} alt={p.name} />
                </div>
                <div className="prod-info">
                  <div className="prod-name">{p.name}</div>
                  <div className="prod-desc">Sold {p.sold} kgs last week</div>
                </div>
                <div className="prod-progress">
                  <div
                    className="prod-progress-fill"
                    style={{ width: `${100 - p.leftPct}%` }}
                  />
                </div>
                <div className="prod-left">{p.leftPct} of 9049 kg left</div>
              </div>
            ))}
          </div>

          {/* Right column: Donut chart */}
          <div className="wh-top-categories">
            <div className="section-header">
              <span>Top Selling Categories</span>
              <select>
                <option>This Week</option>
              </select>
            </div>

            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={topCategoriesData}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="90%"
                  dataKey="value"
                >
                  {topCategoriesData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="middle" align="right" layout="vertical" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ───────────── Stock activity chart ───────────── */}
        <div className="wh-stock-activity">
          <div className="section-header">
            <span>Stock Activity</span>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={stockActivityData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="in" name="Stock In" fill="#7AB8FF" barSize={30} />
              <Bar dataKey="out" name="Stock Out" fill="#007AFF" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WarehouseOverview;
