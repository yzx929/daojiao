import { View, Image, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './shopList.less';
import image1 from '../../image/home/1.png';
import image2 from '../../image/home/2.png';
import image3 from '../../image/home/3.png';
import image4 from '../../image/home/4.png';
import image5 from '../../image/home/5.png';

export default function ShopItem() {
  const categories = [
    { id: 1, name: '分类1', url: image1 },
    { id: 2, name: '分类2', url: image2 },
    { id: 3, name: '分类3', url: image3 },
    { id: 4, name: '分类4', url: image4 },
    { id: 5, name: '分类5', url: image5 },
    { id: 6, name: '分类6', url: image1 },
    { id: 7, name: '分类7', url: image2 },
    { id: 8, name: '分类8', url: image3 },
    { id: 9, name: '分类9', url: image4 },
    { id: 10, name: '分类10', url: image5 }
  ];
  const handlerClickClass = () => {
    Taro.switchTab({
      url: '/pages/category/index'
    });
  };
  return (
    <View className="home-banner">
      <View className="row">
        {categories.slice(0, 5).map((item) => (
          <View
            className="category-item"
            key={item.id}
            onclick={() => {
              handlerClickClass(item.id);
            }}
          >
            <Image className="category-icon" src={item.url} />
            <Text className="category-name">{item.name}</Text>
          </View>
        ))}
      </View>
      <View className="row">
        {categories.slice(5, 10).map((item) => (
          <View
            className="category-item"
            key={item.id}
            onclick={() => {
              handlerClickClass(item.id);
            }}
          >
            <Image className="category-icon" src={item.url} />
            <Text className="category-name">{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
