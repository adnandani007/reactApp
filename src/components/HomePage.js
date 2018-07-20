import React  from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
	<div>
		<h2>Click to Login</h2>
		<Link to="/login" className="ui primary button">Login</Link>
	</div>
)
export default HomePage;
