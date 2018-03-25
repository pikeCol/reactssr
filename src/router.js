import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router-dom'
import Product from './pages/pagelist/product/index'
import UserInfo from './pages/pagelist/userinfo/index'
import Customer from './pages/pagelist/customer/index'
import Order from './pages/pagelist/order/index'
import PageList from './pages/pagelist';

class Routers extends Component {
  render() {
    return (<PageList>
      <Route path="/pagelist/product" component={Product}/>
      <Route path="/pagelist/userinfo" component={UserInfo}/>
      <Route path="/pagelist/customer" component={Customer}/>
      <Route path="/pagelist/order" component={Order}/>
    </PageList>)
  }
}
export default Routers
