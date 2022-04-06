import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../../components/ProductList'
import { getProducts } from '../../features/productSlice'
import styles from './shop.module.css'

const Shop = () => {

  const { getProductsIsPending, products, getProductsFetchError } = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getProducts())
  },[])
  
  return (
    <main className='page'>
        <h4 className={styles.shopsTitle}>Products</h4>
        { getProductsIsPending && <div className='loading'></div>}
        {!getProductsIsPending && !getProductsFetchError && <ProductList products={products} />}
        { getProductsFetchError &&  <p>Error while fetching the data</p>}
    </main>
  )
}

export default Shop