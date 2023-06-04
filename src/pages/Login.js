import React, {memo, useState} from 'react';
import {Image, Pressable, StatusBar, Text, View} from 'react-native';
import Passwordfild from '../components/Passwordfild';
import Styles from '../Styles/Styles';
import Emailfield from '../components/Emailfield';
import {httpGetAsynclogin} from '../Funtions/Requests';
import {useNavigation} from '@react-navigation/native';
import navRouts from '../Constants/navRouts';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  var navigation = useNavigation();
  const plogin = obj => {
    if (obj) {
      navigation.reset({
        index: 0,
        routes: [{name: navRouts.MAINNAV}],
      });
    }
  };
  return (
    <View style={Styles.logincontainer}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <Image
        source={require('../images/login_logo.png')}
        style={Styles.loginpagelogo}
      />
      <Text style={Styles.welcome}>WELCOME BACK!</Text>
      <Emailfield val={email} onchange={setEmail} />
      <Passwordfild val={password} onchange={setPassword} />
      <Pressable
        style={Styles.loginbtn}
        onPress={() => {
          httpGetAsynclogin(plogin, email, password);
        }}>
        <Text style={Styles.loginbtntxt}>Log in</Text>
      </Pressable>
    </View>
  );
}

export default memo(Login);
