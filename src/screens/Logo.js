import React, {Component} from 'react';
import {Image, View, Text } from 'react-native';

export default class LogoTitle extends React.Component {
    render() {
      return (
        <View>
        <Image
          source={require('./cart.png')}
          style={{ width: 30, height: 30 }}
        />         
               </View>
      );
    }
  }