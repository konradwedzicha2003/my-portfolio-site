import React from 'react';
import './home-page.container.sass'
import Section from '../../../interface/section/section';
import DescriptionBox from '../../../interface/description-box/description-box';
import myPhoto from '../../../../assets/my-photo.jpg';
import { colours } from '../../../utils/colours';

const HomePage = () => {
    const image = {
        source: myPhoto,
        alternativeText: 'My Photo'
    };

    return (
        <div className='home-page-container'>
            <Section
                styleProps={{backgroundColor: colours.background}}
            >
                <DescriptionBox
                    description='This is my home page, make yourself at home.'
                    image={image}
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
        </div>
    );
}

export default HomePage;
