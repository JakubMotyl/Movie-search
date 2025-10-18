import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero'
import Search from '../components/Home/Search'
import Footer from '../components/Footer'

export default function Home({ setFavorites }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Search setFavorites={setFavorites} />
      <Footer />
    </div>
  )
}
