import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Product.module.css'

const Product = ({ product }) => {
  const linkSrc = "/product-detail/" + `${product.id}`
  return (
    <Link to = {linkSrc} className={styles.singleProduct}>
        <img src={product.image} className= {`img ${styles.productImg}`}/>
        <h5>{product.title}</h5>
        <p className='grey-label'>price: <span className='light-grey-value'>${product.price}USD</span> </p>
    </Link>
  )
}

export default Product