// Breadcrumb Menu section

import React from 'react'
import { NavLink } from 'react-router-dom'

const BreadcrumbSection = ({currentPage}) => {
  return (
    <section className="pageMenu">
        <div className="container">
            <ul className="breadcrumb-list pageMenu-list">
                <li><NavLink to="/">Home</NavLink></li>
                <li>{currentPage}</li> 
            </ul>
        </div>
    </section>
  )
}

export default BreadcrumbSection