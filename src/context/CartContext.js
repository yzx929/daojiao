// import React from 'react';

// // 创建Context，默认值为一个对象，包含num和两个方法
// const CartContext = React.createContext({
//   num: 22,
//   increment: () => {},
//   decrement: () => {}
// });

// export default CartContext;

import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}
});

export default CartContext;
