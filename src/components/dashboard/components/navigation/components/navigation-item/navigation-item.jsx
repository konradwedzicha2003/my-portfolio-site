import React from 'react'
import './navigation-item.sass'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const NavigationItem = ({
    path,
    text,
    icon,
    onClick,
}) => {
  return (
    <li 
      className='navigation-item'
      onClick={onClick}
    >
        <Link to={path}>
            {text}
            {icon}
        </Link>
    </li>
  )
}

export default NavigationItem