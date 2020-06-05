import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import About from './components/pages/About';
import CovidProvider from './context/covid/CovidState';
import Landing from './components/pages/Landing';
import CountryDetails from './components/country/CountryDetails/CountryDetails';
import AllCountries from './components/country/AllCountries/AllCountries';
import AllContinents from './components/country/AllContinents/AllContinents';
import SpecificCountry from './components/country/AllCountries/SpecificCountry';
import ContinentDetails from './components/country/AllContinents/ContinentDetails';
import NotFound from './components/pages/NotFound';

import Footer from './components/layout/Footer';

import './App.css';

const App = () => {
    return (
        <CovidProvider className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/all-continents" component={AllContinents} />
                    <Route exact path="/all-countries" component={AllCountries} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/country/:name" component={CountryDetails} />
                    <Route exact path="/:name" component={SpecificCountry} />
                    <Route exact path="/continent/:name" component={ContinentDetails} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        </CovidProvider>
    );
}

export default App;
