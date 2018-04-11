import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
			<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/inbox">Inbox</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/sent">Sent</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/compose">Compose</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/logout">Logout</Link>
						</li>
					</ul>
				</div>
	    </nav>
    );
};

export default Navigation;