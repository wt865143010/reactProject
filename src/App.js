import React from 'react';
import './App.css';
import Login from "./pages/login/Login";
import Home from "./pages/index/Home";
import {BrowserRouter as Router,Route,Redirect} from "react-router-dom";


/*引入订单管理组件*/
import Orderlist from './pages/order/Orderlist'
/*引入订单管理详情组件*/
import OrderlistDetail from './pages/order/OrderlistDetail'
/*引入发货单组件*/
import  Invoice from './pages/order/Invoice'
/*引入发货单详情组件*/
import  InvoiceDetail from './pages/order/InvoiceDetail'
/*引入退货单组件*/
import Return_Order from './pages/order/Return_Order'
/*引入退货单详情组件*/
import  Return_OrderDetail from './pages/order/Return_OrderDetail'

function App() {
  return (
      <Router>
        <div className="App">
            <div>
                {/*<Login/>*/}
                <Route path="/" exact render={()=><Redirect to={"/login"}/>}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/home" component={Home}></Route>
            </div>

            <Orderlist></Orderlist>
            <OrderlistDetail></OrderlistDetail>
            <Invoice></Invoice>
            <InvoiceDetail></InvoiceDetail>
            <Return_Order></Return_Order>
            <Return_OrderDetail></Return_OrderDetail>
        </div>
      </Router>
  );
}

export default App;
