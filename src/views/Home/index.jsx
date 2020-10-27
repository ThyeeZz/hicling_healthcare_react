import React, { Component } from 'react';
import SideBar from '../../components/SideBar';
import { Route, Redirect, Switch } from 'react-router-dom';
import Analysis from '../Analysis';
import Activity from '../Activity';
import Sleep from '../Sleep';
import System from '../System';
import './index.scss';
import { connect } from 'react-redux';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      routers: [
        {
          path: '/home/analysis',
          component: Analysis
        },
        {
          path: '/home/activity',
          component: Activity
        },
        {
          path: '/home/sleep',
          component: Sleep
        },
        {
          path: '/home/system',
          component: System,
          children: [
            {

            }
          ]
        }
      ],
      theme: '#fff'
    }
  }

  getDeviceId = (n) => {
    switch (n) {
      case 0:
        return "Aura";
      case 1:
        return 'Leap';
      case 2:
        return 'Thermo';
      case 3:
        return 'ETE';
      default:
        return 'Unkonwn device'
    }
  }

  getAlarmType(n) {
    switch (n) {
      default:
        return 0
    }
  }

  render() {
    const { routers,theme } = this.state;

    return (
      <div className="home">
        <div className="home-layout">
          <SideBar theme={theme}></SideBar>
          <div className="home-layout-content">
            <Switch>
              <Route exact path='/home'>
                <Redirect to='/home/analysis'></Redirect>
              </Route>
              {
                routers.map(item => {
                  const { path, component } = item;
                  return (
                    <Route path={path} component={component} key={path} ></Route>
                  )
                })
              }
            </Switch>
          </div>
        </div>
      </div >
    )
  }
  componentWillMount() {
    axios.post('/api/users').then(res => {
      const { data } = res;
      let userList = [];
      let index = 1;
      data.forEach(item => {
        userList.push({
          index: index,
          name: item.name,
          deviceId: this.getDeviceId(item.deviceId),
          hr: item.hr,
          cal: item.cal,
          sleepTotal: item.sleepTotal,
          hbp: item.hbp,
          lbp: item.lbp,
          step: item.step,
          temp: item.temp,
        })
      })
      this.props.getUsers(data);
    })
  }
  componentDidMount(){
    const {location} = window;
    let theme = location.pathname==="/home/activity"?'#31424A':"#fff"
    this.setState({theme})
    this.props.history.listen((e)=>{
      if(e.pathname==="/home/activity"){
        this.setState({
          theme: '#31424A'
        })
      }else{
        this.setState({
          theme: '#fff'
        })
      }
    })
  }

}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    useCn: params => {
      dispatch({ type: 'useCn', params })
    },
    getUsers: params => {
      dispatch({ type: 'getUsers', params })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)