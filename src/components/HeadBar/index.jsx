import React, { Component } from 'react';
import './index.scss'
import LanguageChoose from '../LanguageChoose';

class HeadBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '翰临科技智能健康平台'
    }
  }

  getTitle = (title)=>{
    this.setState({
      title: title
    })
  }

  render() {
    const { history } = this.props;
    return (
      <div className="head-bar">
        <div className="head-left">
          <div className="head-left-imgwraper">
            <img src={require('../../assets/images/hicling.png')} alt='logo' />
          </div>
          <p className="head-left-namewraper">{this.state.title}</p>
        </div>

        <LanguageChoose getTitle={this.getTitle} history={history}></LanguageChoose>
      </div>


    )
  }
}

export default HeadBar