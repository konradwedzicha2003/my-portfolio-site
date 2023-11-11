import React, { useState } from 'react';
import './dashboard.sass';
import TopBar from './components/top-bar/top-bar';
import Footer from './components/footer/footer';
import HomePage from './containers/home-page.container/home-page.container';
import {Route, Switch} from 'react-router-dom';
import Portfolio from './containers/portfolio.container/portfolio.container';
import About from './containers/about.container/about.container';
import Contact from './containers/contact.container/contact.container';
import { Config } from '../utils/Config';

const Dashboard = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className='dashboard'>
        <TopBar isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
        <div className={`dashboard__content ${isMenuOpened ? 'dashboard__content--menu-opened' : ''}`}>
          <Switch>
            <Route exact path={Config.routePaths.homePage.path}>
              <HomePage/>
            </Route>
            <Route exact path={Config.routePaths.about.path}>
              <About/>
            </Route>
            <Route exact path={Config.routePaths.portfolio.path}>
              <Portfolio/>
            </Route>
            <Route exact path={Config.routePaths.contact.path}>
              <Contact/>
            </Route>
          </Switch>
        </div>
        <Footer/>
    </div>
  )
}

export default Dashboard