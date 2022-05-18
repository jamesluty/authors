import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <p>We're sorry, we cannot find the author you are looking for. <Link to="/new">Click here</Link> to add them.</p>
        </div>
    )
}

export default Error