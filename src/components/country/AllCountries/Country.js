import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({ cases }) => {

    function numberWithCommas(number) {
        var newval = parseFloat(Math.round(number * 100) / 100);
        return newval.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="card">
            <div className="card-header">
                <Link to={`/${cases.country}`} className="card-title" >
                    <h5 className="card-title">{cases.country}</h5>
                </Link>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-dark">
                    Total Cases: <strong>{numberWithCommas(cases.cases)}</strong>
                </li>
                <li className="list-group-item text-info">
                    Active Cases: <strong>{numberWithCommas(cases.active)}</strong>
                </li>
                <li className="list-group-item text-danger">
                    Fatality: <strong>{numberWithCommas(cases.deaths)}</strong>
                </li>
                <li className="list-group-item text-success">
                    Recovered: <strong>{numberWithCommas(cases.recovered)}</strong>
                </li>
            </ul>
        </div>
    )
}

Country.propTypes = {
    cases: PropTypes.object.isRequired
}

export default Country;
