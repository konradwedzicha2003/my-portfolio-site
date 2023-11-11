import React from 'react'
import './navigation.sass'
import Button, { ButtonVariants } from '../../../interface/button/button'
import NavigationItem from './components/navigation-item/navigation-item'
import { Config } from '../../../utils/Config'

const Navigation = ({isMenuOpened, setIsMenuOpened}) => {

    const definedMenuButtonLinesClass = isMenuOpened ? 'navigation__menu-button-line--active' : ''

  return (
    <nav className='navigation'>
        <Button
            variant={ButtonVariants.MENU}
            onClick={() => setIsMenuOpened(state => !state)}
        >
            <div className={`navigation__menu-button-lines ${
                isMenuOpened ? 'navigation__menu-button-lines--active' : ''}`}
            >
                <div className={`navigation__menu-button-line ${definedMenuButtonLinesClass}`}/>
                <div className={`navigation__menu-button-line ${definedMenuButtonLinesClass}`}/>
                <div className={`navigation__menu-button-line ${definedMenuButtonLinesClass}`}/>
            </div>
        </Button>
        <div className={`navigation__menu-background ${isMenuOpened ? 'navigation__menu-background--active' : ''}`}/>
        <div className={`navigation__menu ${isMenuOpened ? 'navigation__menu--active' : ''}`}>
            <ul>
                <NavigationItem
                    path={Config.routePaths.homePage.path}
                    text={Config.routePaths.homePage.title}
                    onClick={() => setIsMenuOpened(false)}
                />
                <NavigationItem
                    path={Config.routePaths.about.path}
                    text={Config.routePaths.about.title}
                    onClick={() => setIsMenuOpened(false)}
                />
                <NavigationItem
                    path={Config.routePaths.portfolio.path}
                    text={Config.routePaths.portfolio.title}
                    onClick={() => setIsMenuOpened(false)}
                />
                <NavigationItem
                    path={Config.routePaths.contact.path}
                    text={Config.routePaths.contact.title}
                    onClick={() => setIsMenuOpened(false)}
                />
            </ul>
        </div>
    </nav>
  )
}

export default Navigation