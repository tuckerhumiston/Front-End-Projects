import React from 'react';
import '../styles/Footer.css';

export default function Footer() {

    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Pantry.com. All rights reserved.</p>
            </div>
            <div className='links'>
                {/* <a href="https://github.com/tuckerhumiston/pantry.com" target="_blank"><img src={require("../styles/images/github.png")}/></a> */}
            </div>
        </footer>   
    )
}