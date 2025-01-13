import { useLaunch } from '@tarojs/taro';

import './app.less';
import React, { useContext } from 'react';
// import CartContext from './context/cart';

function App({ children }) {
  useLaunch(() => {
    console.log('App launched.');
  });
  // value={{ ...cartData, addItem, removeItem, clearCart }}

  // children 是将要会渲染的页面

  return children;

  // return (
  //   <CartContext.Provider value={cartDataoo}>{children}</CartContext.Provider>
  // );
}

export default App;
