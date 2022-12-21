// External links

import React from 'react'

interface ExternalLinkIconType {
  link: string
  icon: string
}

const ExternalLinkIcon: React.FC<ExternalLinkIconType> = ({link, icon}) => {
  return (
    <a href={link} target="blank"> 
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon