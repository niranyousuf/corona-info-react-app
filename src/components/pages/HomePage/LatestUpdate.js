import React, { useContext, useEffect } from "react";
import CovidContext from '../../../context/covid/covidContext';
import {Link} from 'react-router-dom';

const LatestUpdate = () => {
    const covidContext = useContext(CovidContext);
    const { updates, latestUpdate } = covidContext;

    useEffect(() => {
        latestUpdate();

        // eslint-disable-next-line
    }, []);

    console.log(updates)
    return (
        <div className="container">

            <h2 className="head-line">COVID-19 latest Updates Sort by Fatality</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
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
                                <td className="text-info">{cases.cases}</td>
                                <td className="text-success">{cases.recovered}</td>
                                <td className="text-danger">{cases.deaths}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    )
}
export default LatestUpdate;
