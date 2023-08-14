import { React } from 'react';
import styles from '../shopping.module.css';

import { incrementQuantity, decrementQuantity, removeItem } from './cartSlice';
import { useDispatch } from 'react-redux';

function CartItem({id, title, price, quantity=0}) {
    const dispatch = useDispatch();
  
    return (
      <div className={styles.cartItem}>
        <div className="cartItem__info">
          <p className="cartItem__title">{title}</p>
          <p className="cartItem__price">
            <strong>${(price * quantity).toFixed(2)}</strong>
          </p>
          <div className='cartItem__incrDec'>
            <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
            <p>{quantity}</p>
            {/* <input type="number" /> */}
            <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
          </div>
          <button
            className='cartItem__removeButton' 
            onClick={() => dispatch(removeItem(id))}>
              Remove
          </button>
        </div>
      </div>
    )
  }
  
  export default CartItem