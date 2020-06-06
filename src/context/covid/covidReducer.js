import {
    TOTAL_CASES,
    SET_LOADING,
    SEARCH_COUNTRY,
    SPECIFIC_COUNTRY,
    ALL_COUNTRIES,
    LATEST_UPDATE,
    COUNTRY_DETAILS,
    ALL_CONTINENTS,
    CONTINENT_DETAILS
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ALL_CONTINENTS:
            return {
                ...state,
                continents: action.payload,
                loading: false
            };
        case CONTINENT_DETAILS:
            return {
                ...state,
                continent: action.payload,
                loading: false
            };
        case ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                loading: false
            };
        case LATEST_UPDATE:
            return {
                ...state,
                updates: action.payload,
                loading: false
            };
        case COUNTRY_DETAILS:
            return {
                ...state,
                country: action.payload,
                loading: false
            };
        case SPECIFIC_COUNTRY:
            return {
                ...state,
                countryInfo: action.payload,
                loading: false
            };
        case SEARCH_COUNTRY:
            return {
                ...state,
                countries: action.payload,
                loading: false
            };
        case TOTAL_CASES:
            return {
                ...state,
                caseInfo: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
} 