// 创建store 实例，并把 reducer 挂在到store实例上

import { createStore } from 'redux';
import reducer from './reducers';

const loadState = () => {
  try { // 也可以容错一下不支持sessionStorage的情况下，用其他本地存储
    const serializedState = sessionStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    // ... 错误处理
    return undefined;
  }
}
 
const store = createStore(reducer, loadState());

// 讲创建好的实例暴露出去
export default store