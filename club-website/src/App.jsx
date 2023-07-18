import { Route, Routes } from "react-router-dom"

import './index.css'

// components
import Navbar from "./components/Navbar"

// pages
import Home from './pages/Home/Home'
import Resources from './pages/Resources/Resources'
import About from './pages/About/About'
import NotFound from "./pages/NotFound/NotFound"

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/resources" element={ <Resources/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="*" element={ <NotFound/> } />
      </Routes>
    </div>
  )
}

export default App
