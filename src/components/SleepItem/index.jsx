import React from 'react';
import './index.scss';
import { getTime_HH_MM } from '../../utils/tool'

const SleepItem = function (props) {
  const { cal, deviceId, hpb, lbp, hr, name, sleepTotal, step, temp } = props;
  let deviceName, devicePic;
  switch (deviceId) {
    case 0:
      deviceName = 'Aura';
      devicePic = require('../../assets/images/ClingAura.png');
      break;
    case 1:
      deviceName = 'Leap';
      devicePic = require('../../assets/images/ClingAura.png');
      break;
    case 2:
      deviceName = 'ETE';
      devicePic = require('../../assets/images/ClingThermo.png');
      break;
    case 3:
      deviceName = 'Thermo';
      devicePic = require('../../assets/images/ClingThermo.png');
      break;
    default:
      break;
  }
  return (
    <div className="sleep-item">
      <div className="wrapper">
        <div className="sleep-item_top">
          <div className="avater">
            <img src={require('../../assets/images/done.png')} alt="" />
          </div>
          <div className="info">
            <div className="info_user">
              <p className='name text-overflow'>{name}</p>
              <div className="position">
                <p className='position__icon'></p>
                <p className="position__name text-overflow">xx</p>
              </div>
            </div>
            <div className="info_device">
              <img src={devicePic} alt="" />
              <p>{deviceName}</p>
            </div>
          </div>
        </div>
        <div className="sleep-item_btm">
          <div className="sleep-data">
            <p className="sleep-data__icon"></p>
            <div className='sleep-data__len'>{getTime_HH_MM(sleepTotal)}</div>
            <div className="sleep-data__fall-wake">
              <p>入睡：<span>23：44</span></p>
              <p>苏醒：<span>07：30</span></p>
            </div>
          </div>
          <div className="sleep-detail">
            <p className="sleep-detail__icon"></p>
            <li className="sleep-detail__deep">
              <p>深睡</p>
              <p>15%</p>
            </li>
            <li className="sleep-detail__mid">
              <p>中睡</p>
              <p>50%</p>
            </li>
            <li className="sleep-detail__week">
              <p>浅睡</p>
              <p>24%</p>
            </li>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SleepItem