import { React } from 'react';
import { useSelector } from "react-redux";
import Item from '../Item';
import { selectInventory } from './inventorySlice';

const Inventory = () => {
    const inventory = useSelector(selectInventory);


    return (
        <div className="inventory">
            {inventory.map((item) => (
                <Item item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Inventory;