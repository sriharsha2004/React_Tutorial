import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>The Dojo Blog</h1>
        {/* you can see below that inorder to include inline css we need to include inside a object
        and the object must me enclosed inside curly braces */}
        <div className="links">
            {/* here we used anchor tags to navigate this indictatees ever if we import 
            react-router it will not intercept the requests to the server , to intercept
            the requests to server we use Link tag insteard of using anchor tag */}

            {/* <a href="/">Home</a>
            <a href="/create" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
            }}>New Blog</a> */}

            {/* Replace above links with below code */}
            <Link to="/">Home</Link>
            <Link to="/create" style = {{
                  color: 'white', 
                  backgroundColor: '#f1356d',
                  borderRadius: '8px' 
            }}>New Blog</Link>

        </div>
        </nav>
    );
}

export default Navbar;
