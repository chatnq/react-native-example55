import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Button} from 'react-native';

export default class ScreenThree extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen Three</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fa9928',
      // borderRightWidth: 3,
      // borderColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
  }
});
