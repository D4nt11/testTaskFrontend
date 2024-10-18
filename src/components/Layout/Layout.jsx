import React from 'react'
import './Layout.css'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='layout'>
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
