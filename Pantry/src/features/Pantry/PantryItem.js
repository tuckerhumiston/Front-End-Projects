import { React } from 'react';
import './Pantry.css';
import { decrementQuantity, removeItem } from './pantrySlice';
import { useDispatch } from 'react-redux';

function PantryItem({id, title, quantity = 0}) {
    const dispatch = useDispatch();

    return (
        <tr className='pantry-info'>
            <td>{title}</td>
            <td>x{quantity}</td>
            <td className='buttons'>
                <button onClick={() => dispatch(decrementQuantity(id))}>Remove One</button>
            </td>
            <td className='buttons'>
                <button onClick={() => dispatch(removeItem(id))}>Remove All</button>
            </td>
        </tr>
        
    )
}

export default PantryItem;