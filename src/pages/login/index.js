import React, { Component } from 'react';
import {login} from '../../redux/user.redux'

@connect(
	state=>state.user,
	{login}
)
class Login extends Component {
	login =() =>{
		this.props.login(this.props.state)
	}
	render() {
		return (
			<div>
				login
			</div>
		)
	}
}


export default Login;
