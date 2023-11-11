import React from 'react'
import './card.sass'
import Typography from '../typography/typography'

const Card = ({image, description}) => {
  return (
    <div className='card'>
      <div className='card__img-wrapper'>
        <img src={image.source} alt={image.alternativeText}/>
      </div>
      <div className='card__description-wrapper'>
        <Typography>
          {description}
        </Typography>
      </div>
    </div>
  )
}

export default Card