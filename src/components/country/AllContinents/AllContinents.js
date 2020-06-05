import React, { useContext, useEffect } from 'react';
import CovidContext from '../../../context/covid/covidContext';
import Continent from './Continent';
import Loader from '../../layout/Loader';

import './style.css';

const AllContinents = () => {
    const covidContext = useContext(CovidContext);
    const { continents, allContinents, loading } = covidContext;

    useEffect(() => {
        allContinents();

        // eslint-disable-next-line
    }, []);

    // console.log(continents)

    if (loading) {
        return <Loader />
    } else {
        return (
            <div className="container">

                <h1 className="head-line">COVID-19 All Continents</h1>
                <div className="continent-list mt-4">
                    {continents.map(cases => {
                        return <Continent key={cases.continent} cases={cases} />;
                    })}
                </div>
            </div>
        )
    }
}

export default AllContinents;
