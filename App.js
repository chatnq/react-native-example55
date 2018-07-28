import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Detail' ;
import ModalScreen from './src/screens/modal' ;

//following  code to remove the warning: isMounted ....
//As people on forum said that: this warning was throw out when have conflictiion between react-native and react-navigator version
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
    
  }
}
