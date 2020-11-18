const menuList = [
  {
    name: '首页',
    key: '/homepage'
  },
  {
    name: 'websocket',
    key: '/websocket'
  },
  {
    name: 'echarts',
    key: '/echarts'
  },
  {
    name: '测试模块',
    key: 'testmode',
    children: [
      {
        name: 'test页面',
        key: '/test'
      }
    ]
  }
]

export default menuList;