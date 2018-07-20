import React  from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { login } from '../actions/auth';

class LoginPage extends React.Component {

	submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

	render(){
		return(
			<div>
				<h2>Login Form</h2>
				<LoginForm submit={this.submit} />
				<Link to="/" >Back</Link>
			</div>
		)
	}
}

LoginPage.propTypes  = {
	history : PropTypes.shape({
		push : PropTypes.func.isRequired
	}).isRequired,
	login : PropTypes.func.isRequired
}
export default connect(null,{ login })(LoginPage);
