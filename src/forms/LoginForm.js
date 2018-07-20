import React  from 'react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import { Form , Button , Message } from 'semantic-ui-react';
import InlineMessages from '../messages/InlineMessages';

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
		if (Object.keys(errors).length === 0) {
			this.setState({loading : true});
			this.props
			.submit(this.state.data)
			.catch(err => this.setState({errors : err.response.data.errors},this.setState({loading : false})));
		}
	}

	validate = data => {
		const errors = {};
		if(!Validator.isEmail(data.email)) errors.email = " Not a Email ";
		if (!data.password)  errors.password = "Can't be empty";
		return errors;
	}

	render(){
		const {data,errors, loading } = this.state;
		return(
			<Form onSubmit={this.onSubmit} loading={loading}>
				{errors.global && <Message negative>
					<Message.Header>Somthing went wrong.</Message.Header>
					<p>{errors.global}</p>
				</Message>}
				<Form.Field className="form-field">
					<label htmlFor="email" >Email</label>
					<input
						 type="email"
						 name="email"
						 id="email"
						 placeholder="email@email.com"
						 value={data.email}
						 onChange={this.onChange}
					/>
					{errors.email && <InlineMessages text={errors.email} />}
				</Form.Field>
				<Form.Field>
					<label htmlFor="password" >Password</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						value={data.password}
						onChange={this.onChange}
					 />
					 {errors.email && <InlineMessages text={errors.password} />}
				</Form.Field>
				<Button primary>Login</Button>
			</Form>
		)
	}
}

LoginForm.propTypes = {
	submit : PropTypes.func.isRequired
}
export default LoginForm;
