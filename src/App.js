import React from 'react';
import './App.css';
import Login from "./pages/login/Login";
import Home from "./pages/index/Home";
import {BrowserRouter as Router,Route,Redirect} from "react-router-dom";

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
        </div>
      </Router>
  );
}

export default App;
