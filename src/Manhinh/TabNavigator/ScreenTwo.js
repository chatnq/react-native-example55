import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Button} from 'react-native';

export default class ScreenTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen Two</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fa9928',
      justifyContent: 'center',
      alignItems: 'center'
  }
});