export default [
  {
    path: '/',
    component: '../layouts',
    routes: [
      { path: '/', redirect: '/dashboard' },
      { path: '/dashboard', component: './dashboard/index'},
    ],
  },
];
  