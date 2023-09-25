import React from 'react'

import Nav from './Comp/nav'
import Rout from './Comp/rout'
import { Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        <Nav />
        <Rout />
      </Routes>
    </>
  )
}

