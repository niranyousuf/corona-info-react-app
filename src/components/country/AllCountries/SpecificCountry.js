import React, { useEffect, useContext } from 'react';
import CovidContext from '../../../context/covid/covidContext';
import Loader from '../../layout/Loader';

const SpecificCountry = ({ match }) => {

    const covidContext = useContext(CovidContext);

    const { countryInfo, specificContry, loading } = covidContext;

    useEffect(() => {
        specificContry(match.params.name)
        // eslint-disable-next-line
    }, []);

    const {
        country,
        population,
        active,
        tests,
        critical,
        cases,
        deaths,
        recovered,
        todayCases,
        todayDeaths,
        todayRecovered
    } = countryInfo;



    function numberWithCommas(number) {
        var newval = parseFloat(Math.round(number * 100) / 100);
        return newval.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const deathsRate = (deaths * (100 / cases)).toFixed(2);
    const recoveryRate = (recovered * (100 / cases)).toFixed(2);

    // console.log(countryInfo)

    if (loading) {
        return <Loader />
    } else {
        return (
            <div className="container">
                <h1 className="head-line">COVID-19 "<em>{country}</em>" Cases </h1>
                <div className="country-block">
                    <div className="card pt-2 my-3 text-center text-info">
                        <h2>{numberWithCommas(population)}</h2>
                        <p className="lead">Population</p>
                    </div>
                    <div className="card pt-2 my-3 text-center">
                        <h2>{numberWithCommas(active)}</h2>
                        <p className="lead">Active Cases</p>
                    </div>
                    <div className="card pt-2 my-3 text-center text-info">
                        <h2>{numberWithCommas(tests)}</h2>
                        <p className="lead">Total Tests</p>
                    </div>
                    <div className="card pt-2 my-3 text-center text-warning">
                        <h2>{numberWithCommas(critical)}</h2>
                        <p className="lead">Critical Cases</p>
                    </div>
                    <div className="card pt-2 my-3 text-center text-info">
                        <h2>{numberWithCommas(cases)}</h2>
                        <p className="lead">Total Cases</p>
                    </div>
                    <div className="card pt-2 my-3 text-center text-danger">
                        <h2>{numberWithCommas(deaths)}</h2>
                        <p className="lead">Total Deaths</p>
                    </div>

                    <div className="card pt-2 my-3 text-center text-danger">
                        <h2>{deathsRate}%</h2>
                        <p className="lead">Fatality Rate</p>
                    </div>
                    <div className="card pt-2 my-3 text-center text-success">
                        <h2>{numberWithCommas(recovered)}</h2>
                        <p className="lead">Total Recovered</p>
                    </div>
                    <div className="card pt-2 my-3 text-center text-primary">
                        <h2>{recoveryRate}%</h2>
                        <p className="lead">Recovery Rate</p>
                    </div>
                    <div className="card pt-2 my-3 text-center text-secondary">
                        <h2>{numberWithCommas(todayCases)}</h2>
                        <p className="lead">Today Cases</p>
                    </div>
                    <div className="card pt-2 my-3 text-center text-danger">
                        <h2>{numberWithCommas(todayDeaths)}</h2>
                        <p className="lead">Today Deaths</p>
                    </div>
                    <div className="card pt-2 my-3 text-center text-primary">
                        <h2>{numberWithCommas(todayRecovered)}</h2>
                        <p className="lead">Today Recovered</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpecificCountry;
