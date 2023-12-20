import React from 'react';
import logo from '../../src/res/logo.svg'; 
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="logo-container">
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
        </div>
    );
};

export default Logo;