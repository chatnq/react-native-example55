import React, {Component} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {StackNavigator } from 'react-navigation';
import LogoTitle from './Logo';
  export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
      return {
      headerTitle: <LogoTitle />,
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#2f2"
        />
      ),
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#2f2"
        />
      ),
    }
    };
    componentDidMount() {
      this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }
  
    state = {
      count: 0,
    };
  
    _increaseCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Text>Count: {this.state.count}</Text>
          <Button
            title="Go to Details"
            onPress={() => {
              this.props.navigation.navigate('Details', {
                itemId:86,
                otherParam:'Anything you want here'
              });
            }}
          />
          
        </View>
      );
    }
  }