import React  from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component {
	submit = (data) => {
		console.log(data);
	}
	render(){
		return(
			<div>
				<LoginForm submit={this.submit} />
				<Link to="/" >Back</Link>
			</div>
		)
	}
}
export default LoginPage;
