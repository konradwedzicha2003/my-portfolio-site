import React from 'react';
import './footer.sass';
import githubIcon from '../../../../assets/github.png';
import linkedInIcon from '../../../../assets/linkedin.png';

const Footer = () => {

    const images = {
        LINKEDIN: {
            source: linkedInIcon,
            alternativeText: 'LinkedIn',
        },
        GITHUB: {
            source: githubIcon,
            alternativeText: 'Github',
        }
    }

    return (
        <div className='footer'>
            <div className='footer__content'>
                <div className='footer__link'>
                    <img src={images.GITHUB.source} alt={images.GITHUB.alternativeText}/>
                    <a href='https://github.com/konradwedzicha2003' target='_blank' >Github</a>
                </div>
                <div className='footer__link'>
                    <img src={images.LINKEDIN.source} alt={images.LINKEDIN.alternativeText}/>
                    <a href='https://www.linkedin.com/in/konrad-w%C4%99dzicha-78597a250/' target='_blank' >LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
