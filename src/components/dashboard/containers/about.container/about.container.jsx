import React from 'react'
import Section from '../../../interface/section/section';
import DescriptionBox from '../../../interface/description-box/description-box';
import {colours} from '../../../utils/colours';
import myPhoto from '../../../../assets/my-photo.jpg';

const About = () => {
  const image = {
    source: myPhoto,
    alternativeText: 'My Photo'
  };

  return (
    <div>
      <Section
        styleProps={{backgroundColor: colours.background}}
    >
          <DescriptionBox
              description='About me.'
          />
      </Section>
      <Section
        styleProps={{backgroundColor: colours.backgroundLight}}
      >
          <DescriptionBox
              description='This is my home page, make yourself at home.'
              image={image}
              reverseImagePosition={true}
          />
      </Section>
      <Section
        styleProps={{backgroundColor: colours.background}}
      >
          <DescriptionBox
              description='This is my home page, make yourself at home.'
              image={image}
          />
      </Section>
    </div>
  )
}

export default About