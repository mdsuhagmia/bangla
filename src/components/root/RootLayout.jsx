import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Menu/>
      <Outlet/>
      <Footer/>
    </>

  )
}

export default RootLayout