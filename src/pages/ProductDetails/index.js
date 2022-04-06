import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './ProductDetails.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { ADD } from '../../features/cartSlice'
import { SELECTED_ITEM } from '../../features/productSlice'

const ProductDetails = () => {
  const { id } = useParams() 
  const { selected_item, getSelectedItemIsPending } = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(SELECTED_ITEM(id))
    }, 1400);
  },[])
  
  return (
    <main className='page'>
      {
        getSelectedItemIsPending && <div className='loading'></div>
      }
     {
       !getSelectedItemIsPending &&
       <>
        <div className= {styles.productContainer}>
          <section className={styles.productHero}>
            <img src= {selected_item.image.substring(1)} className= {`img ${styles.productHeroImg}`} />
            <article>
              <div className={styles.productInfoRow}>
                <h5>Title:</h5>
                <p> 
                {selected_item.title}
                </p>
              </div>
              <div className={styles.productInfoRow}>
                <h5>Description:</h5>
                <p> 
                {selected_item.description}
                </p>
              </div>
              <div className={styles.productInfoRow}>
                <h5>Price:</h5>
                <p className='light-grey-value'>
                $
                {selected_item.price} USD
                </p>
              </div>
              <button className='btn' onClick = { () => {
                dispatch(ADD( selected_item ))
              }} >Add to Cart</button>
            </article>
            
          </section>
        </div>
       </>
     }
    </main>
  )
}

export default ProductDetails