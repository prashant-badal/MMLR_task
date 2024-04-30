import React from 'react'
import Navbar from './component/NavBar'
import Footer from './component/Footer'

const AppLayout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>

  )
}

export default AppLayout
