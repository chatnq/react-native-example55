import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Button} from 'react-native';
import {DrawerItems, createDrawerNavigator, createStackNavigator } from 'react-navigation';
// import HomeScreen from './HomeScreen';
import Profile from '../src/components/ChangeInfo/Profile';
import TaskHistory from '../src/components/TaskHistory/TaskHistory';

import HomeScreenTabNavigator from './HomeScreenTabNavigator';

//Add new this following code to clean yellow bug
// export default class DrawerNavigator extends Component {
//     render() {
//       return (
//         <AppDrawerNavigator></AppDrawerNavigator>
//       );
//     }
// }



const InnerStackNavigator = new createStackNavigator({
    TabNavigator:{
        screen: HomeScreenTabNavigator,
        navigationOptions: {
            headerStyle: {
              backgroundColor: 'white'
            }
        }
    }, 
})

const DrawerContent = (props) => (
    <View>
      <View
        style={{
          backgroundColor: '#fa9928',
          height: 140,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 30 }}>
          GoService
        </Text>
      </View>
      <DrawerItems {...props} />
    </View>
  )

const AppDrawerNavigator = new createDrawerNavigator({
    HomeScreen: {
        screen: InnerStackNavigator,
        navigationOptions: {
            drawerLabel: () => null
        }
    },
    History: {screen: TaskHistory},
    Profile: {screen: Profile},
    // 'User settings': {screen: UserSetting},
    // 'App settings': {screen: AppSetting},
    // 'About GoService': {screen: About},
},
{
    contentComponent: DrawerContent,
})

export default AppDrawerNavigator;

