import React from 'react';
import './index.scss';

const ActiveItem = function (props) {

  const { cal, deviceId, hbp, lbp, hr, name, sleepTotal, step, temp } = props;
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

  const TempOrHr = (props) => {
    if (props.deviceName === 'Thermo' || props.deviceName === 'ETE') {
      return (
        <div className="data-top_temp">
          <p className="icon-temp"></p>
          <div className="temp-data">
            <p className="data">{temp.toFixed(1)}</p>
            <p className="unit">c</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="data-top_hr">
          <div className="hr-data">
            <p className="icon-hr"></p>
            <div className="data-wrapper">
              <p className="data">{hr}</p>
              <div className="unit-wrapper">
                <p>心率负荷</p>
                <p>50%</p>
              </div>
            </div>
          </div>
          <div className="bp-data">
            <p className="icon-bp"></p>
            <div className="data-wrapper">
              <p className="data">{hbp} / {lbp}</p>
            </div>
          </div>
        </div>
      )
    }
  }
  return (
    <div className="active-item">
      <div className="wrapper">
        <div className="active-item_info">
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

        <div className="active-item_data">
          <div className="data_top">
            <TempOrHr deviceName={deviceName}></TempOrHr>
          </div>
          <div className="data_btm">
            <div className="sport">
              <p className="icon-step"></p>
              <div className="sport__data">
                <p className="data">{step}</p>
                <p className="unit">步</p>
              </div>
            </div>
            <div className="sport">
              <p className="icon-cal"></p>
              <div className="sport__data">
                <p className="data">{cal}</p>
                <p className="unit">千卡</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ActiveItem