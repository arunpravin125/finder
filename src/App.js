import React from 'react'
import Sidebar from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import {Routes,Route} from "react-router-dom"
import FavoritesPage from "./pages/FavoritesPage"

function App() {
  return (
    <div className="flex" >
    <Sidebar/>
     
     <Routes>
      <Route path="/" element={<HomePage/>} ></Route>
      <Route path="/favorites" element={<FavoritesPage/>} ></Route>
     </Routes>
    </div>
  )
}

export default App
