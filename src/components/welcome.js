import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div>
            <div className="header">
                <b> COVID-19 UPDATES</b>
            </div>
            <div className="topnav">
                <ul>
                    <Link to='/login'>
                        <li className="links">Login</li>
                    </Link>
                    <Link to='/register'>
                        <li className="links">Register</li>
                    </Link>
                </ul>
            </div>
            <div className="row">
                <div className="column">
                    stay safe
                   </div>
                <div className="column">
                    wash your hand
                   </div>
                <div className="column">
                    sanitise your self
                   </div>
            </div>

        </div>
    );
}

export default Welcome;