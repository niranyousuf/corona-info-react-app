import React, { Fragment, useContext } from 'react';
import HomePage from './HomePage/HomePage';
import SearchCountry from '../country/SearchCountry/SearchCountry';
import Search from '../layout/Search';
import CovidContext from '../../context/covid/covidContext';

const Landing = () => {

    const covidContext = useContext(CovidContext);
    const { countries } = covidContext;

    if (countries.length >= 1) {
        return (
            <Fragment>
                <Search />
                <SearchCountry />
            </Fragment>
        )
    } else if(countries.length === 0) {
        return (
            <Fragment>
                <Search />
                <HomePage />
            </Fragment>
        )
    }
}

export default Landing;
