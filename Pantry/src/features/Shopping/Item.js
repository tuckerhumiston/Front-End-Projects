import { React } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { addToCart, incrementQuantity, decrementQuantity, removeItem } from './cart/cartSlice';
import { selectCart } from './cart/cartSlice';

import styles from '../../features/Shopping/shopping.module.css';


export default function Item({item}) {
    const cart = useSelector(selectCart);
    console.log('Cart contents:')
    console.log(cart);
    const dispatch = useDispatch()

    const image = item.image;
    const id = item.id;
    const title = item.name;
    const price = item.price;

    const findQuantity = () => {
        const found = cart?.find( item => item.id === id);

        return found ? found.quantity : 0;
    }

    const handleMinDispatch = (id) => {
        const quantity = findQuantity();

        if (quantity === 1) {
            dispatch(removeItem(id));
        } else {
            dispatch(decrementQuantity(id));
        }
    }
    
    const handleAddDispatch = (id) => {
        const quantity = findQuantity();

        if (quantity === 0) {
            dispatch(addToCart({
                id, title, image, price
            }))
        } else {
            dispatch(incrementQuantity(id));
        }
        
    }


    return (
        <div key={item.id} className={styles.item}>

            <img src={item.image} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>

            {/* Add/remove items in cart */}
            <div className={styles.editInCart}>
                <button onClick={() => handleMinDispatch(id)}>-</button>
                <p>x {findQuantity()}</p> 
                <button onClick={() => handleAddDispatch(id)}>+</button>
            </div>

        </div>
    )
}