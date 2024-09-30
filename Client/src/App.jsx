import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    
    </>
  )
}

export default App
