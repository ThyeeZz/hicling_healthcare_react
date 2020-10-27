import React, { Component } from 'react';
import { Select } from 'antd';
import ActiveItem from '../../components/ActiveItem';
import {connect } from 'react-redux';
import './index.scss';

class Activity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'activity',
      departs: [
        {
          label: 'lab1',
          value: 1
        },
        {
          label: 'lab2',
          value: 2
        },
        {
          label: 'lab3',
          value: 3
        },
      ]
    }
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    const {userList} = this.props.getAllUsersReducer;
    const { departs } = this.state;
    const { Option } = Select;
    return (
      <div className='activity'>
        <div className="activity_top">
          <Select defaultValue={1} style={{ width: 120 }} onChange={this.handleChange}>
            {
              departs.map(depart => {
                const {value,label} = depart;
                return (
                  <Option value={value} key={label}>{label}</Option>
                )
              })
            }
          </Select>
        </div>
        <div className="sctivity_btm">
          {
            userList.map(member =>{
              return <ActiveItem {...member} key={member.name} />
            })
          }
        </div>
      </div>
    )
  }

  componentDidMount(){
    // 发送事件 修改sidbar的颜色
    
  }
  componentWillUnmount(){
    // 发送事件 修改sidbar的颜色
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Activity)