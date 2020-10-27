import React, { Component } from 'react';
import './index.scss';
const echarts = require('echarts');


class ChartsItem extends Component {

  constructor(porps) {
    super(porps)
  }

  render() {
    
    return (
      <div className='xx' id={this.props.id}></div>
    )
  }

  componentDidMount() {
    let { id, charData } = this.props
    const myChart = echarts.init(document.getElementById(id));
    window.addEventListener('resize', function () {
      //当浏览器窗口大小发生变化时，触发的function
      myChart.resize()
    })

    const option = {
      // tooltip: {
      //   trigger: 'item',
      //   formatter: '{a} <br/>{b}: {c} ({d}%)'
      // },
      title: {
        text: charData.name,
        left: 15,
        textStyle: {
          fontWeight: 'normal',
          fontSize: 16
        }
        
      },
      legend: {
        orient: 'vertical',
        right: 10
      },
      series: [
        {
          type: 'pie',
          radius: ['30%', '40%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'outside',
            formatter: '{c}'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '14'
            }
          },
          labelLine: {
            show: true,

          },
          data: charData.data,
          color: charData.color
        }
      ]
    };

    myChart.setOption(option);
  }

}
export default ChartsItem