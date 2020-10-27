export const getLang = (lang) => {
  // import(`../language/${lang}.js`).then(res => {
  //   let {loginDoc} = res;
  //   console.log(loginDoc)
  //   return loginDoc
  // })
  let obj = require(`../language/${lang}.js`);
  let {
    loginDoc
  } = obj
  return loginDoc
}

export const cacheState = (store) => {
  const state = store.getState();
  window.sessionStorage.setItem('state', JSON.stringify(state))
}

export const getTime_MM_DD = (timeStamp) => {
  timeStamp = new Date(timeStamp) || new Date();

  let month = timeStamp.getMonth() < 9 ? `0${timeStamp.getMonth() + 1}` : timeStamp.getMonth() + 1;
  let day = timeStamp.getDate() < 10 ? `0${timeStamp.getDate()}` : timeStamp.getDate();

  return `${month}-${day}`
}

export const getTime_HH_MM = (timeStamp) => {
  timeStamp = new Date(timeStamp) || new Date();

  let hour = timeStamp.getHours() < 10 ? `0${timeStamp.getHours()}` : timeStamp.getHours();
  let minute = timeStamp.getMinutes() < 10 ? `0${timeStamp.getMinutes()}` : timeStamp.getMinutes();

  return `${hour}小时${minute}分`
}