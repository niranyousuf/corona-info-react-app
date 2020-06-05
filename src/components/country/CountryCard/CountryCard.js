import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './CountryCard.css'

const CountryCard = ({ country: {name, flag} }) => {

    

    return (
        <div className="card">
            <Link to={`/country/${name}`} className="card-title" >
                <div className="card-flag">
                    <img src={flag} alt={name} />
                </div>
                {name}
            </Link>
        </div>
    )
}
CountryCard.propTypes = {
    country: PropTypes.object.isRequired
}

export default CountryCard;
