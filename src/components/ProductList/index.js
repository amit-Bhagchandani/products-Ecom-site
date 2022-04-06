import React from 'react'
import Product from '../Product'
import styles from './ProductList.module.css'

const ProductList = ( {products} ) => {

  return (
    <div className={styles.productList}>
      {products.map((product) => {
          return <Product key= {product.id} product = {product} /> 
      })}
    </div>
  )
}

export default ProductList