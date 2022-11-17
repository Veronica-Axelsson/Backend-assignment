// External links

import React from 'react'
// import { NavLink } from 'react-router-dom'

const ExternalLinkIcon = ({link, icon}) => {
  return (
    <a href={link} target="blank"> 
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon