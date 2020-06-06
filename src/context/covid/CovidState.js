import React, { useReducer } from 'react';
import CovidContext from './covidContext';
import CovidReducer from './covidReducer';
import axios from 'axios';

import {
    SET_LOADING,
    TOTAL_CASES,
    SEARCH_COUNTRY,
    SPECIFIC_COUNTRY,
    COUNTRY_DETAILS,
    ALL_COUNTRIES,
    LATEST_UPDATE,
    ALL_CONTINENTS,
    CONTINENT_DETAILS
} from '../types'



// Country Provide
const CovidProvider = ({ children }) => {

    // Initial State
    const initialState = {
        caseInfo: {},

        countries: [],
        country: {},
        updates: [],

        continents: [],
        continent: {},

        countryInfo: {},
        loading: false
    }


    const [state, dispatch] = useReducer(CovidReducer, initialState);

    // Actions

    // Total update world
    const totalCases = async () => {
        setLoading();
        const res = await axios
            .get('https://corona.lmao.ninja/v2/all');
        dispatch({
            type: TOTAL_CASES,
            payload: res.data
        });
        // console.log(res.data)

    }
    // All countries corona update
    const allCountries = async () => {
        setLoading();
        const res = await axios
            .get('https://corona.lmao.ninja/v2/countries?yesterday&sort');
        dispatch({
            type: ALL_COUNTRIES,
            payload: res.data
        });
        // console.log(res.data)

    }
    // All countries Latest corona update
    const latestUpdate = async () => {
        setLoading();
        const res = await axios
            .get('https://corona.lmao.ninja/v2/countries?yesterday=false&sort=deaths');
        dispatch({
            type: LATEST_UPDATE,
            payload: res.data
        });
        // console.log(res.data)

    }
    // All continents corona update
    const allContinents = async () => {
        setLoading();
        const res = await axios
            .get('https://corona.lmao.ninja/v2/continents?yesterday=false&sort');
        dispatch({
            type: ALL_CONTINENTS,
            payload: res.data
        });
        // console.log(res.data)

    }
    // All continents corona update
    const continentDetails = async (name) => {
        setLoading();
        const res = await axios
            .get(`https://corona.lmao.ninja/v2/continents/${name}?yesterday=false&strict`);
        dispatch({
            type: CONTINENT_DETAILS,
            payload: res.data
        });
        console.log(res.data)

    }

    // Search country
    const searchCountry = async (text) => {
        setLoading();
        const res = await axios.get(`https://restcountries.eu/rest/v2/name/${text}`);
        dispatch({
            type: SEARCH_COUNTRY,
            payload: res.data
        });

        // console.log(res.data)
    }

    // indivisual cuntry list
    const specificContry = async (name) => {
        setLoading();
        const res = await axios.get(`https://corona.lmao.ninja/v2/countries/${name}?yesterday=false&strict=true&query`);
        dispatch({
            type: SPECIFIC_COUNTRY,
            payload: res.data
        });

        // console.log(res.data)
    }
    const countryDetails = async (name) => {
        setLoading();
        const res = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
        dispatch({
            type: COUNTRY_DETAILS,
            payload: res.data[0]
        });
        // console.log(res.data[0]);
        
    }

  

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <CovidContext.Provider
            value={{
                caseInfo: state.caseInfo,
                countries: state.countries,
                updates: state.updates,
                continents: state.continents,
                continent: state.continent,
                country: state.country,
                countryInfo: state.countryInfo,
                loading: state.loading,

                // Method
                setLoading,
                totalCases,
                searchCountry,
                specificContry,
                countryDetails,
                allCountries,
                allContinents,
                continentDetails,
                latestUpdate
            }}
        >
            {children}
        </CovidContext.Provider>
    )
}


export default CovidProvider;