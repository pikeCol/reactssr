import React, { Component } from 'react';
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import { Form, Icon, Input, Button  } from 'antd';
import axios from 'axios'
import Myalert from '../../common/alert'

const FormItem = Form.Item;

@connect(
	state=>state.user,
	{login}
)
class LoginWrap extends Component {
  constructor(){
    super()
    this.state={
      islogin:false,
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let that = this
        axios({
      		method:"POST",
      		url: '/sys/login.do',
      		data:{
      			 username:values.username,
      			 password:values.password,
      		},
      		dataType:"json",
      		success:function(data){
      			if( data.restCode === 200 ){
              that.setState({
                islogin:true
              })
            } else {
              Myalert.autoCloseError('Error', data.msg)
            }

      	  }
      	})

      }

    });
  }
  account = (rule, value, callback) => {
    if( !value) {
      callback('请输入正确的账号')
    }
    callback()
  }
  // 密码验证
  password_validate = (rule, value, callback) => {
    if( !value || value.toString().length < 3) {
      callback('请输入正确的密码')
    }
    callback()
  }
	login =() =>{
		this.props.login(this.props.state)
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: '请输入你的账号!'
            }, {
              validator:this.account
            }]
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入你的密码!'
            }, {
              validator:this.password_validate
            }]
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form>
		)
	}
}

const Login = Form.create()(LoginWrap);
export default Login;
