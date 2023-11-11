import React from 'react'
import './section.sass'

const Section = ({
  children, 
  styleProps = {},
}) => {
  return (
    <div 
      className='section'
      style={styleProps}
    >
        <div className='section__inner'>
            {children}
        </div>
    </div>
  )
}

export default Section