import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Continent = ({ cases }) => {
    return (
        <div className="card">
            <div className="card-header">
                <Link to={`/continent/${cases.continent}`} className="card-title" >
                    <h5 className="card-title">{cases.continent}</h5>
                </Link>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-dark">Total Cases: <strong>{cases.cases}</strong></li>
                <li className="list-group-item text-info">Active Cases: <strong>{cases.active}</strong></li>
                <li className="list-group-item text-danger">Fatality: <strong>{cases.deaths}</strong></li>
                <li className="list-group-item text-success">Recovered <strong>{cases.recovered}</strong></li>
            </ul>
        </div>
    )
}

Continent.propTypes = {
    cases: PropTypes.object.isRequired
}

export default Continent;