import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Product from './product'
import Cart from './cart'

const Rout = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    )
}

export default Rout