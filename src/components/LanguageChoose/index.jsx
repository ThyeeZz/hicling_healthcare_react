import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import './index.scss'


class LanguageChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'cn'
    }
  }

  handleClick = ({ key }) => {
    let lang = '';
    let title = '';
    if (key === '1') {
      // 在组建内部，通过 this.props 来访问action 对象
      this.props.useCn('cn');
      lang = 'cn';
      title = '翰临科技智能健康平台';
      this.props.getTitle(title)
      this.setState({
        lang: lang
      })
    } else if (key === '2') {
      this.props.useEn('en');
      lang = 'en';
      title = 'Hicling Healthcare Platform';
      this.props.getTitle(title)
      this.setState({
        lang: lang
      })
    } else if (key === '3') {
      // this.props.history.push('/login')
      const { history, logout } = this.props;
      logout();

      history.push('/login')
      console.log(history)
    }

  }

  render() {
    const { isLogin } = this.props.changeLoginStateReducer;
    const langChooseMenu = (
      <Menu onClick={this.handleClick}>
        {this.state.lang === 'en' && <Menu.Item key="1">简体中文</Menu.Item>}
        {this.state.lang === 'cn' && <Menu.Item key="2">English</Menu.Item>}
      </Menu>
    );
    const LogoutMenu = (
      <Menu onClick={this.handleClick}>
        {this.state.lang === 'en' && <Menu.Item key="3">退出登录</Menu.Item>}
        {this.state.lang === 'cn' && <Menu.Item key="3">Logout</Menu.Item>}
      </Menu>
    );

    return (
      <div className="head-right">
        {
          !isLogin && <Dropdown overlay={langChooseMenu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              {this.state.lang === 'cn' ? '简体中文' : 'English'}<DownOutlined />
            </a>
          </Dropdown> || <div className="avatar_wrapper">
            <div className="avatar">
              <img src={require('../../assets/images/admin.gif')} alt="" />
            </div>
            <Dropdown overlay={LogoutMenu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        }

      </div>
    )
  }

  componentDidMount() {
    let { lang } = this.props.changeLanguageReducer;

    this.setState({
      lang: lang
    })
  }


}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  const { logout, useCn, useEn } = actions
  return {
    login: () => { dispatch({ type: 'login' }) },
    logout: () => { dispatch({ type: 'logout' }) },
    useCn: params => {
      dispatch(useCn(params))
    },
    useEn: params => {
      dispatch(useEn(params))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageChoose)