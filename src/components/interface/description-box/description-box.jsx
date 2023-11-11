import React from 'react'
import './description-box.sass'
import Typography, { TypographyVariants } from '../typography/typography'

const DescriptionBox = ({
  description,
  image,
  reverseImagePosition,
}) => {
  return (
    <div className={`description-box ${reverseImagePosition ? 'description-box--image-left' : ''}`}>
      <div className='description-box__description-wrapper'>
        <Typography variant={TypographyVariants.DESCRIPTION}>
          {description}
        </Typography>
      </div>
      {image &&
        <div className='description-box__img-wrapper'>
          <img src={image.source} alt={image.alternativeText}/>
        </div>
      }
    </div>
  )
}

export default DescriptionBox