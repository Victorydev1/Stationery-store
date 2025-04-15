import React from 'react'
import "./Shop.css"
import Hero from '../../Hero/Hero'
import Popular from '../../Popular/Popular'
import Offers from '../../Offers/Offers'
import NewCollections from '../../NewCollections/NewCollections'
import Newsletter from '../../Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero />,
      <Popular />,
      <Offers />,
      <NewCollections />,
      <Newsletter />
    </div>
  )
}

export default Shop