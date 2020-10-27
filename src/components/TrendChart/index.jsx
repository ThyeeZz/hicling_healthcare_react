import React, { Component } from 'react';
import { getTime_MM_DD } from '../../utils/tool'

const echarts = require('echarts');


class TrendChart extends Component {

  constructor(porps) {
    super(porps)
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }} id='trendChart'></div>
    )
  }

  componentDidMount() {
    const myChart = echarts.init(document.getElementById('trendChart'));
    let dayList = [];
    

    let i = 0;
    while (i < 10) {
      let date = new Date();
      let time = date.setDate(date.getDate()-i)
      dayList.unshift(getTime_MM_DD(time))
      i++
    }


    window.addEventListener('resize', function () {
      //当浏览器窗口大小发生变化时，触发的function
      myChart.resize()
    })

    const option = {
      tooltip: {
        trigger: 'axis'
      },
      // legend: {
      //   data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      // },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dayList
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      series: [
        {
          name: '正常',
          type: 'line',
          data: [65, 64, 68, 60, 62, 63, 69, 65, 66, 65]
        },
        {
          name: '非正常',
          type: 'line',
          data: [1, 2, 1, 3, 5, 3, 5, 1, 2, 3]
        }
      ]
    };

    myChart.setOption(option);
  }

}
export default TrendChart