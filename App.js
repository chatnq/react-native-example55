/*import React from 'react';
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
*/

import React, { Component } from 'react';
//import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppRedux from './Redux/Index';

const defaultState = { value: 0, highlight: false, titlesize: 14 };

const reducer = (state = defaultState, action) => {
  if (action.type === 'UP') return { value: state.value + 1, highlight: state.highlight, titlesize: state.titlesize };
  if (action.type === 'DOWN') return { value: state.value - 1, highlight: state.highlight, titlesize: state.titlesize };
  if (action.type === 'CHANGE_COLOR') return { value: state.value, highlight: !state.highlight, titlesize: state.titlesize }
  if (action.type === 'SIZE_UP') return { value: state.value, highlight: state.highlight, titlesize: state.titlesize+2 }
  if (action.type === 'SIZE_DOWN') return { value: state.value, highlight: state.highlight, titlesize: state.titlesize-2 }
  return state;
};

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRedux />
      </Provider>
    );
  }
}

