export default [
  { name: '登录', path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { name: '智能分析', path: '/add_chart',  icon: 'BarChartOutlined', component: './AddChart' },
  { name: '我的图表', path: '/my_chart',  icon: 'PieChartOutlined', component: './MyChart' },

  { name: '主页', path: '/', redirect: '/add_chart' },

  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理员页面',
    routes: [
      { path: '/admin', name:'管理页面', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page',name:'管理页面2', component: './Admin' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
