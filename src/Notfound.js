import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='Notfound'>
            <h2>Sorry !!!</h2>
            <p>Page Not found</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    );
}

export default Notfound;
