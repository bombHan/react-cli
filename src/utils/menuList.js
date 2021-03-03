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
  },
  {
    name: 'hooks demo1',
    key: '/reacthooks'
  },
  {
    name: 'hooks demo2',
    key: '/reacthookscopy'
  },
]

export default menuList;