import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SlideOut from './components/SlideOut'
import StockIn from './components/StockIn'
import '@fortawesome/fontawesome-free/css/all.min.css';
import StockTransfer from './components/StockTransfer'
import Warehouse from './components/Warehouse'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  {/* <SlideOut/>
  <StockIn/>
  <StockTransfer/> */}
  <Warehouse/>
    </>
  )
}

export default App
