import React, { useContext, useState } from 'react';
import CovidContext from '../../context/covid/covidContext';

const Search = () => {
    const [text, setText] = useState('');

    const covidContext = useContext(CovidContext)


    const onChange = e => {
        e.preventDefault();
        setText(e.target.value);
        covidContext.searchCountry(text);
        // setText('');
    };

    // const onChange = e => setText(e.target.value);

    return (
        <div className="container" >
            <form className="mt-3">
                <input
                    type="text"
                    name="text"
                    className="form-control d-block"
                    placeholder="Search Country ..."
                    onChange={onChange}
                    autoComplete="off"
                />
            </form>
        </div>
    )
}

export default Search;
