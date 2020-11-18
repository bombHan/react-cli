let Socket = null
let setIntervalWesocketPush = null
import moment from "moment"

/**
 * 建立websocket连接
 * @param {string} url ws地址
 */
export const createSocket = (url, func) => {
  Socket && Socket.close()
  Socket = null;
  try {
    if (!Socket) {
      console.log('websocket建立连接')
      Socket = new WebSocket(url)
      Socket.onopen = onopenWS.bind(this, func)
      Socket.onmessage = onmessageWS
      Socket.onerror = onerrorWS.bind(this, url, func)
      Socket.onclose = oncloseWS
    } else {
      console.log('websocket已连接')
    }
  } catch (e) {
    //进行重连;
    console.log('websocket连接错误');
    onerrorWS(url, func)
  }

}

/**打开WS之后发送心跳 */
const onopenWS = (func, e) => {
  console.log(func, e)
  sendPing();
  func && func() // 建立连接后有回调就回调
}

/**连接失败重连 */
const onerrorWS = (url, func, e) => {
  console.log(url, func, e)
  Socket.close();
  clearInterval(setIntervalWesocketPush)
  console.log('连接失败重连中', Socket, url, func)
  if (Socket.readyState !== 3) {
    Socket = null
    createSocket(url, func)
  }
}

/**WS数据接收统一处理 */
export const onmessageWS = e => {
  window.dispatchEvent(new CustomEvent('onmessageWS', {
    detail: e.data
  }))
}

/**
 * 发送数据但连接未建立时进行处理等待重发
 * @param {any} message 需要发送的数据
 */
const connecting = message => {
  setTimeout(() => {
    if (Socket.readyState === 0) {
      connecting(message)
    } else {
      Socket.send(JSON.stringify(message))
    }
  }, 1000)
}

/**
 * 发送数据
 * @param {any} message 需要发送的数据
 */
export const sendWSPush = message => {
  if (Socket !== null && Socket.readyState === 3) {
    Socket.close()
    createSocket()
  } else if (Socket !== null && Socket.readyState === 1) {
    Socket.send(JSON.stringify(message))
  } else if (Socket !== null && Socket.readyState === 0) {
    connecting(message)
  }
}

/**断开 */
const oncloseWS = () => {
  clearInterval(setIntervalWesocketPush)
  console.log('websocket已断开')
}
/**发送心跳
 * @param {number} time 心跳间隔毫秒 默认60000
 * @param {string} ping 心跳名称 默认字符串ping
 */
export const sendPing = (time = 60000) => {
  clearInterval(setIntervalWesocketPush)
  Socket.send(JSON.stringify({
    type: "heart",
    time: moment().format('YYYY-MM-DD HH:mm:ss')
  }))
  setIntervalWesocketPush = setInterval(() => {
    Socket.send(JSON.stringify({
      type: "heart",
      time: moment().format('YYYY-MM-DD HH:mm:ss')
    }))
  }, time)
}

// 关闭websocket
export const closeWS = () => {
  Socket && Socket.close();
  Socket = null;
  console.log('关闭websocket')
}