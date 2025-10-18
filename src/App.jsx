import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MyList from './pages/MyList'

export default function App() {
  const [favorites, setFavorites] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home setFavorites={setFavorites} />} />
        <Route path='/mylist' element={<MyList setFavorites={setFavorites} favorites={favorites} />} />
      </Routes>
    </BrowserRouter>
  )
}
