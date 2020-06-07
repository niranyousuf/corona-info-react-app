import React, { useContext, useEffect } from "react";
import CovidContext from '../../../context/covid/covidContext';
import { Link } from 'react-router-dom';

const LatestUpdate = () => {
    const covidContext = useContext(CovidContext);
    const { updates, latestUpdate } = covidContext;

    useEffect(() => {
        latestUpdate();

        // eslint-disable-next-line
    }, []);

    function numberWithCommas(number) {
        var newval = parseFloat(Math.round(number * 100) / 100);
        return newval.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    // console.log(updates)
    return (
        <div className="container">

            <h2 className="head-line">COVID-19 latest Updates Sort by Total Cases</h2>
            <div className="table-responsive-md">

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Country List</th>
                            <th>Total Cases</th>
                            <th>Recovered</th>
                            <th>Fatality</th>
                        </tr>
                    </thead>
                    <tbody>
                        {updates.map((cases, i) => {
                            return (
                                <tr key={cases.country}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <Link to={`/${cases.country}`}>{cases.country}</Link>
                                    </td>
                                    <td className="text-info">{numberWithCommas(cases.cases)}</td>
                                    <td className="text-success">{numberWithCommas(cases.recovered)}</td>
                                    <td className="text-danger">{numberWithCommas(cases.deaths)}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default LatestUpdate;
