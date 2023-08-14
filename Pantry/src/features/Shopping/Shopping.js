import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { selectCart } from './cart/cartSlice.js';

import "../../features/Shopping/Shopping.css"
import "../../styles/components.css"
import Search from "../../components/Search.js";
import Inventory from './inventory/Inventory.js';
import CartPopUp from "./cart/CartPopUp.js";

export default function Shopping() {
    const cart = useSelector(selectCart);

    const [cartPopup, setCartPopup] = useState(false);

    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.forEach(item => {
          totalQuantity += item.quantity;
          totalPrice += item.price * item.quantity;
        })
        totalPrice = totalPrice.toFixed(2); 
        return totalPrice;
      }

    return (
        <div className='main shopping'>

            <div className="head-box"> 
                <h1>Shopping</h1>
                {/* <Search id="shopping-search" /> */}
            </div>

            <button id="cart-btn" onClick={() => setCartPopup(true)} role="button">Cart: 🛒 ${getTotal()}</button>
            <CartPopUp trigger={cartPopup} setTrigger={setCartPopup}>

            </CartPopUp>

            <div>
                <h2>Produce</h2>
                <Inventory />
            </div>
            
        </div>
    )
}


