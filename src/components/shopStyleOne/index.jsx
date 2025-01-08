import { View, Text, Image, ScrollView } from '@tarojs/components';
import { useState, useEffect } from 'react';
import './shopStyleOne.less';
import image1 from '../../image/home/1.png';
import image2 from '../../image/home/2.png';
import image3 from '../../image/home/3.png';
import image4 from '../../image/home/4.png';
import image5 from '../../image/home/5.png';
export default function ShopStyleOne() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    // console.log('添加到购物车', item);
    setCart([...cart, item]);
  };
  const goodsList = [
    {
      image: image1,
      name: '商品名称1',
      discount: '8折',
      price: 99.9
    },
    {
      image: image2,
      name: '商品名称2',
      discount: '9折',
      price: 199.9
    },
    {
      image: image3,
      name: '商品名称3',
      discount: '9折',
      price: 199.9
    },
    {
      image: image4,
      name: '商品名称4',
      discount: '9折',
      price: 199.9
    },
    {
      image: image5,
      name: '商品名称5',
      discount: '9折',
      price: 199.9
    }
  ];
  useEffect (() => {
    updateTabBarBadge(count) {
      if (count > 0) {
        Taro.setTabBarBadge({
          index: 1, // TabBar 的索引，购物车在第 2 个，所以是 1
          text: count.toString() // 更新数量，注意是字符串类型
        });
      } else {
        Taro.removeTabBarBadge({
          index: 1
        });
      }
    }
  })
  return (
    <View className="goods-list">
      <View className="title">
        <Image src={image3} className="title-image" />
      </View>
      <ScrollView
        className="goods-container"
        scrollX
        scrollWithAnimation={true}
      >
        {goodsList.map((item, index) => (
          <View key={index} className="goods-item">
            <Image src={item.image} className="goods-image" />
            <View className="goods-info">
              <View className="goods-name">{item.name}</View>
              <View>
                <Text className="discount-label">{item.discount}</Text>
                <Text className="goods-label">包</Text>
              </View>
              <View>
                <Text className="price">¥{item.price}</Text>
                <Text
                  className="add-to-cart-text"
                  onClick={() => addToCart(item)}
                >
                  +
                </Text>
              </View>
            </View>
            {/* <Button
            //   className="add-to-cart"
            //   onClick={() => this.addToCart(item)}
            >
              <Text className="add-text">+</Text>
            </Button> */}
          </View>
        ))}
      </ScrollView>
      <View className="goods-more">查看更多11 </View>
    </View>
  );
}
