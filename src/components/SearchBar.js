import React, {memo} from 'react';
import {TextInput, View} from 'react-native';
import Styles from '../Styles/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SearchBar(props) {
  return (
    <View style={Styles.loginboxtxtbox}>
      <Ionicons
        name={'search'}
        color={'black'}
        size={15}
        style={Styles.iconst}
      />
      <TextInput
        style={Styles.loginboxtxtinput}
        placeholder={'Search here....'}
        value={props.val}
        onChangeText={props.onchange}
        placeholderTextColor={'#818688'}
      />
    </View>
  );
}
export default memo(SearchBar);
