import React from 'react';

const About = () => {
    return (
        <div className="container" style={aboutStyle}>
            <div className="row">
                <div className="col-md-8 offset-2">
                    <div class="card mt-4">
                        <div class="card-header">
                            <h1>COVID-19 Casees data</h1>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                Created By:
                                <a
                                    rel="noopener noreferrer"
                                    href="http://niranyousuf.xyz/">
                                    <strong>
                                        <em> Niran Yousuf</em>
                                    </strong>
                                </a>
                            </li>
                            <li class="list-group-item">
                                COVID API Cradit:
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://corona.lmao.ninja/">
                                    https://corona.lmao.ninja/
                                </a>
                            </li>
                            <li class="list-group-item">
                                Flag Image Cradit:
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://restcountries.eu//">
                                    https://restcountries.eu//
                                </a>
                            </li>
                            <li class="list-group-item">Version: 1.0.0</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const aboutStyle = {
    height: '80vh',
    widht: '100%',
    display: 'grid',
    alignItems: 'center'
}

export default About;
