import Homepage from '../views/homepage'
import Test  from '../views/test'
import Websocket from '../views/websocket'
import Echarts from '../views/echarts'
import Reacthooks from '../views/reactHooks'
import Reacthookscopy from '../views/reactHooksCopy'

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
  {
    path: '/reacthooks',
    component: Reacthooks,
    title: 'react hooks',
    showBack: false,
  },
  {
    path: '/reacthookscopy',
    component: Reacthookscopy,
    title: 'react hooks copy',
    showBack: false,
  }

];

export default routerConfig