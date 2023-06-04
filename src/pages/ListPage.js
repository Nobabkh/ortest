import React, {memo} from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Styles from '../Styles/Styles';
import SearchBar from '../components/SearchBar';
import ShopBox from '../components/ShopBox';
import Grid from './Grid';

function ListPage() {
  return (
    <View>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <View style={Styles.listheadermain}>
        <View style={Styles.listheader}>
          <Text style={Styles.exlpore}>EXPLORE</Text>
          <AntDesign name={'plus'} color={'black'} size={28} />
        </View>
        <SearchBar />
      </View>
      <Text style={Styles.brandtxt}>Top street-style-brands</Text>
      <ScrollView nestedScrollEnabled={true} style={{width: '100%'}}>
        <View style={Styles.mainlist}>
          <Grid />
        </View>
      </ScrollView>
    </View>
  );
}

export default memo(ListPage);
