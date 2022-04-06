import React from 'react'
import SingleCartItem from '../../components/CartItem'
import { useSelector } from 'react-redux'
import styles from './Cart.module.css'

const Cart = () => {
  const { cart, total_items, total_amount} = useSelector(state => state.cart);
 
  return (
    <main className='page'>
      <div className={styles.cart}>
        <div className={styles.totalCartItems}>
          <h4>{total_items} : items</h4>
        </div>
        <div className={styles.cartItems}>
          {cart.map((item) => {
            return <SingleCartItem key={item.id} item = {item} />
          })}
        </div>
        {
          (total_items != 0) && (
            <div className={styles.cartCheckout}>
              <p className={`grey-label ${styles.cartTotal}`}>Total : <span className='light-grey-value cart-total'>${total_amount} USD</span> </p>
              <button className='btn'>Proceed to Checkout</button>
            </div>
          )
        }       
    </div>
    </main>
    
  )
}



export default Cart;