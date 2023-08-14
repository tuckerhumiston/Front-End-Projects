import React from "react";
import "../styles/Home.css";

export default function Home() {

    return (
        <div className="home-page">
            <div className="banner">
                <h1>Welcome to Pantry.com</h1>
                <p className="subtitle">Your Ultimate Pantry Management Solution</p>
            </div>
            <h2>Key Features</h2>
            <div className="features">
                <div className="feature-item">
                    <div className="icon">
                        <i className="fas fa-list"></i>
                    </div>
                    <h3>Inventory Management</h3>
                    <p>Effortlessly track and organize your pantry items.</p>
                </div>
                <div className="feature-item">
                    <div className="icon">
                        <i className="fas fa-clipboard-list"></i>
                    </div>
                    <h3>Shopping List</h3>
                    <p>Create and manage your shopping trip with ease.</p>
                    </div>
                <div className="feature-item">
                    <div className="icon">
                        <i className="fas fa-search"></i>
                    </div>
                    <h3>Recipe Search</h3>
                    <p>Discover new recipes based on the ingredients you have.</p>
                </div>
            </div>
        </div>
    );
                 
}