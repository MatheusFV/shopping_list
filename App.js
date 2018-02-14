import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './modules/components/Header'
import AlbumList from './modules/components/AlbumsList'
import Msg from './modules/components/Msg'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header text={'Albums'} />
        <AlbumList />
        {/* <Msg /> */}
      </View>
    );
  }
}
