import { Route, Routes } from "react-router-dom"


// pages
import Home from './pages/Home'

import Resources from './pages/Resources'


function App() {
  

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />

        <Route exact path="/resources" element={<Resources/>} />
      </Routes>
    </>
  )
}

export default App
