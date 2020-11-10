/*
 * 初始值
 */

export const config = {
    count:1000,
    userInfo: {}
};


/*
 * action 创建函数
 */

export function setCount(value) {
    return { type: 'COUNT', value }
}

export function setUserInfo(value) {
  return { type: 'USERINFO', value }
}