import React, {useState, useEffect} from "react";
import SearchBar from "../../components/Search";
import "./Pantry.css";

import { useSelector } from 'react-redux';
import { selectPantry } from './pantrySlice';
import PantryItem from "./PantryItem";


const key = 'Grf2gTLS1baqCLnriJHSyY605egHFKHhKbEZMJNb'

export default function Pantry() {

    const [items, setItems] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);

    const pantry = useSelector(selectPantry);


    const itemsDisplay = items.map((response, i) => (
        <div key={i} className="response-item">
            <p>Test Item</p>
        </div>
    ));

    const handleSubmit = (e) => {
        e.preventDefault(); 
      };
    
      // Runs every time the search bar is modified
      const handleChange = (e) => {
        setSearchInput(e.target.value);
      };


      //Note: Add endpoint link
      useEffect(() => {
        async function fetchData() {
            try {
              const response = await fetch(
                `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${key}&query=Cheddar%20Cheese`
              );
              if (response.ok) {
                const jsonResponse = await response.json();
                const itemsArray = jsonResponse.foods; // Extract the array of items from the response
                setItems(itemsArray); // Update the state with the array of items
                console.log(itemsArray);
              }
            } catch (err) {
              console.log(err);
            }
          }
        fetchData();
      }, [searchInput]);





    return (
        <div className="main">            
            <div className="pantry">
                <div className="left">
                    <h2>Add Items</h2>
                    <SearchBar id="item-search" />

                </div>
                <div className="right">
                    <h2>Your Pantry</h2>
                    {/* <SearchBar id="pantry-search" /> */}
                    <table>
                        {pantry?.map((item) => (
                            <PantryItem 
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                quantity={item.quantity}
                            />
                        ))}
                    </table>

                </div>
            </div>
        </div>
    )

}