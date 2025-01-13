import { View, Picker, Input } from '@tarojs/components';
import { useState } from 'react';
import './index.less';
import SwiperOne from '../../components/yzxSwiper/index';
import ShopItem from '../../components/shopList/index';
import ShopStyleOne from '../../components/shopStyleOne/index';
import Counter from '../counter/counter';

export default function Index() {
  const [shopList] = useState(['梧村店1', '石澳店']);
  const [selectShop, setSelectShop] = useState('梧村店');
  const onChange = (e) => {
    console.log('当前选择的店铺是：', e?.target?.value);
    setSelectShop(shopList[e?.target?.value]);
  };
  return (
    <View className="index_wraper">
      <View className="index_page">
        <Picker
          mode="selector"
          range={shopList}
          onChange={onChange}
          value={selectShop}
        >
          <View className="picker">{selectShop}</View>
        </Picker>
        <Input
          className="search-input"
          type="text"
          placeholder="搜索商品"
          //value={searchText}
          //onInput={(e) => setSearchText(e.detail.value)}
          //onConfirm={handleSearch}
        />
        {/* <View className="search-button" onClick={handleSearch}>
        搜索
      </View> */}
        <View>扫一扫</View>
      </View>

      <SwiperOne />
      <ShopItem />
      <ShopStyleOne />
      <Counter />
    </View>
  );
}
