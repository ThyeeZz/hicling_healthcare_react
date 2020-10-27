import React, { Component } from 'react';
import ChartsItem from '../../components/ChartsItem';
import TrendChart from '../../components/TrendChart';
import { Progress } from 'antd'
import './index.scss'

class Analysis extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'analysis'
    }
  }

  render() {
    const dataList = [
      {
        category: ['优秀','良好','一般'],
        name: '睡眠分析',
        data:[
          { value: 32, name: '优秀' },
          { value: 25, name: '良好' },
          { value: 15, name: '一般' }
        ],
        color: ['#6248A1', '#B0A3CF', '#F2F5FC']
      },
      {
        category: ['优秀','良好','一般'],
        name: '步数分析',
        data:[
          { value: 32, name: '优秀' },
          { value: 25, name: '良好' },
          { value: 15, name: '一般' }
        ],
        color: ['#269A03', '#93CB82', '#EEF9F3']
      },
      {
        category: ['优秀','良好','一般'],
        name: '卡路里分析',
        data:[
          { value: 32, name: '优秀' },
          { value: 25, name: '良好' },
          { value: 15, name: '一般' }
        ],
        color: ['#EE612C', '#F5BC17', '#FBF6F2']
      },
      {
        category: ['优秀','良好','一般'],
        name: 'xx分析',
        data:[
          { value: 32, name: '优秀' },
          { value: 25, name: '良好' },
          { value: 15, name: '一般' }
        ],
        color: ['#269A03', '#93CB82', '#EEF9F3']
      }
    ]
    return (
      <div className='analysis'>
        <p className="title">数据分析</p>
        <div className="content">
          <div className="content__top">
            <div className="content__top__left-part">
              <div className="left-part_realt-time">
                <div className="title-second "> 实时数据</div>
                <div className="left-part_realt-time_content">
                  <div className="left-part_realt-time_progress">
                    <div className="progress-item">
                      <p>前台</p>
                      <Progress percent={30} showInfo={false} />
                    </div>
                    <div className="progress-item">
                      <p>会议室</p>
                      <Progress percent={50} showInfo={false} />
                    </div>
                    <div className="progress-item">
                      <p>这儿</p>
                      <Progress percent={70} showInfo={false} />
                    </div>
                    <div className="progress-item">
                      <p>那儿</p>
                      <Progress percent={100} showInfo={false} />
                    </div>

                  </div>
                  <div className="left-part_realt-time_statistics">
                    <h3>正常：12</h3>
                    <h3>异常： 2</h3>
                  </div>
                </div>

              </div>
              <div className="left-part_trend">
                <p className="title-second ">数据趋势</p>
                <div className="left-part_trend__chart">
                  <TrendChart />
                </div>
              </div>
            </div>
            <div className="content__top_map">
              <div className="title-second">数据同步</div>
              <div className="d3_wrapper"></div>
            </div>
          </div>
          <div className="conent__bottom">
            {/* <div className="conent__bottom__charts-item">
              <ChartsItem id='chartsItem1' />
            </div>
            <div className="conent__bottom__charts-item"></div>
            <div className="conent__bottom__charts-item"></div>
            <div className="conent__bottom__charts-item"></div> */}
            {
              dataList.map((item, index) => {
                return (
                  <div className="conent__bottom__charts-item" key={item.name}>
                    <ChartsItem id={`chartsItem${index}`} charData={item} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Analysis