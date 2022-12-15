import React from 'react';
import { Route, Routes } from 'react-router-dom';

import "./assets/global.css"
import Navbar from './components/ui/Navbar';
import Home from './views/home/Home';
import Login from './views/login/Login';
import Register from './views/register/Register';

function App() {
    return (
        <Routes>
            <Route element={<Navbar />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<h1 className='container'>About</h1>} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}

export default App;