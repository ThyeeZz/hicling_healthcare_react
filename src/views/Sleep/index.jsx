import React,{Component} from 'react';
import SleepItem from '../../components/SleepItem';
import './index.scss';
import { connect } from 'react-redux';
import ChartsItem from '../../components/ChartsItem'

class Sleep extends Component{
  constructor(props){
    super(props)
    this.state={
      name: 'sleep',
      sleepRatio: {
        category: ['>90 优秀','80-90 良好','70-80 一般', '<70 差'],
        name: '睡眠比例',
        data:[
          { value: 32, name: '>90 优秀' },
          { value: 25, name: '良好' },
          { value: 15, name: '一般' },
          { value: 7, name: '差' }
        ],
        color: ['#5D4698', '#ADA1C9', '#C3BDD9', '#EEEDF5']
      },
      averageData: [
        {
          icon: require('../../assets/images/done.png'),
          tag: '睡眠时长',
          data: '6.5小时'
        },
        {
          icon: require('../../assets/images/done.png'),
          tag: '入睡时间',
          data: '00:07'
        },
        {
          icon: require('../../assets/images/done.png'),
          tag: '起床时间',
          data: '07:04'
        },
        {
          icon: require('../../assets/images/done.png'),
          tag: '睡眠质量',
          data: '良好'
        },
        {
          icon: require('../../assets/images/done.png'),
          tag: '睡眠周期',
          data: '6次'
        },
        {
          icon: require('../../assets/images/done.png'),
          tag: '深睡比例',
          data: '22.5%'
        },
      ]
    }
  }

  render(){
    const { userList } =this.props.getAllUsersReducer;
    const { averageData } = this.state;
    return(
      <div className='sleep'>
        <div className="title">
          <h3>睡眠分析</h3>
        </div>
        <div className="sleep__content">
          <div className="sleep__average">
            <div className="sleep_ratio-data" id='chart-wrapper'>
              
              <ChartsItem id='chart-wrapper' charData={this.state.sleepRatio} />
            </div>
            <div className="sleep_average-data">
              <div className="sleep_average-data_title">
                <p>睡眠平均数据</p>
                <p>{"69.4%的用户睡眠质量不佳(<80分)"}</p>
              </div>
              <ul className="sleep_average-data_detail">
                {
                  averageData.map( item => {
                    let {icon,tag,data} = item;
                    return (
                      <li key={tag} className='sleep_average-data_detail_li'>
                        <img src={icon} alt=""/>
                        <p>{tag}</p>
                        <p>{data}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="sleep__detail">
            {
              userList.map(member => <SleepItem {...member} key={member.name} />)
            }
          </div>
        </div>
        
        
      </div>
    )
  }
}

const mapStateToProps = state=> state

export default connect(mapStateToProps)(Sleep)