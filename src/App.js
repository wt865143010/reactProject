import React from 'react';
import './App.css';
import Login from "./pages/login/Login";
import Home from "./pages/index/Home";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import PrivateRouter from "./component/PrivateRouter/PrivateRouter";
// import UserList from "./pages/user/userlist/UserList";

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route path="/" exact render={()=><Redirect to={"/login"}/>}></Route>
                <Route path="/login" component={Login}></Route>
                {/*<Route path="/home" component={Home}></Route>*/}
                <Route path='/home' render={()=>
                    <Home>
                        <PrivateRouter/>
                    </Home>
                }>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
