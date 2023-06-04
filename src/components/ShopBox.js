import React, {memo} from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import Styles from '../Styles/Styles';

function ShopBox(props) {
  let imgurl = {uri: props.img};
  return (
    <View style={Styles.shopbox}>
      <Image source={imgurl} style={Styles.shopeimg} />
      <Text style={Styles.shopenm}>{props.name}</Text>
      <Text style={Styles.shopsn}>{props.subnum}K Followers</Text>
      <Pressable style={Styles.shopbtn}>
        <Text>{props.btn}</Text>
      </Pressable>
    </View>
  );
}

export default memo(ShopBox);
