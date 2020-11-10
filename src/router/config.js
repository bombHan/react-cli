import Homepage from '../views/homepage'
import Test  from '../views/test'

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
  }
];

export default routerConfig