// import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from '@tarojs/components';
import image from '../../image/home/1.png';
import './index.less';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
// import { CounterContext } from '../../CounterContext/CounterContext';

const initialData = [
  {
    id: 1,
    name: '商品1',
    price: 29.99,
    quantity: 2,
    imageUrl: image // 替换成实际商品图片链接
  },
  {
    id: 2,
    name: '商品2',
    price: 49.99,
    quantity: 3,
    imageUrl: image
  },
  {
    id: 3,
    name: '商品3',
    price: 99.99,
    quantity: 5,
    imageUrl: image
  }
];

// import {
//   cartStore,
//   // removeItemFromCart,
//   updateItemQuantity
// } from '../../store/cartStore';

export default function Index() {
  // const { count, increment, decrement } = useContext(CounterContext);
  //   const [cartItems, setCartItems] = useState([]);
  //   useEffect(() => {
  //     const unsubscribe = cartStore.subscribe(() => {
  //       const { cartItems } = cartStore.getState();
  //       setCartItems(cartItems);
  //     });
  //     return () => unsubscribe();
  //   }, []);

  //   const handleRemoveItem = (itemId) => {
  //     removeItemFromCart(itemId);
  //   };

  // const handleUpdateQuantity = (itemId, quantity) => {
  //   updateItemQuantity(itemId, quantity);
  // };

  //   const handleCheckout = () => {
  //     // 跳转到结算页面
  //   };
  const ctx = useContext(CartContext);
  return (
    <View className="cart-page">
      <Text className="cart-title">购物车111</Text>

      {initialData.map((item) => (
        <View key={item.id} className="cart-item">
          <Image src={item.imageUrl} className="cart-item-image" />
          <View className="cart-item-info">
            <Text className="cart-item-name">{item.name}</Text>
            <View className="cart-item-details">
              <Text className="cart-item-price">￥33</Text>
              <View className="cart-item-quantity">
                <Button
                  className="quantity-btn"
                  // onClick={() => updateQuantity(item.id, -1)}
                  // disabled={item.quantity <= 1}
                >
                  -
                </Button>
                <Text className="quantity-text">{item.quantity}</Text>
                <Button
                  className="quantity-btn"
                  // onClick={() => handleUpdateQuantity(item.id, 1)}
                >
                  +
                </Button>
              </View>
            </View>
          </View>
        </View>
      ))}

      <View className="cart-footer">
        <Text className="total-price">
          {/* 总计: ￥
         50
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)} */}
          价格￥{ctx.totalPrice}
        </Text>
        <Button className="checkout-btn">结算</Button>
      </View>
    </View>
  );
}
