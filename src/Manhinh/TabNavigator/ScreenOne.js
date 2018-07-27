import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Button} from 'react-native';

export default class ScreenOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen One</Text>
        <Button title='Log out!' onPress={() => this.props.screenProps.navigation.navigate('WelcomeScreen')}></Button>
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