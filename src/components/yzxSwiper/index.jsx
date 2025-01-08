import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import { useState } from 'react';
import './index.less';

import image1 from '../../image/home/1.png';
import image2 from '../../image/home/2.png';
import image3 from '../../image/home/3.png';
import image4 from '../../image/home/4.png';
import image5 from '../../image/home/5.png';

export default function SwiperOne() {
  const [current, setCurrent] = useState(0); // 当前显示的轮播图索引

  const images = [
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
    { id: 4, url: image4 },
    { id: 5, url: image5 }
  ]; // 轮播图的图片链接

  const handleChange = (event) => {
    setCurrent(event.detail.current);
  };
  return (
    <View className="carousel-container">
      <Swiper
        className="carousel"
        current={current}
        onChange={handleChange}
        indicatorColor="white"
        indicatorActiveColor="red"
        circular
        autoplay
        interval={3000}
        indicatorDots
      >
        {images.map((item, index) => (
          <SwiperItem key={item.id}>
            <Image mode="widthFix" className="carousel-image" src={item.url} />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
}
