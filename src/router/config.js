import Homepage from '../views/homepage'
import Test  from '../views/test'
import Websocket from '../views/websocket'
import Echarts from '../views/echarts'

const routerConfig = [
  {
    path:'/homepage',
    component:Homepage,
    title: '首页',
    showBack: false,
  },{
    path:'/test',
    component: Test,
    title: '测试页',
    showBack: true,
  },{
    path:'/websocket',
    component: Websocket,
    title: 'wesocket',
    showBack: false,
  },
  {
    path:'/echarts',
    component: Echarts,
    title: 'echarts',
    showBack: false,
  },

];

export default routerConfig