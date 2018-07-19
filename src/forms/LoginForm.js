import React  from 'react';
import Validator from 'validator';

class LoginForm extends React.Component  {

	state = {
		data : {
			email: '',
			password:''
		},
		loading:false,
		errors:{}
	};

	onChange = e => {
		this.setState({
			data : {...this.state.data, [e.target.name] : e.target.value}
		});
	}
	onSubmit = () => {
		const errors = this.validate(this.state.data);
		this.setState({errors});
	}

	validate = (data) => {
		const errors = {};
		if(!Validator.isEmail(this.data.email)) errors.email = "Not a Email";
		if (!data.password)  errors.password = "Can't be empty";
		return errors;
	}
	render(){
		const {data} = this.state;
		return(
			<form onSubmit={this.onSubmit}>
				<div className="form-field">
					<label htmlFor="email" >Email</label>
					<input
						 type="email"
						 name="email"
						 id="email"
						 placeholder="email@email.com"
						 value={data.email}
						 onChange={this.onChange}
					/>
				</div>
				<div className="form-field">
					<label htmlFor="password" >Password</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Password"
					 />
				</div>
				<button type="submit">Login</button>
			</form>
		)
	}
}
export default LoginForm;
