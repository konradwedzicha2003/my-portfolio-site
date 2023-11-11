import React from 'react'
import './button.sass'

export const ButtonVariants = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    MENU: 'menu',
}

const Button = ({
    variant = 'primary',
    styleProps = {},
    onClick,
    children,
}) => {

  return (
    <button 
        className={`button button--${variant}`}
        style={{...styleProps}}
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button