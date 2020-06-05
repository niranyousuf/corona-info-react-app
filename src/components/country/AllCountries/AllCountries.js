import React, { useContext, useEffect } from 'react';
import CovidContext from '../../../context/covid/covidContext';
import Country from './Country';

import './style.css';
import Loader from '../../layout/Loader';

const AllCountries = () => {
    const covidContext = useContext(CovidContext);
    const { countries, allCountries, loading } = covidContext;

    useEffect(() => {
        allCountries();

        // eslint-disable-next-line
    }, []);

    // console.log(countries)

    if (loading) {
        return <Loader />
    } else {
        return (
            <div className="container">

                <h1 className="head-line">COVID-19 All Countries</h1>
                <div className="country-list mt-4">
                    {countries.map(cases => {
                        return <Country key={cases.country} cases={cases} />;
                    })}
                </div>
            </div>
        )
    }
}

export default AllCountries;
