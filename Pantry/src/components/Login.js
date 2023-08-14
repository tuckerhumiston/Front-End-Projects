import React, { useState } from "react";
import "../styles/Login.css";
import SignUp from "./SignUp";

export default function Login() {

    //const [sign-up     FIXME

    const handleSignup = () => {
        return (
            <SignUp />
        )
    }

    return (
        <div className="login">
            <div className="split left">
                <div className="input-container">
                    <h1>Log in</h1>
                    <form>
                        <label htmlFor="username">Username:</label>
                        <input value="username" type="text" placeholder="Username" />
                        <label htmlFor="password">Password:</label>
                        <input value="password" type="password" />
                        <button>Log in</button>
                    </form>
                </div>
            </div>
            <div className="split right">
                <h2>New Here?</h2>
                <h3>Sign up to fill your pantry!</h3>
                <button onClick={handleSignup} >Sign up</button>
            </div>
        </div>
    )

}