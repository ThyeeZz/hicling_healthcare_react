import React from 'react';
import HeadBar from './components/HeadBar';
import Login from './views/Login/index.jsx';
import Home from './views/Home';
import {Router,Route,Redirect} from 'react-router-dom';
import history from './history';
import './App.css';
import {
  connect
} from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div className = "App" >
        <Router history={history}>
          <HeadBar history={history}></HeadBar>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path='/login' component={Login}></Route>
          <Route path='/home' component={Home}></Route>
        </Router>
      </div>
    );
  }

}

// mapStateToProps
const mapStateToProps = state => {
  return state
}



// app 组件接收改变后的state，所以要实现 connect函数的第一个参数
export default connect(mapStateToProps)(App);