import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductDetails from '../features/product-list/components/ProductDetails'

const ProductDetailPage = () => {
  return (
    <>
    <Navbar/>
        <ProductDetails/>
    {/* </Navbar> */}
    </>
  )
}

export default ProductDetailPage