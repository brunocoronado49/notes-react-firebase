import React from 'react';
import { Link } from 'wouter';
import './style.css';

const Nav = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/notes">Notes</Link>
            </li>
            <li>
                <Link to="/create-note">Create note</Link>
            </li>
            <li className="about">
                <Link to="/about">About</Link>
            </li>
        </ul>
    );
};

export default Nav;
