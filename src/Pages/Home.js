import React from 'react'
import Product from '../components/Products'

const Home = () => {
  return (
    <div>
    <h2 className="heading"> Welcome to the Redux toolkit store</h2>
    <section>
        <h3>Product</h3>
        <Product />
    </section>
    
    </div>
  )
}

export default Home;