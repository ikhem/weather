import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/inbox">Inbox</Link>
            </li>
            <li>
                <Link to="/sent">Sent</Link>
            </li>
            <li>
                <Link to="/compose">Compose</Link>
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
            </ul>
        </div>
    );
};

export default Navigation;