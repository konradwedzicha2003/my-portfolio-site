import React from 'react'
import Section from '../../../interface/section/section';
import DescriptionBox from '../../../interface/description-box/description-box';
import {colours} from '../../../utils/colours';
import Card from '../../../interface/card/card';
import myPhoto from '../../../../assets/my-photo.jpg';

const Portfolio = () => {
  const projects = [
    {
      image: {
        source: myPhoto,
      },
      description: 'Some project description',
    }
  ];

  return (
    <div>
      <Section
        styleProps={{backgroundColor: colours.background}}
      >
          <DescriptionBox
              description='This is my home page, make yourself at home.'
          />
      </Section>
      <Section
        styleProps={{backgroundColor: colours.backgroundLight}}
      >
        {projects.map(project => {
          return (
            <Card image={project.image} description={project.description}/>
          )
        })}
      </Section>
    </div>
  )
}

export default Portfolio