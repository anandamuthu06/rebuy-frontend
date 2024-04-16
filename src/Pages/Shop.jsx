import React, { useEffect } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  useEffect(() =>{
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/')
      const data = await response.json()
      console.log(data)
    }
    fetchData();
  },[]);
  return (
    <div>
      <Hero/>
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop