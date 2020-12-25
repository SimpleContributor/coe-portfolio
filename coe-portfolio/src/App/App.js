import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/home/Home';
import Photos from './components/photos/Photos';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import './app.css';

function App() {
    const location = useLocation();
  
    return(
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>   
                <Route exact path='/' component={Home} />
                <Route path='/photos' component={Photos} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />  
            </Switch>
        </AnimatePresence>
    )
}

export default App;
