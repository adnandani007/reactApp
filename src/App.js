import React  from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

const App = () => (
	<div>
		<Route path="/" component={HomePage} />
		<Route path="/login" component={LoginPage} />
	</div>
)

export default App;
