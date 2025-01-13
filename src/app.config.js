export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/category/index',
    'pages/welfare/index',
    'pages/cart/index',
    'pages/mine/index',
    'pages/counter/counter'
  ],

  tabBar: {
    custom: false,
    color: '#AAAAAA',
    selectedColor: '#333333',
    borderStyle: 'black',
    list: [
      {
        selectedIconPath: './image/tab/tab_icon1_hover.png',
        iconPath: './image/tab/tab_icon1.png',
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        selectedIconPath: './image/tab/tab_icon2_hover.png',
        iconPath: './image/tab/tab_icon2.png',
        pagePath: 'pages/category/index',
        text: '分类'
      },
      {
        selectedIconPath: './image/tab/tab_icon3_hover.png',
        iconPath: './image/tab/tab_icon3.png',
        pagePath: 'pages/welfare/index',
        text: '福利'
      },
      {
        selectedIconPath: './image/tab/tab_icon4_hover.png',
        iconPath: './image/tab/tab_icon4.png',
        pagePath: 'pages/cart/index',
        badge: '199',
        text: '购物车'
      },
      {
        selectedIconPath: './image/tab/tab_icon5_hover.png',
        iconPath: './image/tab/tab_icon5.png',
        pagePath: 'pages/mine/index',
        text: '我的'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
});
