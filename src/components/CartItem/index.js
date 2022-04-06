import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { REMOVE, ADJUST_QUANTITY } from '../../features/cartSlice'
import styles from './CartItem.module.css'

const SingleCartItem = ({ item }) => {
  
    const dispatch = useDispatch()
    
    const [input, setInput] = useState(item.quantity);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        dispatch(ADJUST_QUANTITY({id: item.id, price: item.price, quantity: e.target.value}));
      };

    return (
    <div className={styles.cartItem}>
        <img className={`img ${styles.cartItemImg}`} src={item.image}/>
        <div className={styles.cartItemDetails}>
            <h5 className={styles.cartItemTitle}>{item.title}</h5>
            <p className={styles.cartItemDescription}>{item.description}</p>
            <div className={styles.cartItemPriceContainer}>
                <p className='grey-label'>Base price : <span className='light-grey-value'>${item.price} USD</span></p>
                <p className='grey-label'>Item total : <span className='light-grey-value'>${item.price * input} USD</span></p>
            </div>
        </div>
        <div className={styles.cartItemInteraction}>
            <div className= {styles.cartItemQuantity}>
                <label htmlFor="qty">Quantity</label>
                <input
                    min="1"
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={input}
                    onChange={onChangeHandler}
                />
            </div>
            <button className='btn' onClick={() => {
                    dispatch(REMOVE(item))
                }}>
                    delete
            </button>
        </div>
    </div>
  )
}

export default SingleCartItem