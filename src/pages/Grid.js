import React, {memo, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {httpGetAsyncstores} from '../Funtions/Requests';
import Styles from '../Styles/Styles';
import ShopBox from '../components/ShopBox';

function Grid() {
  const [shoplist, setShoplist] = useState();
  httpGetAsyncstores(setShoplist);
  if (shoplist !== undefined) {
    return (
      <FlatGrid
        itemDimension={130}
        data={shoplist}
        style={Styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({item}) => (
          <ShopBox name={item.name} img={item.image} btn={'Follow'} />
        )}
      />
    );
  } else {
    return <View />;
  }
}

export default memo(Grid);
