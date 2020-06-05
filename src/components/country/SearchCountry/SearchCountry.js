import React, { useContext } from "react";
import CovidContext from '../../../context/covid/covidContext';
import CountryCard from "../CountryCard/CountryCard";
import Loader from "../../layout/Loader";

import './SearchCountry.css';

const SearchCountry = () => {
    const covidContext = useContext(CovidContext);
    const { countries, loading } = covidContext;

    // console.log(countries)

    if (loading) {
        return <Loader />
    } else {
        return (
            <div className="container search-page">
                <div className="search-list">
                    {countries.map(country => {
                        return <CountryCard key={country.numericCode} country={country} />;
                    })}
                </div>
            </div>
        )
    }
}

export default SearchCountry;
