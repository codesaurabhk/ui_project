import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SlideOut from './components/SlideOut'
import StockIn from './components/StockIn'
import '@fortawesome/fontawesome-free/css/all.min.css';
import StockTransfer from './components/StockTransfer'
import Warehouse from './components/Warehouse'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddWarehouse from './components/AddWarehouse'
import SelectWarehouse from './components/SelectWarehouse'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Router>
 <div style={{ padding: '20px', display : 'flex' }}>
    
      <Sidebar />
      
      <Routes>
         <Route path='/stockin' element={<StockIn/>}/>
        <Route path='/warehouses' element={<Warehouse/>}/>
         <Route path="/stocktransfer" element={<StockTransfer />} />
           <Route path="/slideout" element={<SlideOut />} />
           <Route path="/addwarehouse" element={<AddWarehouse />} />
           <Route path="/selectWarehouse" element={<SelectWarehouse/>} />
            <Route path='*' element={<div className=" flex justify-center items-center h-screen  text-red-500 text-5xl">404 Page not Found </div>}/>
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
