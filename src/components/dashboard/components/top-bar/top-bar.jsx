import React from 'react';
import './top-bar.sass';
import Typography, { TypographyVariants } from '../../../interface/typography/typography';
import Navigation from '../navigation/navigation';

const TopBar = ({ isMenuOpened, setIsMenuOpened}) => {
    return (
        <div className='top-bar'>
            <div className='top-bar__inner'>
                <div className='top-bar__page-header'>
                    <Typography variant={TypographyVariants.H3}>
                        Konrad Wędzicha
                    </Typography>
                </div>
                <Navigation isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened}/>
            </div>
        </div>
    );
}

export default TopBar;
