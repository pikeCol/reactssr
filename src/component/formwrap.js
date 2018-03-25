import React, {Component} from 'react';
import {Form, Icon, Input, Button} from 'antd';
const FormItem = Form.Item;

class form extends Component {
  render() {
    return (<Form layout="inline">
      <FormItem >
        {getFieldDecorator('userName', {})(<Input prefix={<Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="Username"/>)}
      </FormItem>
      <FormItem >
        {getFieldDecorator('password', {})(<Input prefix={<Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>} type="password" placeholder="Password"/>)}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </FormItem>
    </Form>)
  }
}
const FormWrap = Form.create()(form)
export default FormWrap
