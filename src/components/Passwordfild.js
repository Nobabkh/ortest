import React, {memo, useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import Styles from '../Styles/Styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Passwordfild(props) {
  const [eyeopen, setEyeopen] = useState(true);
  return (
    <View style={Styles.loginboxtxtbox}>
      <Fontisto
        name={'locked'}
        color={'black'}
        size={15}
        style={Styles.iconst}
      />
      <TextInput
        style={Styles.loginboxtxtinput}
        placeholder={'Password'}
        value={props.val}
        onChangeText={props.onchange}
        placeholderTextColor={'#818688'}
        secureTextEntry={eyeopen}
      />
      <Pressable
        onPress={() => {
          setEyeopen(!eyeopen);
        }}>
        <Ionicons
          name={eyeopen ? 'eye' : 'eye-off'}
          size={15}
          color={'black'}
          style={Styles.iconstr}
        />
      </Pressable>
    </View>
  );
}
export default memo(Passwordfild);
