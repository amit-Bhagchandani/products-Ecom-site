import React, { useEffect } from 'react'
import ProductList from '../../components/ProductList'
import {useDispatch, useSelector} from 'react-redux'
import Typewriter from 'typewriter-effect'
import { getProducts } from '../../features/productSlice'
import styles from './Landing.module.css'

const Landing = () => {

  const { getProductsIsPending, products, getProductsFetchError } = useSelector(state => state.product)

  const dispatch =  useDispatch()
  
  useEffect(() => {
    setTimeout(() => {
      dispatch(getProducts())
    },1400)
  },[])

  return (
    <>
      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1>
              Random Graphics
            </h1>
            <h4>
              <Typewriter 
                options={{
                  strings: ['Tag line 1', 'Tag line 2'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>
        </div> 
        <video  id={styles.videoBackground} autoPlay muted loop>
          <source src='./videos/background-video.mp4' type='video/mp4' />
        </video>
      </header>
      <main className='page'>
        <section aria-labelledby='featured-title' className={styles.featuredProducts}>
          <h4 id='fetured-title' className={styles.featuredTitle}>Featured Products</h4>
           { getProductsIsPending && <div className='loading'></div>}
           { !getProductsIsPending && !getProductsFetchError && <ProductList products = {products} />}
           { getProductsFetchError &&  <p>Error while fetching the data</p>}
        </section>
      </main>
    </>
  )
}

export default Landing