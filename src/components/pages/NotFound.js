import React from 'react'

const NotFound = () => {
    return (
        <div className="container">
            <div style={nontFound}>
                <h1>This Page is Not Found</h1>
                <h2 style={h2Style}>404</h2>
                <a
                    className='btn btn-lg btn-primary'
                    href='/'
                >Go To Home</a>
            </div>
        </div>
    )
}

const h2Style = {
    fontSize: '56px',
    fontWeight: '700',
}
const nontFound = {
    height: '80vh',
    widht: '100%',
    display: 'grid',
    alignItems: 'center',
    textAlign: 'center'
}

export default NotFound
