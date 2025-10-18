import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/MyList/Hero'

export default function MyList({ favorites, setFavorites }) {
  return (
    <>
      <Navbar />
      <Hero setFavorites={setFavorites} favorites={favorites} />
      <Footer />
    </>
  )
}
