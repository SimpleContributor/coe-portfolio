import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/nav-and-footer/Navigation';
import Footer from './components/nav-and-footer/Footer';
import Home from './components/home/Home';
import Photos from './components/photos/Photos';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ScrollToTop from './components/ScrollToTop';
import './app.css';

class App extends Component {
    render() {
        const App = () => (
            <div>
                <Navigation />
                <Switch>
                    <ScrollToTop>
                        <Route exact path='/' component={Home} />
                        <Route path='/photos' component={Photos} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                    </ScrollToTop>
                </Switch>
                <Footer />
            </div>
        )

        return(
            <Switch>
                <App />
            </Switch>
        )
    }
}

export default App;
