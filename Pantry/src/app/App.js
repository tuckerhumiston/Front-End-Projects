import React from 'react';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';

import './App.css';
import Root from '../components/Root';
import Shopping from '../features/Shopping/Shopping';
// import Signup from './components/SignUp';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Home from '../components/Home';
import Pantry from '../features/Pantry/Pantry';
import Recipes from '../features/Recipes/Recipes';

const router = createBrowserRouter( createRoutesFromElements( 
  <>
    <Route path="/login" element={ <Login /> } />
    <Route path="/" element={ <Root /> }>

      <Route path="login" element={ <Login /> } />
      <Route path="profile" element={ <Profile /> } />

      <Route path="home" element={ <Home /> } />
      <Route path="shopping" element={ <Shopping /> } />
      <Route path="pantry" element={ <Pantry /> } />
      <Route path="recipes" element={ <Recipes /> } />

      <Route path="" element={<Navigate to="/home" />} />

    </Route>
  </>
));

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <RouterProvider router={ router } /> 
    </div>
  );
}

export default App;
